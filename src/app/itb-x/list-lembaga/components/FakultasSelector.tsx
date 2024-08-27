import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

interface FakultasSelectorProps {
  fakultasList: string[];
  handleFilterClick: (fakultas: string[]) => void;
  selectedFakultas: string[];
}

function FakultasSelector(props: FakultasSelectorProps) {
  const { fakultasList, handleFilterClick, selectedFakultas } = props;
  const [fakultasChoices, setFakultasChoices] = useState<Set<string>>(
    new Set<string>(selectedFakultas),
  );

  const toggleCheckbox = (choice: string) => {
    fakultasChoices.has(choice)
      ? setFakultasChoices((prevSet) => {
          const newSet = new Set(prevSet);
          newSet.delete(choice);
          return newSet;
        })
      : setFakultasChoices((prevSet) => {
          const newSet = new Set(prevSet);
          newSet.add(choice);
          return newSet;
        });
  };

  useEffect(() => {
    handleFilterClick(Array.from(fakultasChoices));
  }, [fakultasChoices, handleFilterClick]);

  return (
    <div className="absolute z-[10] flex w-[90%] translate-y-[60px] flex-col rounded-[8px] bg-white px-4 py-2 md:w-[95%] lg:right-0 lg:h-[300px] lg:w-[200px] lg:-translate-x-[20px] lg:overflow-auto">
      <p className="mb-2 text-[16px] font-bold text-[#0010A4]">Fakultas</p>
      <div className="grid grid-cols-2 pb-2 lg:grid-cols-1">
        <div className="flex flex-col gap-1">
          {fakultasList
            .sort()
            .slice(0, fakultasList.length / 2)
            .map((fakultas, idx) => (
              <Checkbox
                choice={fakultas}
                key={idx}
                onClick={toggleCheckbox}
                checked={props.selectedFakultas.includes(fakultas)}
              />
            ))}
        </div>
        <div className="flex flex-col gap-1">
          {fakultasList
            .sort()
            .slice(fakultasList.length / 2)
            .map((fakultas, idx) => (
              <Checkbox
                choice={fakultas}
                key={idx}
                onClick={toggleCheckbox}
                checked={props.selectedFakultas.includes(fakultas)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FakultasSelector;
