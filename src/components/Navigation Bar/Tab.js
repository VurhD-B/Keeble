const Tab = ({ id, text, onClick }) => {
  const handleClick = () => {
    console.log("clicked: " + id);
  };
  return (
    <div
      id={id}
      className="container"
      onClick={onClick}
      style={{
        color: "#424874",
        fontWeight: "bold",
        cursor: "pointer",
        height: "100%",
      }}
    >
      {text}
    </div>
  );
};

export default Tab;
