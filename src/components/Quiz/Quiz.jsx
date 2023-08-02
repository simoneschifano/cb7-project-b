import { useState, useEffect, useRef } from "react";
import { db } from "@/plugins/firebase";
import { collection, addDoc } from "firebase/firestore";
import Leaderboard from "../Leaderboard";
import Router from "next/router";
import Image from "next/image";
import styles from "./Quiz.module.scss";

const Quiz = ({ data }) => {
  const [randomQuest, setRandomQuest] = useState(false);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [username, setUsername] = useState("");
  const doneAnswer = useRef();
  const [correctCounter, setCorrectCounter] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [timer, setTimer] = useState(false);
  const [finalScore, setFinalScore] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setTimer(0);
      setCompletedQuiz(true);
      setStartedQuiz(false);
    }
    timer && timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  const addData = async () => {
    if (finalScore) {
      setOpenModal(true);
      const docRef = await addDoc(collection(db, "scoreboard"), {
        id: `${localStorage.getItem("username")}${localStorage.getItem(
          "skinColor"
        )}${localStorage.getItem("suitColor")}`,
        score: finalScore,
        username: localStorage.getItem("username"),
      });
    }
  };

  const rightAnswer = (difficulty) => {
    setCorrectCounter(correctCounter + 1);
    setScore(score + difficulty);
    setAnswerCounter(answerCounter + 1);
    setTimeout(() => {
      doneAnswer.current.style.display = "none";
      startQuiz();
    }, 1000);
    doneAnswer.current.style.border = "2px solid #7af683ff";
  };

  const startQuiz = () => {
    setStartedQuiz(true);
    if (startedQuiz === false) {
      setTimer(60);
      const randomData = [...data].sort(() => 0.5 - Math.random());
      setRandomQuest(randomData[[Math.floor(Math.random() * 9)]]);
    } else if (timer === 0) {
      setCompletedQuiz(true);
      setTimer(false);
      setFinalScore(score * (1 + timer * 0.01));
    } else if (answerCounter < 9) {
      const randomData = [...data].sort(() => 0.5 - Math.random());
      setRandomQuest(randomData[[Math.floor(Math.random() * 9)]]);
    } else {
      setCompletedQuiz(true);
      setTimer(false);
      setFinalScore(score * (1 + timer * 0.01));
    }
    setUsername(localStorage.getItem("username"));
  };

  const wrongAnswer = () => {
    doneAnswer.current.style.border = "2px solid #dc143c";
    setAnswerCounter(answerCounter + 1);
    setTimeout(() => {
      doneAnswer.current.style.display = "none";
      startQuiz();
    }, 1000);
  };

  const returnHome = () => {
    Router.push("/");
  };

  const onHandleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={styles.Quiz__main}>
      <h1>ASTROquiz</h1>
      {completedQuiz ? null : <h2>{username}</h2>}
      <div className={styles.Close__Button} onClick={returnHome}>
        <Image
          className={styles.Back__Button__Image}
          src={"https://www.svgrepo.com/show/18507/back-button.svg"}
          width={40}
          height={40}
          alt="back_button_image"
        />
      </div>

      {completedQuiz ? null : (
        <div className={styles.Quiz__Info}>
          <h3>Timer: {timer}</h3>
          <h3>Correct answers: {correctCounter}</h3>
          <h3>Given answers: {answerCounter}</h3>
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
        {completedQuiz && finalScore && (
          <div className={styles.Question__Container}>
            <div className={styles.Completed__Quiz}>
              <h2>{username}</h2>
              <h3>
                Correct answers: <strong>{correctCounter}</strong>
              </h3>
              <h3>
                Your score: <strong>{finalScore.toFixed(2)}</strong>
              </h3>
              {finalScore && <button onClick={addData}>Add your score!</button>}
            </div>
          </div>
        )}
      </div>
      {completedQuiz && openModal && (
        <div className={styles.Leaderboard__Sidebar}>
          <Leaderboard username={username} />
        </div>
      )}
    </div>
  );
};

export default Quiz;
