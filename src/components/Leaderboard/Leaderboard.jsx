import styles from "./leaderboard.module.scss"
import { db } from "@/plugins/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";

const Leaderboard = ({score}) => {
    
    const [scoresData, setScoresData] = useState([])

    const addData = async () => {
        const docRef = await addDoc(collection(db, "scores"), {
            id: `${localStorage.getItem("skinColor")}${localStorage.getItem("suitColor")}` ,
            score: score,
            username: localStorage.getItem("username")
          });
    }
    
    addData()

    const getData = async () => {
        const data = []
        const querySnapshot = await getDocs(collection(db, "scores"));
        querySnapshot.forEach((doc) => data.push(doc.data()))

        return data
    }

    getData().then((data) => {
        let orderedData = data.sort((x, y) => x.score - x.score)
        let scoreboard = orderedData.slice(0, 10)

        setScoresData(scoreboard)
    })

    return <div className={styles.Leaderboard}>
        <div className={styles.Leaderboard__Header}>
            <h1>Leaderboard</h1>
            <div className={styles.Leaderboard__close}></div>
        </div>
        <div className={styles.Leaderboard__Main}>
            {scoresData && scoresData.map((score, index) => {
                return <div className={styles.Leaderboard__row} key={Math.floor(Math.random() * 10000)}>
                    <h3>{index + 1}</h3>
                    <h4>{score.username}</h4>
                    <p>{score.score}</p>
                </div>
            })
            }
        </div>
    </div>
}

export default Leaderboard;