// "use client";

// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// // import {
// //   Box,
// //   Button,
// //   Flex,
// //   FormControl,
// //   FormLabel,
// //   Heading,
// //   Input,
// //   InputGroup,
// //   InputRightElement,
// //   Link,
// //   Stack,
// //   Text,
// // } from "@chakra-ui/react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useShowToast from "../hooks/useShowToast";
// import { loginRoute } from "../utils/routes";

export default function Login() {
  // const [showPassword, setShowPassword] = useState(false);
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   password: "",
  // });
  // const showToast = useShowToast();
  // const navigate = useNavigate();

  // const handleLogin = async () => {
  //   try {
  //     const res = await fetch(loginRoute, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(inputs),
  //     });

  //     const data = await res.json();

  //     // if (data.error) {
  //     //   showToast("Error", data.error, "error");
  //     //   return;
  //     // }

  //     navigate("/");
  //   } catch (error) {
  //     console.log("Error in handleLogin, ", error.message);
  //   }
  // };

  return <div>Login</div>;
}
