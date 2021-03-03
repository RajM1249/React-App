import React from "react"
import { ChakraProvider } from "@chakra-ui/react";
import RandomUser from './RandomUser';

export default function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <RandomUser />
    </ChakraProvider>
  )
}
