
type Number = {
  value: number
}

type PositiveNumber = 
Number &
{
  isPositive: boolean
  isNegative?: never
}

type NegativeNumber = 
Number &
{
  isPositive?: never
  isNegative: boolean
}


type RestrictingProps = PositiveNumber | NegativeNumber

function RestrictingProps({value, isPositive, isNegative}:RestrictingProps) {
  return ( 
    <>
      {`value:${value}`}{isPositive && "positive"} {isNegative && "negative"}
    </>
   );
}

export default RestrictingProps;