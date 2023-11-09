import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { DarkModeContext } from "../../providers/DarkModeContext";

export const HomePage = () => {

    const { darkMode } = useContext(DarkModeContext);
  
    return (
        <>
        <Header/>
        </>
    )
}