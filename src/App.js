import React ,{useState}from "react";
import { SketchPicker } from 'react-color'
const appStyle = {
  maxWidth: 1300,
  height: 574,
  display:"flex",
  background:"white",
  justifyContent:"center",
  alignItems:"center"
};

const App = () => {
  const [color,setColor] = useState("#333");
  return <div style={appStyle}>
    <SketchPicker width={500} color={color} onChangeComplete={ ({ hex })=>setColor(hex) } />
  </div>;
};

export default App;
