import styles from "./PlanetCard.module.scss";

const PlanetCard = ({ data }) => {
  return (
    <>
      <div className={styles.Card__Wrapper} draggable>
        <div className={styles.Card__Main}>
          {data.name && <p> <strong>Name:</strong>  {data.name} </p>}

          {data.mass && <p> <strong>Mass:</strong> {data.mass} </p>}

          {data.radius && <p> <strong>Radius:</strong> {data.radius} </p>}

          {data.temperature && <p> <strong>Temperature:</strong> {data.temperature} </p>}

          {data.period && <p> <strong>Period:</strong> {data.period} </p>}
        </div>
      </div>
    </>
  );
};

export default PlanetCard;
