import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

interface FakultasSelectorProps {
  fakultasList: string[];
  handleFilterClick: (fakultas: string[]) => void;
  selectedFakultas: string[];
}

function FakultasSelector(props: FakultasSelectorProps) {
  const { fakultasList, handleFilterClick } = props;
  const [fakultasChoices, setFakultasChoices] = useState<Set<string>>(
    new Set<string>(),
  );

  const toggleCheckbox = (choice: string) => {
    fakultasChoices.has(choice)
      ? fakultasChoices.delete(choice)
      : fakultasChoices.add(choice);
  };

  useEffect(() => {
    setFakultasChoices(new Set(props.selectedFakultas));
  }, [props.selectedFakultas]);

  return (
    <div className="absolute z-[10] mr-4 flex w-full translate-y-[60px] flex-col rounded-[8px] bg-white px-4 py-2">
      <p className="mb-2 text-[16px] font-bold text-[#0010A4]">Fakultas</p>
      <div className="grid grid-cols-2 gap-2 pb-2">
        {fakultasList.map((fakultas, idx) => (
          <Checkbox
            choice={fakultas}
            key={idx}
            onClick={toggleCheckbox}
            checked={props.selectedFakultas.includes(fakultas)}
          />
        ))}
      </div>
      <button
        onClick={() => handleFilterClick(Array.from(fakultasChoices))}
        className="mt-4 self-end rounded-[4px] bg-[#0010A4] px-6 py-2 text-white"
      >
        Pilih
      </button>
    </div>
  );
}

export default FakultasSelector;
