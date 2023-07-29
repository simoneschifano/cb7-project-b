import styles from "../PlanetCard/PlanetCard.module.scss";

const StarCard = ({ data }) => {
  return (
    <>
      <div className={styles.Card__Wrapper}>
        <div className={styles.Card__Main}>
          {data.name && <h3> Name:{data.name} </h3>}

          {data.constellation && <h3> Constellation:{data.constellation} </h3>}

          {data.right_ascension && <h3> Right Ascension:{data.right_ascension} </h3>}

          {data.spectral_class && <h3> Spectral Class:{data.spectral_class} </h3>}

          {data.distance_light_year && <h3> Distance Light Year:{data.distance_light_year} </h3>}
        </div>
      </div>
    </>
  );
};

export default StarCard;
