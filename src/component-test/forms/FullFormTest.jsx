// "use client";

// import React, { useState } from "react";
// import { Field } from "ai-ui-kit";
// import { Input } from "ai-ui-kit";
// import { Checkbox } from "ai-ui-kit";
// import { RadioGroup } from "ai-ui-kit";
// import { Slider } from "ai-ui-kit";
// import { Switch } from "./Switch"; // your fixed Switch component
// import { FileUpload } from "ai-ui-kit";

// const FullFormDemo = () => {
//   // Text inputs
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [age, setAge] = useState<number | undefined>(undefined);

//   // Checkbox
//   const [agree, setAgree] = useState(false);

//   // Radio
//   const [gender, setGender] = useState("male");

//   // Slider
//   const [volume, setVolume] = useState(50);

//   // Switch
//   const [notifications, setNotifications] = useState(false);

//   // File upload
//   const [resume, setResume] = useState<File | null>(null);

//   return (
//     <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
//       <h2 className="text-xl font-bold mb-4">Interactive Form Demo</h2>

//       {/* Name */}
//       <Field label="Name">
//         <Input
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Field>

//       {/* Email */}
//       <Field label="Email">
//         <Input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Field>

//       {/* Password */}
//       <Field label="Password">
//         <Input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           isPassword
//         />
//       </Field>

//       {/* Age */}
//       <Field label="Age">
//         <Input
//           type="number"
//           placeholder="Enter your age"
//           value={age}
//           onChange={(e) => setAge(Number(e.target.value))}
//         />
//       </Field>

//       {/* Checkbox */}
//       <Field label="Terms & Conditions">
//         <Checkbox
//           label="I agree to the terms"
//           isChecked={agree}
//           onChange={(e) => setAgree(e.target.checked)}
//         />
//       </Field>

//       {/* Radio */}
//       <Field label="Gender">
//         <RadioGroup
//           value={gender}
//           onChange={(val: string) => setGender(val)}
//           options={[
//             { label: "Male", value: "male" },
//             { label: "Female", value: "female" },
//             { label: "Other", value: "other" },
//           ]}
//         />
//       </Field>

//       {/* Slider */}
//       <Field label="Volume">
//         <Slider
//           value={volume}
//           onChange={(val: number) => setVolume(val)}
//           min={0}
//           max={100}
//           step={1}
//           showValue
//         />
//       </Field>

//       {/* Switch */}
//       <Field label="Notifications">
//         <Switch
//           isChecked={notifications}
//           onChange={(e) => setNotifications(e.currentTarget.checked)}
//           label="Enable notifications"
//           description="Receive notifications by email"
//         />
//       </Field>

//       {/* File Upload */}
//       <Field label="Upload Resume" helperText="PDF only, max 5MB">
//         <FileUpload
//           accept=".pdf"
//           showSize
//           clearable
//           onFilesSelected={(files: File[]) => setResume(files[0] || null)}
//         />
//       </Field>

//       {/* Display current state */}
//       <div className="mt-4 p-4 border rounded bg-gray-50">
//         <h3 className="font-bold mb-2">Form State:</h3>
//         <pre>{JSON.stringify(
//           {
//             name,
//             email,
//             password,
//             age,
//             agree,
//             gender,
//             volume,
//             notifications,
//             resume: resume?.name || null,
//           },
//           null,
//           2
//         )}</pre>
//       </div>
//     </div>
//   );
// };

// export default FullFormDemo;