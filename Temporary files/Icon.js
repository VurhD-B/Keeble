const Icon = ({ onClick }) => {
  return (
    <h2
      className="absolute left-5 top-5 font-pacifico text-sm/[1.5em] text-violet-600 cursor-pointer"
      onClick={onClick}
    >
      Keeble
    </h2>
  );
};

export default Icon;
