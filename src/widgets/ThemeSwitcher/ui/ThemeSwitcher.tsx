import { Theme, useTheme } from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import ThemeIcon from "shared/assets/icons/theme-icon.svg";
import style from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(style.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon
        className={classNames(style.themeIcon, {
          [style.dark]: theme === Theme.DARK,
        })}
      />
    </Button>
  );
};
