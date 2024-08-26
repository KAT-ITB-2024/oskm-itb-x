import React, { useState } from "react";

interface CheckboxProps {
  choice: string;
  onClick: (choice: string) => void;
  checked: boolean;
}

function Checkbox(props: CheckboxProps) {
  const { choice, checked } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    props.onClick(choice);
  };

  return (
    <div className="flex items-center gap-x-3">
      <label className="flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="h-4 w-4"
        />
        <span className="ml-2">{choice}</span>
      </label>
    </div>
  );
}

export default Checkbox;
