import { useState } from "react";
import { useAsyncDebounce } from "react-table";

interface IProps{
    preGlobalFilteredRows: any;
    globalFilter: any;
    setGlobalFilter: any;
}

export default function GlobalFilter({
    preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: IProps) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <label className="gap-x-2 items-baseline">
      <span className="text-gray-700">Search</span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} kayıt...`}
      />
    </label>
  )
}