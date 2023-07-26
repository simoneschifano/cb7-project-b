import styles from  './StarCard.module.scss'

const StarCard = ({data}) => {
    return(
        <>
        <div className={styles.card}>{data.name}</div>
        </>
    )
}

export default StarCard;