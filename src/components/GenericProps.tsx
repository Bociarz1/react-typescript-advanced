// GENERIC can help working with different types in arrays, objects
type ListPropsWithGeneric<T> = {
  items: T[] 
  // the same === item: number[]
  onClick: (value:T) => void
  // the same === onCLick: (value:number) => void
}
// specified what T is --> <T enxdends TYPES>
function GenericProps<T extends number>({items, onClick}:ListPropsWithGeneric<T>) {
  return ( 
    <>
      <ul>
       {items.map((item,index)=>
        <li key={index}>{item}</li>
       )}
      </ul>
      <button onClick={()=>onClick}>Button</button>
    </>
   );
}

export default GenericProps;