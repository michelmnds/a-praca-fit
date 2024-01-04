import "./style.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ name, image }) => {
  return (
    <div className="cardContainer">
      <div
        className="cardImage"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(/src/${image})`,
          backgroundSize: 100,
          backgroundPosition: "center",
          backgroundColor: "white",
        }}
      />

      <span className="cardName">{name}</span>
    </div>
  );
};
