import styles from "./PlanetCard.module.scss";

const PlanetCard = ({ data }) => {
  return (
    <>
      <div className={styles.Card__Wrapper} draggable>
        <div className={styles.Card__Main}>
          {data.name && <h3> Name: {data.name} </h3>}

          {data.mass && <h3> Mass: {data.mass} </h3>}

          {data.radius && <h3> Radius: {data.radius} </h3>}

          {data.temperature && <h3> Temperature: {data.temperature} </h3>}

          {data.period && <h3> Period: {data.period} </h3>}
        </div>
      </div>
    </>
  );
};

export default PlanetCard;
