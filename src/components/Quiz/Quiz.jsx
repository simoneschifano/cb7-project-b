import { useState, useEffect, useRef} from "react";
import styles from "./Quiz.module.scss"
import Leaderboard from "../Leaderboard";
import Router from "next/router";


const Quiz = ({ data }) => {
  const [randomQuest, setRandomQuest] = useState(false);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [username, setUsername] = useState("")
  const doneAnswer = useRef();
  const [correctCounter, setCorrectCounter] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [openModal, setOpenModal] = useState(false)
  const [timer, setTimer] = useState("");

  useEffect(() => {
    if (timer === 0) {
    setTimer(0)
    setCompletedQuiz(true);
    setStartedQuiz(false);
    }
    timer && timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]); 



  const rightAnswer = (difficulty) => {
    setCorrectCounter(correctCounter + 1)
    setScore(score + (difficulty))
    setAnswerCounter(answerCounter + 1)
    doneAnswer.current.style.border = '4px 4px #7af683ff'
    setTimeout(() => {
        doneAnswer.current.style.display = 'none';
        startQuiz()
    }, 1000)
    ;
}

  const startQuiz = () => {
    setStartedQuiz(true);
    if (startedQuiz === false) {
      setTimer(60);
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
    setUsername(localStorage.getItem("username"))
  };

  const wrongAnswer = () => {
    setAnswerCounter(answerCounter + 1);
    doneAnswer.current.style.border = '4px 4px #dc143c'
    setTimeout(() => {
      doneAnswer.current.style.display = "none";
      startQuiz();
    }, 1000);
  };

  const returnHome = () => {
      Router.push("/");
    };

    const onHandleModal = () => {
        setOpenModal(!openModal)
    }

  return (
    <div className={styles.Quiz__main}>
      <h1>ASTROquiz</h1>
      {completedQuiz ? null : <h2>{username}</h2>}
      <div className={styles.Close__Button} onClick={returnHome}>
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
              <button onClick={() => onHandleModal()}>Scoreboard</button>
            </div>
          </div>
        )}
      </div>
      {completedQuiz && openModal && 
      <div className={styles.Leaderboard__Sidebar}>
        <Leaderboard score={score} complete={completedQuiz}/>
      </div>}
    </div>
  );
};

export default Quiz;
