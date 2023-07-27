import styles from './PlanetCard.module.scss'

const PlanetCard = ({ data }) => {
    return (
        <>
            <div className={styles.card}>

                {data.name && <h3> name: {data.name} </h3>}

                {data.mass && <h3> mass: {data.mass} </h3>}

                {data.radius && <h3> radius: {data.radius} </h3>}

                {data.temperature && <h3> temperature: {data.temperature} </h3>}

                {data.period && <h3> period: {data.period} </h3>}
                
            </div>
        </>
    )
}

export default PlanetCard;