import classNames from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(style.navBar, {}, [className])}>
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
