type PolymorphicProps= {
  as?: React.ElementType
}

function PolyMorphicComponents({as}:PolymorphicProps) {
  const Component = as || "div"
  return ( 
    <>
      <Component>
        This component could be div or paragraph
      </Component>
    </> 
  );
}
export default PolyMorphicComponents