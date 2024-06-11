import { Trash, Check } from "@phosphor-icons/react";
import { useState } from "react";

export function Task() {
  const [checked, setChecked] = useState(false);

  function toggleCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className="flex items-start gap-3 rounded-lg bg-zinc-800 p-4">
      <label className="my-1 cursor-pointer">
        <input
          type="checkbox"
          onChange={toggleCheckbox}
          className="hidden"
          checked={checked}
        />
        <div
          className={`flex size-4 items-center justify-center rounded-full transition-all ${
            checked
              ? "border-none bg-indigo-600 hover:bg-indigo-500"
              : "border border-sky-500 hover:border-sky-400"
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
        Duis vel sed sed sed sed fames integer.
      </p>
      <div className="cursor-pointer rounded text-zinc-500 hover:bg-zinc-700 hover:text-red-400">
        <Trash className="my-1" width={24} weight="bold" />
      </div>
    </div>
  );
}
