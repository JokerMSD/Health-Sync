import { Header } from "../../components/Header/Header";
import { LoginForm } from "../../components/forms/LoginForm";
import Style from "./style.module.scss";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <section className={Style.loginSection}>
        <div className={Style.loginFormContainer}>
          <LoginForm />
        </div>
        <div className={Style.loginSection}></div>
      </section>
    </>
  );
};
