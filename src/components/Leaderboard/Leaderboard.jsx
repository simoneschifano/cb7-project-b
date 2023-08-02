import styles from "./Leaderboard.module.scss"
import { db } from "@/plugins/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Router from "next/router";

const Leaderboard = ({username}) => {
    
    const [scoresData, setScoresData] = useState()
    const [openModal, setOpenModal] = useState(true)
    
    const getData = async () => {
            console.log("get data")
            const data = []
            const querySnapshot = await getDocs(collection(db, "scoreboard"));
            querySnapshot.forEach((doc) => data.push(doc.data()))
            let orderedData = data.sort((y, x) => x.score - y.score);
            let scoreboard = orderedData.slice(0, 10);
            setScoresData(scoreboard)
        }


    const returnHome = () => {
        Router.push("/");
      };
   

    return <>{openModal && <div className={styles.Leaderboard}>
        
        <div className={styles.Leaderboard__Header}>
            <div className={styles.Close__Button} onClick={returnHome}>
                <Image className={styles.Back__Button__Image} src={'https://www.svgrepo.com/show/18507/back-button.svg'} width={40} height={40} alt="back_button_image" />
            </div>
            <div className={styles.Leaderboard__Header__Center}>
                <h2>Leaderboard</h2>
                <button onClick={getData}>ShowScores</button>
            </div>
            <div>
                <h3>{username}</h3>
            </div>
        </div>
        <div className={styles.Leaderboard__Main}>
            {scoresData && scoresData.map((singleScore, index) => {
                return <div className={styles.Leaderboard__row} key={index}>
                    <h3>{index + 1}° - </h3>
                    <h4>{singleScore.username} - </h4>
                    <p><strong>{singleScore.score.toFixed(2)}</strong></p>
                </div>
            })
            }
        </div>
    </div>}
    </>
}

export default Leaderboard;