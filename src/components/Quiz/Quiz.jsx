import { useState, useEffect, useRef } from "react";

import styles from "./Quiz.module.scss";

const Quiz = ({ data }) => {
  const [randomQuest, setRandomQuest] = useState(false);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const doneAnswer = useRef();
  const [correctCounter, setCorrectCounter] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [score, setScore] = useState(0);

  const [timer, setTimer] = useState(60);
  useEffect(() => {
    timer && timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  const startQuiz = () => {
    setStartedQuiz(true);
    if (answerCounter < 9) {
      const randomData = [...data].sort(() => 0.5 - Math.random());
      setRandomQuest(randomData[[Math.floor(Math.random() * 9)]]);
    } else {
      setCompletedQuiz(true);
      setTimer(timer);
    }
  };

  const wrongAnswer = () => {
    setAnswerCounter(answerCounter + 1);
    setTimeout(() => {
      doneAnswer.current.style.display = "none";
      startQuiz();
    }, 1500);
    doneAnswer.current.style.boxShadow = "2px 2px #dc143c";
  };

  const rightAnswer = (difficulty) => {
    setCorrectCounter(correctCounter + 1);
    setScore(score + difficulty);
    setAnswerCounter(answerCounter + 1);
    setTimeout(() => {
      doneAnswer.current.style.display = "none";
      startQuiz();
    }, 1500);
    doneAnswer.current.style.boxShadow = "2px 2px #7af683ff";
  };

  return (
    <div className={styles.Quiz__main}>
      <h1>ASTROquiz</h1>
      {completedQuiz ? null : <h2>Username</h2>}

      {completedQuiz ? null : (
        <div className={styles.Quiz__Info}>
          <p>Timer: {timer}</p>
          <p>Correct answers: {correctCounter}</p>
          <p>Given answers: {answerCounter}</p>
        </div>
      )}
      <div className={styles.Quiz__Container}>
        {startedQuiz ? null : (
          <div className={styles.Question__Container}>
            <button onClick={startQuiz}>Inizia Quiz</button>
          </div>
        )}
        {randomQuest && (
          <div
            className={styles.Question__Container}
            key={randomQuest.id}
            ref={doneAnswer}>
            <h4>{randomQuest.question}</h4>
            <div className={styles.Answers__Container}>
              {/* <p onClick={rightAnswer} className={styles.Single__Answer}>{randomQuest.answers.correctAnswer}</p> */}
              {randomQuest &&
                randomQuest.answers.map((answer, index) => {
                  return (
                    <p
                      key={index}
                      onClick={
                        answer.isCorrect === true
                          ? () => rightAnswer(randomQuest.difficulty)
                          : wrongAnswer
                      }
                      className={styles.Single__Answer}>
                      {answer.answer}
                    </p>
                  );
                })}
            </div>
          </div>
        )}
        {completedQuiz && (
          <div className={styles.Question__Container}>
            <div className={styles.Completed__Quiz}>
              <h2>Username</h2>
              <h3>
                Correct answers: <strong>{correctCounter}</strong>
              </h3>
              <h3>
                Your score: <strong>{score}</strong>
              </h3>
              <h4>
                Your time: <strong>{timer}</strong>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
