import styles from './PlanetCard.module.scss'

const PlanetCard = ({data}) => {
    return(
        <>
        <div className={styles.card}>{data.name}</div>
        </>
    )
}

export default PlanetCard;