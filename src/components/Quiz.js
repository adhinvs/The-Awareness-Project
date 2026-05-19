import React, { useState } from 'react';
import styles from './Quiz.module.css';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function Quiz({ question, options }) {
  const [selected, setSelected] = useState(null);

  function handleSelect(index) {
    if (selected !== null) return;
    setSelected(index);
  }

  function handleReset() {
    setSelected(null);
  }

  const answered = selected !== null;
  const isCorrect = answered && options[selected].correct;

  return (
    <div className={styles.quiz}>
      <div className={styles.quizHeader}>
        <span className={styles.quizLabel}>Knowledge Check</span>
      </div>
      <p className={styles.question}>{question}</p>
      <div className={styles.options}>
        {options.map((option, index) => {
          const isSelected = selected === index;
          const optionCorrect = option.correct;

          let stateClass = '';
          if (isSelected) {
            stateClass = optionCorrect ? styles.correct : styles.wrong;
          } else if (answered) {
            stateClass = styles.disabled;
          }

          return (
            <div key={index} className={styles.optionWrapper}>
              <button
                className={`${styles.option} ${stateClass}`}
                onClick={() => handleSelect(index)}
                disabled={answered}
                aria-pressed={isSelected}
              >
                <span className={`${styles.letter} ${isSelected ? styles.letterSelected : ''}`}>
                  {isSelected ? (optionCorrect ? '✓' : '✗') : LETTERS[index]}
                </span>
                <span className={styles.optionLabel}>{option.label}</span>
              </button>
              {isSelected && (
                <p className={`${styles.explanation} ${styles.explanationVisible}`}>
                  {option.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {answered && isCorrect && (
          <p className={styles.wellDone}>Well done — that is exactly right.</p>
        )}
        {answered && !isCorrect && (
          <button className={styles.tryAgain} onClick={handleReset}>
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
