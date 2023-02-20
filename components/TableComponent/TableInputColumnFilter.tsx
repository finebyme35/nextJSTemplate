import Input from 'components/Input';


export function InputColumnFilter({
    column: { filterValue, setFilter, render }
  }: any) {

  
    
    return (
      <label className="gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")} </span>

      <Input
      wrapClassName={"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"} 
        getValue={filterValue}
        onlyFieldRequired="NumberAndString"
        setValue={setFilter}/>
    </label>
    );
  }