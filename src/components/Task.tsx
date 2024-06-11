import { Trash, Check } from "@phosphor-icons/react";
import { useState } from "react";

export function Task() {
  const [checked, setChecked] = useState(false);

  function toggleCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className="flex gap-3 items-start  bg-zinc-800 rounded-lg p-4 ">
      <label className="cursor-pointer my-1">
        <input
          type="checkbox"
          onChange={toggleCheckbox}
          className="hidden"
          checked={checked}
        />
        <div
          className={`size-4  rounded-full flex items-center justify-center transition-all  ${
            checked
              ? "bg-indigo-600 border-none hover:bg-indigo-500"
              : "border-sky-500 border hover:border-sky-400"
          }`}
        >
          {checked && <Check size={10} weight="bold" />}
        </div>
      </label>

      <p
        className={`text-sm ${
          checked ? "text-zinc-500 line-through" : "text-zinc-300"
        }`}
      >
        Integer urna inaaaterdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <div className="hover:bg-zinc-700 rounded">
        <Trash
          className="my-1 text-zinc-500 cursor-pointer hover:text-red-400"
          width={24}
          weight="bold"
        />
      </div>
    </div>
  );
}
