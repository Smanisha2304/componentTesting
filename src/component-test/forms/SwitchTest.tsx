// "use client";

// import React, { useState } from "react";
// import { Switch } from "ai-ui-kit"; // fixed Switch
// import { Field } from "ai-ui-kit";

// const SwitchTest = () => {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <div style={{ maxWidth: 400, padding: 20 }}>
//       <Field label="Enable notifications" helperText="Turn on to receive alerts">
//         <Switch
//           isChecked={enabled}
//           onChange={(e) => setEnabled(e.target.checked)}
//           label="Notifications"
//           description="Receive notifications by email"
//         />
//       </Field>

//       <p>Switch is {enabled ? "ON" : "OFF"}</p>
//     </div>
//   );
// };

// export default SwitchTest;