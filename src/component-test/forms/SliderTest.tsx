// "use client";

// import { useState } from "react";
// import { Slider, Field } from "ai-ui-kit";

// const SliderTest = () => {
//   const [value, setValue] = useState(50); // initial value

//   return (
//     <div style={{ maxWidth: 400, padding: 20 }}>
//       <Field label="Select a value" helperText="Drag the slider">
//         <Slider
//           value={value} // must be number
//           onChange={(val: number) => setValue(val)} // val is always a number
//           min={0}
//           max={100}
//           step={1}
//           showValue // shows the current value next to label
//         />
//       </Field>

//       <p>Selected Value: {value}</p>
//     </div>
//   );
// };

// export default SliderTest;