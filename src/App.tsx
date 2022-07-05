import ExtractProps from "./components/ExtractProps";
import GenericProps from "./components/GenericProps";
import RestrictingProps from "./components/RestrictingProps";
import TemplateLiteralsAndExclude from "./components/TemplateLiteralsAndExclude";
import PolyMorphicComponents from './components/PolyMorphicComponents'
import WrappingHtmlElements from "./components/WrappingHtmlElements/WrappingHtmlElements";

// Generic props
const items = [0,1,2]
function onClick(param: number) {
  console.log(param)
}
function App() {
  return (
    <>
      <GenericProps items={items} onClick={onClick}/>
      <TemplateLiteralsAndExclude/>
      <RestrictingProps value={10} isPositive />
      <ExtractProps items={items} onClick={onClick}/>
      <PolyMorphicComponents as={"p"}/>
      <WrappingHtmlElements/>
    </>
  );
}

export default App;
