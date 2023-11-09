import { DarkModeProvider } from "./providers/DarkModeContext";
import { PasswordProvider } from "./providers/PasswordStateContext";
import { UserProvider } from "./providers/UserStateContext";
import { RouterMain } from "./routes/index";

function App() {
  return (
    <>
      <UserProvider>
        <DarkModeProvider>
          <PasswordProvider>
            <RouterMain />
          </PasswordProvider>
        </DarkModeProvider>
      </UserProvider>
    </>
  );
}

export default App;
