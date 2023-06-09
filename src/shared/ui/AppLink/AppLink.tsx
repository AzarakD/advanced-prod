import { Link, LinkProps } from "react-router-dom";
import classNames from "shared/lib/classNames";
import style from "./AppLink.module.scss";

export const enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      {...otherProps}
      className={classNames(style.appLink, {}, [className, style[theme]])}
    >
      {children}
    </Link>
  );
};
