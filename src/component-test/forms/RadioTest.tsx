// "use client";

// import React, { useState } from "react";
// import { Radio } from "ai-ui-kit"; 
// import { Field } from "ai-ui-kit";

// const RadioTest = () => {
//   const [selected, setSelected] = useState("option1");

//   return (
//     <Field
//       label="Choose an option"
//       helperText="Select one of the options below"
//     >
//       <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//         <Radio
//           value="option1"
//           isChecked={selected === "option1"}
//         //   onChange={() => setSelected("option1")}
//           label="Option 1"
//         />
//         <Radio
//           value="option2"
//           isChecked={selected === "option2"}
//           onChange={() => setSelected("option2")}
//           label="Option 2"
//         />
//         <Radio
//           value="option3"
//           isChecked={selected === "option3"}
//           onChange={() => setSelected("option3")}
//           label="Option 3"
//         />
//       </div>
//     </Field>
//   );
// };

// export default RadioTest;