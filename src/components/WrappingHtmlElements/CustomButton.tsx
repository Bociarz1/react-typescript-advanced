// TYPE with React.ComponentProps
type ButtonProps = {
  variant:'primary' | 'secondary'
} & React.ComponentProps<'button'>

// ...rest means all other props
function CustomButton({variant, children, ...rest}:ButtonProps) {
  return ( 
    <>
      <button className={variant} {...rest}>
      </button>
    </>
   );
}

export default CustomButton;