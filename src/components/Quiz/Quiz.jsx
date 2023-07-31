
import { useState, useEffect, useRef } from "react";
import styles from "./Quiz.module.scss"
import Leaderboard from "../Leaderboard";
import Router from "next/router";


const Quiz = ({ data }) => {
  const [randomQuest, setRandomQuest] = useState(false);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const doneAnswer = useRef();
  const { state, dispatch } = useContext(MainContext);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [score, setScore] = useState(0);


  const [timer, setTimer] = useState("");
  useEffect(() => {
    timer && timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      setCompletedQuiz(true);
      setStartedQuiz(false);
    }
  }, [timer]);

  const rightAnswer = (difficulty) => {
    setCorrectCounter(correctCounter + 1)
    setScore(score + (difficulty))
    setAnswerCounter(answerCounter + 1)
    setTimeout(() => {
        doneAnswer.current.style.display = 'none';
        startQuiz()
    }, 1500)
    doneAnswer.current.style.boxShadow = '2px 2px #7af683ff';
}

  const startQuiz = () => {
    setStartedQuiz(true);
    if (startedQuiz === false) {
      setTimer(10);
      const randomData = [...data].sort(() => 0.5 - Math.random());
      setRandomQuest(randomData[[Math.floor(Math.random() * 9)]]);
    } else if (timer === 0) {
      setCompletedQuiz(true);
      setScore(score * timer);
    } else if (answerCounter < 9) {
      const randomData = [...data].sort(() => 0.5 - Math.random());
      setRandomQuest(randomData[[Math.floor(Math.random() * 9)]]);
    } else {
      setCompletedQuiz(true);
      setScore(score * timer);
    }
  };

  const wrongAnswer = () => {
    setAnswerCounter(answerCounter + 1);
    setTimeout(() => {
      doneAnswer.current.style.display = "none";
      startQuiz();
    }, 1500);
    doneAnswer.current.style.boxShadow = "2px 2px #dc143c";

    // const returnHome = () => {
    //   Router.push("/");
    // };
  };

  return (
    <div className={styles.Quiz__main}>
      <h1>ASTROquiz</h1>
      {completedQuiz ? null : <h2>{state.username}</h2>}
      <div className={styles.Close__Button} >
        ᐅ
      </div>

      {completedQuiz ? null : (
        <div className={styles.Quiz__Info}>
          <h3>Timer: {timer}</h3>
          <h4>Correct answers: {correctCounter}</h4>
          <h6>Given answers: {answerCounter}</h6>
        </div>

      )}
      <div className={styles.Quiz__Container}>
        {startedQuiz === false && completedQuiz === false ? (
          <div className={styles.Question__Container}>
            <button onClick={startQuiz}>Inizia Quiz</button>
          </div>
        ) : null}
        {startedQuiz && randomQuest && (
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
              <button>Scoreboard</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
