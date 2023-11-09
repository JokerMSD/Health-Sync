import { Header } from "../../components/Header/Header";
import { LoginForm } from "../../components/forms/LoginForm";
import Style from "./style.module.scss";
import Girl from "../../assets/mulher.png";
import Logo from "../../assets/Logo.png";
import { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkModeContext";
import { useNavigate } from "react-router";

export const LandingPage = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/register");
  };

  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Header />
      <section className={Style.loginSectionBackground}>
        <div
          className={`${Style.loginSection} ${
            darkMode ? Style["dark-mode"] : ""
          }`}
        >
          <div
            className={`${Style.formDiv} ${darkMode ? Style["dark-mode"] : ""}`}
          >
            <img className={Style.girlImg} src={Girl} />
            <div className={Style.loginFormContainer}>
              <LoginForm />
            </div>
            <div
              className={`${Style.registerSection} ${
                darkMode ? Style["dark-mode"] : ""
              }`}
            >
              <p
                className={`${Style.registerLabel} ${
                  darkMode ? Style["dark-mode"] : ""
                }`}
              >
                Ainda não tem uma conta?
              </p>
              <button
                className={`${Style.registerBtn} ${
                  darkMode ? Style["dark-mode"] : ""
                }`}
                onClick={redirect}
              >
                Cadastre-se
              </button>
            </div>
          </div>
          <div className={Style.logoLoginWindow}>
            <img className={Style.logoImg} src={Logo} alt="Logo" />
            <p className={Style.LogoSlogan}>
              Somos uma empresa X que faz x fas fasnasanj fsb sausafbahf sa aas
              jaksjnas askfas jkakjs bsajf ahi fafafsajlflsalsafljafasaknsfa
              fjalasjf sajl faskf aslafakfjkjajllaks fla falj faknal asn fsalj
              ankfa,maf knfaks fansaknfsaknasakfna falfalms falmf asl flaf
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
