interface BuildingBuilderProps {
  name: string;
  setName: Function;
}
export function PropertInfo(props: BuildingBuilderProps): JSX.Element {
  const { name, setName } = props;

  return (
    <div className=" overflow-auto rounded-lg border-l-gray-100 border-4 border border-gray-100  mt-4">
      <div className="flex flex-row sticky top-0 bg-gray-100 ">
        <h2 className="text-4xl text-gray-800 font-extrabold pl-4 pt-4 pb-2 min-w-max">
          Report Name: {/*{report.name}*/}
          <input
            className="bg-gray-100 focus:border focus:border-Theme"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </h2>
      </div>
    </div>
  );
}
