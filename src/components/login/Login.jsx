import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

const Login = () => {
  useEffect(() => {
    //@ts-ignore

    window["otpless"] = () => otpless();
  }, []);

  const otpless = () => {
    //@ts-ignore

    const waId = window.otplessWaId?.();

    //Once you signup/sign a user, you can redirect the user to your signup/signin flow.

  };
  const loginHandler = () => {
    window.open(`${server}/googlelogin`, "_self");
  };

  return (
    <section className="login">
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
      <button id="whatsapp-login"/>
    </section>
  );
};

export default Login;
