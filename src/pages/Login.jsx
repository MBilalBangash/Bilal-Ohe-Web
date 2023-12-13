// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     console.log("Logging in...", username, password);
//     setUsername("");
//     setPassword("");
//     setDialogOpen(false);
//   };
//   // const [open ,setOpen] = useState(true)
//   // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // const toggleSidebar = () => {
//   //   setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <button
//         onClick={() => setDialogOpen(true)}
//         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//       >
//         Login
//       </button>

//       {isDialogOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div
//             className="absolute inset-0 bg-gray-900 opacity-75"
//             onClick={() => setDialogOpen(false)}
//           ></div>
//           <div className="bg-white p-8 rounded shadow-md w-96 z-10 relative">
//             <button
//               onClick={() => setDialogOpen(false)}
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//             <h2 className="text-2xl font-semibold mb-4">Candidate Login</h2>
//             <hr />
//             <form onSubmit={handleLogin}>
//               <div className="mt-4">
//                 <label
//                   for="username"
//                   className="block text-gray-700 text-[18px] font-semibold mb-2"
//                 >
//                   Enter Your Id:
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Id Name"
//                   value={name}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full border p-2 rounded"
//                   required
//                   class="w-full border border-gray-400 p-2 rounded"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   for="password"
//                   class="block text-gray-700 text-[18px] font-semibold mb-2"
//                 >
//                   Enter Password:
//                 </label>
//                 <input
//                   type="text"
//                   id="password"
//                   name="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full border p-2 rounded"
//                   required
//                   class="w-full border border-gray-400 p-2 rounded"
//                 />
//               </div>

//               <div className=" flex justify-end gap-5">
//                 <button
//                   type="submit"
//                   className=" bg-gray-100 text-black px-7 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className=" bg-gray-100 border border-gray-500 text-blacl px-7 py-2 rounded hover:bg-gray-400"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>

   

//     // <div>
//     //   {/* <div className=" flex">
//     //     <div className={' text-2xl text-white bg-black p-6 h-screen w-72 duration-300 relative'} >
//     //       Sidebar
//     //       <svg
//     //         className=" w-6 text-white absolute -right-2 cursor-pointer
//     //          top-8"
//     //         fill="none"
//     //         stroke="currentColor"
//     //         stroke-width="1.5"
//     //         viewBox="0 0 24 24"
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         aria-hidden="true"
//     //       >
//     //         <path
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     //         ></path>
//     //       </svg>
//     //     </div>
//     //     <div className=" m-6">
//     //       <h1 className=" text-xl">Home Page</h1>
//     //     </div>
//     //   </div> */}

//     //   <div className="flex h-screen bg-gray-200">
//     //     <div
//     //       className={`w-64 bg-gray-800 text-white p-4 ${
//     //         isSidebarOpen ? "" : "hidden"
//     //       }`}
//     //     >
//     //       <div className=" flex">
//     //         <img src={Image} alt="Image" className=" h-20  rounded-full w-20" />
//     //         <h1 className=" text-white font-semibold m-3 text-2xl">Alex</h1>
//     //       </div>

//     //       <ul className="mt-10">
//     //         <li className="mb-2 flex">
//     //           <svg
//     //             className=" w-4"
//     //             fill="none"
//     //             stroke="currentColor"
//     //             stroke-width="1.5"
//     //             viewBox="0 0 24 24"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             aria-hidden="true"
//     //           >
//     //             <path
//     //               stroke-linecap="round"
//     //               stroke-linejoin="round"
//     //               d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//     //             ></path>
//     //           </svg>
//     //           <a href="#" className="hover:text-blue-300 ml-2">
//     //             Home
//     //           </a>
//     //         </li>
//     //         <li className="mb-2 flex">
//     //           <svg
//     //             className=" w-4"
//     //             fill="none"
//     //             stroke="currentColor"
//     //             stroke-width="1.5"
//     //             viewBox="0 0 24 24"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             aria-hidden="true"
//     //           >
//     //             <path
//     //               stroke-linecap="round"
//     //               stroke-linejoin="round"
//     //               d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//     //             ></path>
//     //           </svg>
//     //           <a href="#" className="hover:text-blue-300 ml-2">
//     //             About
//     //           </a>
//     //         </li>
//     //         <li className="mb-2 flex">
//     //           <svg
//     //             className=" w-4"
//     //             fill="none"
//     //             stroke="currentColor"
//     //             stroke-width="1.5"
//     //             viewBox="0 0 24 24"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             aria-hidden="true"
//     //           >
//     //             <path
//     //               stroke-linecap="round"
//     //               stroke-linejoin="round"
//     //               d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//     //             ></path>
//     //           </svg>
//     //           <a href="#" className="hover:text-blue-300 ml-2">
//     //             Setting
//     //           </a>
//     //         </li>
//     //         <li className="mb-2 flex">
//     //           <svg
//     //             className=" w-4"
//     //             fill="none"
//     //             stroke="currentColor"
//     //             stroke-width="1.5"
//     //             viewBox="0 0 24 24"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             aria-hidden="true"
//     //           >
//     //             <path
//     //               stroke-linecap="round"
//     //               stroke-linejoin="round"
//     //               d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//     //             ></path>
//     //           </svg>
//     //           <a href="#" className="hover:text-blue-300 ml-2">
//     //             Contact
//     //           </a>
//     //         </li>
//     //         <li className="mb-2 flex">
//     //           <svg
//     //             className=" w-4"
//     //             fill="none"
//     //             stroke="currentColor"
//     //             stroke-width="1.5"
//     //             viewBox="0 0 24 24"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             aria-hidden="true"
//     //           >
//     //             <path
//     //               stroke-linecap="round"
//     //               stroke-linejoin="round"
//     //               d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//     //             ></path>
//     //           </svg>
//     //           <a href="#" className="hover:text-blue-300 ml-2">
//     //             Login
//     //           </a>
//     //         </li>
//     //       </ul>
//     //       <hr className=" mt-6" />
//     //       <button
//     //         className=" mt-32 bg-yellow-400 text-black px-3 py-2 w-full
//     //       font-bold cursor-pointer"
//     //       >
//     //         Click me
//     //       </button>
//     //     </div>

//     //     <button className="fixed " onClick={toggleSidebar}>
//     //       <svg
//     //         className=" w-6 text-white bg-blue-500 rounded-full absolute left-56 cursor-pointer
//     //          top-5"
//     //         fill="none"
//     //         stroke="currentColor"
//     //         stroke-width="1.5"
//     //         viewBox="0 0 24 24"
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         aria-hidden="true"
//     //       >
//     //         <path
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//     //         ></path>
//     //       </svg>
//     //       {/* <svg
//     //         className=" w-6 text-white bg-blue-500 absolute left-56 cursor-pointer
//     //          top-5"
//     //         fill="none"
//     //         stroke="currentColor"
//     //         stroke-width="1.5"
//     //         viewBox="0 0 24 24"
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         aria-hidden="true"
//     //       >
//     //         <path
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     //         ></path>
//     //       </svg> */}
//     //     </button>

//     //     <div className="flex-1 p-8">
//     //       <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
//     //       <div className=" w-1/4 h-1/4 bg-red-300 text-center ">
//     //         Hello world
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Login;
