import styles from './StarCard.module.scss'

const StarCard = ({ data }) => {
    return (
        <>
            <div className={styles.card}>

                {data.name && <h3> name:{data.name} </h3>} 

                {data.constellation && <h3> constellation:{data.constellation} </h3>} 

                {data.right_ascension && <h3> right_ascension:{data.right_ascension} </h3>} 

                {data.spectral_class && <h3> spectral class:{data.spectral_class} </h3>}  

                {data.distance_light_year && <h3> distance light year:{data.distance_light_year} </h3>} 
                
            </div>
        </>
    )
}

export default StarCard;