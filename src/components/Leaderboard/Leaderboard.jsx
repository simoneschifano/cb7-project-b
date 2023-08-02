import { db } from "@/plugins/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useRef, useState } from "react";
import Router from "next/router";
import styles from "./Leaderboard.module.scss"

const Leaderboard = ({username}) => {
    
    const [scoresData, setScoresData] = useState()
    const [openModal, setOpenModal] = useState(true)
    const [closedButton, setClosedButton] = useState(false)
    const colorRef = useRef()
    
    const getData = async () => {
            const data = []
            const querySnapshot = await getDocs(collection(db, "scoreboard"));
            querySnapshot.forEach((doc) => data.push(doc.data()))
            let orderedData = data.sort((y, x) => x.score - y.score);
            let scoreboard = orderedData.slice(0, 10);
            setClosedButton(true)
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
                {!closedButton && <button onClick={getData}>Show scores</button>}
            </div>
            <div className={styles.Leaderboard__Header__Username}>
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