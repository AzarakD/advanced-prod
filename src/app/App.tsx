import { Link } from "react-router-dom";
import "./styles/index.scss";
import classNames from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/AppRouter";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>

      <AppRouter />
    </div>
  );
};
