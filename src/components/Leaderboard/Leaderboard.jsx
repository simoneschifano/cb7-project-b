import styles from "./Leaderboard.module.scss"
import { db } from "@/plugins/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";

const Leaderboard = ({score, complete}) => {
    
    const [scoresData, setScoresData] = useState([])
    const [openModal, setOpenModal] = useState(true)

    useEffect(() => {
        if (complete === true) {
          addData();
        }
      }, [complete]);

    useEffect(() => {
        getData().then((data) => {
            let orderedData = data.sort((x, y) => x.score - y.score);
            let scoreboard = orderedData.slice(0, 10);
            setScoresData(scoreboard);
          });
    }, [data])
    

    const addData = async () => {
        console.log("testo")
        const docRef = await addDoc(collection(db, "scores-list"), {
            id: `${localStorage.getItem("username")}${localStorage.getItem("skinColor")}${localStorage.getItem("suitColor")}`,
            score: score,
            username: localStorage.getItem("username")
          });
    }

    
    const getData = async () => {
        const data = []
        const querySnapshot = await getDocs(collection(db,"scores-list" ));
        querySnapshot.forEach((doc) => data.push(doc.data()))

        return data
    }

    const closeModal = () => {
        setOpenModal(false)
    }
   

    return <>{openModal && <div className={styles.Leaderboard}>
        <div className={styles.Leaderboard__Header}>
            <h2>Leaderboard</h2>
            <div className={styles.Leaderboard__close} onClick={closeModal}>x</div>
        </div>
        <div className={styles.Leaderboard__Main}>
            {scoresData && scoresData.map((score, index) => {
                return <div className={styles.Leaderboard__row} key={Math.floor(index)}>
                    <h3>{index + 1}</h3>
                    <h4>{score.username}</h4>
                    <p>{score.score}</p>
                </div>
            })
            }
        </div>
    </div>}
    </>
}

export default Leaderboard;