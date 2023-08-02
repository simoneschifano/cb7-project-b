import styles from "../PlanetCard/PlanetCard.module.scss";

const StarCard = ({ data }) => {
  return (
    <>
      <div className={styles.Card__Wrapper}>
        <div className={styles.Card__Main}>
          {data.name && <p> <strong>Name:</strong>{data.name} </p>}

          {data.constellation && <p> <strong>Constellation:</strong>{data.constellation} </p>}

          {data.right_ascension && <p> <strong>Right Ascension:</strong>{data.right_ascension} </p>}

          {data.spectral_class && <p> <strong>Spectral Class:</strong>{data.spectral_class} </p>}

          {data.distance_light_year && <p> <strong>Distance Light Year:</strong>{data.distance_light_year} </p>}
        </div>
      </div>
    </>
  );
};

export default StarCard;
