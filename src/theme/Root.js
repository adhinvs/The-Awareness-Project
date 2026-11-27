import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import Link from '@docusaurus/Link';
import { Analytics } from '@vercel/analytics/react';
import './search.css';

const WHATSAPP_URL = 'https://whatsapp.com/channel/0029Vb7GLFI3AzNVHlcg903x';

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true"><path d="M16 3.5a12.5 12.5 0 0 0-10.8 18.8L3.5 28.5l6.4-1.7A12.5 12.5 0 1 0 16 3.5Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/><path d="M11.3 9.7c-.5-.7-1.1-.6-1.7-.1-1 .9-1.3 2.1-1.1 3.3.6 3.7 4.9 8 8.5 9.2 2.1.7 4.8.6 6-1.2.5-.8.5-1.6-.2-2l-3.4-1.5c-.6-.2-1 .1-1.4.6l-.9 1.1c-2.3-.6-4.3-2.5-5.3-4.5l1.1-1.1c.4-.4.5-.9.3-1.4l-1.9-2.4Z" fill="currentColor"/></svg>;
}

function MobileWhatsApp() {
  const [expanded, setExpanded] = useState(false);
  const [drawerTarget, setDrawerTarget] = useState(null);

  useEffect(() => {
    let mount;
    const findPanel = () => {
      const list = document.querySelector('.navbar-sidebar__item .theme-doc-sidebar-menu');
      if (!list || (mount?.isConnected && mount.parentElement === list.parentElement)) return;
      mount?.remove();
      mount = document.createElement('div');
      mount.className = 'awareness-drawer-whatsapp-mount';
      list.parentElement.insertBefore(mount, list);
      setDrawerTarget(mount);
    };
    const observer = new MutationObserver(findPanel);
    observer.observe(document.body, {childList: true, subtree: true});
    findPanel();
    return () => { observer.disconnect(); mount?.remove(); };
  }, []);

  return <>
    <div className={`awareness-whatsapp-fab${expanded ? ' awareness-whatsapp-fab--expanded' : ''}`}>
      {expanded && <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="awareness-whatsapp-fab__label">Get Daily Insights on WhatsApp</a>}
      <button type="button" className="awareness-whatsapp-fab__button" aria-label={expanded ? 'Close WhatsApp invitation' : 'Get Daily Insights on WhatsApp'} aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>{expanded ? <span aria-hidden="true">×</span> : <WhatsAppIcon />}</button>
    </div>
    {drawerTarget && createPortal(<a className="awareness-drawer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span>Get Daily Insights on WhatsApp</span></a>, drawerTarget)}
  </>;
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>;
}

function Search() {
  const [targets, setTargets] = useState(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [documents, setDocuments] = useState(null);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const updateTargets = () => {
      const desktop = document.querySelector('.navbar__inner > .navbar__items--right');
      const mobile = document.querySelector('.navbar__inner > .navbar__items:first-child');
      setTargets(current => current?.desktop === desktop && current?.mobile === mobile ? current : {desktop, mobile});
    };
    const observer = new MutationObserver(updateTargets);
    observer.observe(document.body, {childList: true, subtree: true});
    updateTargets();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    const trapFocus = event => {
      if (event.key !== 'Tab') return;
      const dialog = inputRef.current?.closest('[role="dialog"]');
      const items = dialog?.querySelectorAll('input, button, a[href]');
      if (!items?.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    if (!documents) {
      import('@generated/awareness-search/default/search-index.json')
        .then(module => setDocuments(module.default))
        .catch(() => setDocuments([]));
    }
    return () => {
      document.removeEventListener('keydown', trapFocus);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open, documents]);

  const matches = useMemo(() => {
    if (!documents || !query.trim()) return [];
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return documents.map(doc => {
      const title = doc.title.toLowerCase();
      const tags = doc.tags.join(' ').toLowerCase();
      const description = doc.description.toLowerCase();
      const body = doc.body.toLowerCase();
      if (!terms.every(term => title.includes(term) || tags.includes(term) || description.includes(term) || body.includes(term))) return null;
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 10 : 0) + (tags.includes(term) ? 7 : 0) + (description.includes(term) ? 3 : 0) + (body.includes(term) ? 1 : 0), 0);
      return {...doc, score};
    }).filter(Boolean).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, 12);
  }, [documents, query]);

  const trigger = mobile => <button
    type="button"
    className={`awareness-search-trigger ${mobile ? 'awareness-search-trigger--mobile' : 'awareness-search-trigger--desktop'}`}
    aria-label="Search modules"
    title="Search modules"
    onClick={event => {triggerRef.current = event.currentTarget; setOpen(true);}}
  ><SearchIcon /></button>;

  return <>
    {targets?.desktop && createPortal(trigger(false), targets.desktop)}
    {targets?.mobile && createPortal(trigger(true), targets.mobile)}
    {open && createPortal(<div className="awareness-search-backdrop" onMouseDown={event => {if (event.target === event.currentTarget) setOpen(false);}}>
      <section className="awareness-search-dialog" role="dialog" aria-modal="true" aria-label="Search modules">
        <div className="awareness-search-input-row">
          <SearchIcon />
          <input ref={inputRef} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search modules…" aria-label="Search modules, topics, and tags" />
          <button type="button" className="awareness-search-close" onClick={() => setOpen(false)} aria-label="Close search">×</button>
        </div>
        <div className="awareness-search-results" aria-live="polite">
          {!documents ? <p>Loading modules…</p> : !query.trim() ? <p>Search {documents.length} guides by title, topic, or tag. Try “phishing”, “privacy”, or “digital arrest”.</p> : matches.length ? matches.map(doc => <Link key={doc.url} to={doc.url} className="awareness-search-result" onClick={() => setOpen(false)}>
            <strong>{doc.title}</strong>
            {doc.description && <span>{doc.description}</span>}
            {doc.tags.length > 0 && <small>{doc.tags.slice(0, 5).join(' · ')}</small>}
          </Link>) : <p>No matching modules. Try a shorter phrase or another tag.</p>}
        </div>
      </section>
    </div>, document.body)}
  </>;
}

export default function Root({ children }) {
  return (
    <>
      {children}
      <Search />
      <MobileWhatsApp />
      <Analytics />
    </>
  );
}
