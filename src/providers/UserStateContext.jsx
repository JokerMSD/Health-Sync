import { createContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../components/forms/LoginForm/loginForm.schema";
import { registerFormSchema } from "../components/forms/RegisterForm/registerForm.schema";
import { useNavigate } from "react-router-dom";


const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([null]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);


  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const {
    register: registerRegister,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerErrors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });


  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        isLoading,
        setLoading,
        setIsLoading,
        loginRegister,
        registerRegister,
        loginHandleSubmit,
        registerHandleSubmit,
        loginErrors,
        registerErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
