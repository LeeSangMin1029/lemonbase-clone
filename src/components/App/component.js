import { WrapperThemeProvider } from "../../context/useThemeContext";
import Header from "../Header";
import Main from "../Main";

const App = () => {
  return (
    <WrapperThemeProvider>
      <Header />
      <Main />
    </WrapperThemeProvider>
  );
};

export default App;
