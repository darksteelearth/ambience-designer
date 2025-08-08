'use client'

import LoginContainer from "@/components/LoginContainer";
import { Suspense } from "react";

const LoginPage = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <LoginContainer />
  </Suspense>
}

export default LoginPage