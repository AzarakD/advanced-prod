import classNames from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/AppRouter";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />

      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};
