import "./Icon.css";

const Icon = ({ onClick }) => {
  const iconStyle = {
    fontSize: "1.5em",
    color: "purple",
    cursor: "pointer",
  };

  return (
    <h2 id="icon" style={iconStyle} onClick={onClick}>
      Keeble
    </h2>
  );
};

export default Icon;
