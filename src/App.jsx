import { LandingPage } from "./pages/LandingPage/LandingPage";
import { DarkModeProvider } from "./providers/DarkModeContext";
import { PasswordProvider } from "./providers/PasswordStateContext";
import { UserProvider } from "./providers/UserStateContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <UserProvider>
          <PasswordProvider>
            <LandingPage />
          </PasswordProvider>
        </UserProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
