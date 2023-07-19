import AssemblyItem from "./AssemblyItem";

const AssemblyGrid = () => {
  return (
    <div className="flex flex-col items-start space-y-4 justify-center">
      <AssemblyItem />
      <AssemblyItem />
      <AssemblyItem />
    </div>
  );
};

export default AssemblyGrid;
