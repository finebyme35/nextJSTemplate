import { useMemo } from 'react';


export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id, render }
  }: any) {
    const options = useMemo(() => {
      let options = new Set();
      preFilteredRows?.forEach((row: any) => {
        options.add(row.values[id]);
      });
      
      
      return [...options.values()];
    }, [id, preFilteredRows]);
  
    
    return (
      <label className=" text-center gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")} </span>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">Hepsi</option>
        {options.map((option: any, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
    );
  }