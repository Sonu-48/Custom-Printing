// import React, { useState } from "react";
// import Todoapp from "../pages/Home/Todoapp";
// import Login from "../component/Login";
// import { Box } from "@mui/material";

// export const Context = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const handlelogin = (username,password) => {
//     const login= JSON.parse(localStorage.getItem('userDetails'));
//     if(username=== login.username && password ===login.password){
//         setIsLoggedIn(true);
//     }
//     else{
//         setIsLoggedIn(false);
//     }
//   };
//   return (
//     <Box>
//       {isLoggedIn ? (
//         <>
//           <Todoapp />
//         </>
//       ) : (
//         <>
//           <Login onLogin={handlelogin}/>
//         </>
//       )}
//     </Box>
//   );
// };
