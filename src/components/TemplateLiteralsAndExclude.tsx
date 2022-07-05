// Template Literals are used to CONNECTING TYPES
type Horizontal = 'left' | 'center' | 'right'
type Vertical = 'top' | 'center' | 'bottom'

// To connect HORIZONTAL and VERTICAL types
type ToastProps = {
  position:
  // Exclude<TYPES,EXCLUDE TYPES>
    Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center'
}

function TemplateLiteralsAndExclude() {
  return ( 
    <>
      
    </>
   );
}

export default TemplateLiteralsAndExclude;