import { ButtonHTMLAttributes } from "react";
import classNames from "shared/lib/classNames";
import style from "./Button.module.scss";

export const enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(style.button, {}, [className, style[theme]])}
      {...otherProps}
    ></button>
  );
};
