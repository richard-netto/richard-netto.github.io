import React from 'react';

// Components
import BaseButton from './components/BaseButton/BaseButton';

// Assets
import { ReactComponent as DarkCustomizeLayoutIcon } from '../../../../assets/icons/dark-customize-layout.svg';
import { ReactComponent as DarkLeftSideMenuClosedIcon } from '../../../../assets/icons/dark-left-side-menu-closed.svg';
import { ReactComponent as DarkLeftSideMenuOpenIcon } from '../../../../assets/icons/dark-left-side-menu-open.svg';
import { ReactComponent as DarkRightSideMenuClosedIcon } from '../../../../assets/icons/dark-right-side-menu-closed.svg';
import { ReactComponent as DarkRightSideMenuOpenIcon } from '../../../../assets/icons/dark-right-side-menu-open.svg';
import { ReactComponent as DarkTerminalClosedIcon } from '../../../../assets/icons/dark-terminal-closed.svg';
import { ReactComponent as DarkTerminalOpenIcon } from '../../../../assets/icons/dark-terminal-open.svg';
import { ReactComponent as LightCustomizeLayoutIcon } from '../../../../assets/icons/light-customize-layout.svg';
import { ReactComponent as LightLeftSideMenuClosedIcon } from '../../../../assets/icons/light-left-side-menu-closed.svg';
import { ReactComponent as LightLeftSideMenuOpenIcon } from '../../../../assets/icons/light-left-side-menu-open.svg';
import { ReactComponent as LightRightSideMenuClosedIcon } from '../../../../assets/icons/light-right-side-menu-closed.svg';
import { ReactComponent as LightRightSideMenuOpenIcon } from '../../../../assets/icons/light-right-side-menu-open.svg';
import { ReactComponent as LightTerminalClosedIcon } from '../../../../assets/icons/light-terminal-closed.svg';
import { ReactComponent as LightTerminalOpenIcon } from '../../../../assets/icons/light-terminal-open.svg';

// Store Hook
import useAppStore from '../../../../store/useAppStore';

// Types
export type TWindowLayoutButtonIcon =
  | 'CustomizeLayout'
  | 'LeftSideMenu'
  | 'RightSideMenu'
  | 'Terminal';

// Interfaces
interface IWindowLayoutButtonProps {
  iconType: TWindowLayoutButtonIcon;
}

const WindowLayoutButton: React.FunctionComponent<IWindowLayoutButtonProps> = ({
  iconType,
}): JSX.Element => {
  const {
    primarySideBar,
    togglePrimarySideBar,
    panel,
    togglePanel,
    secondarySideBar,
    toggleSecondarySideBar,
  } = useAppStore();

  if (iconType === 'CustomizeLayout')
    return (
      <BaseButton>
        <DarkCustomizeLayoutIcon className="theme-dark:hidden" />
        <LightCustomizeLayoutIcon className="theme-light:hidden" />
      </BaseButton>
    );

  if (iconType === 'LeftSideMenu')
    return (
      <BaseButton onClick={togglePrimarySideBar}>
        {primarySideBar === 'open' && (
          <DarkLeftSideMenuOpenIcon className="theme-dark:hidden" />
        )}
        {primarySideBar === 'open' && (
          <LightLeftSideMenuOpenIcon className="theme-light:hidden" />
        )}
        {primarySideBar === 'close' && (
          <DarkLeftSideMenuClosedIcon className="theme-dark:hidden" />
        )}
        {primarySideBar === 'close' && (
          <LightLeftSideMenuClosedIcon className="theme-light:hidden" />
        )}
      </BaseButton>
    );

  if (iconType === 'RightSideMenu')
    return (
      <BaseButton onClick={toggleSecondarySideBar}>
        {secondarySideBar === 'open' && (
          <DarkRightSideMenuOpenIcon className="theme-dark:hidden" />
        )}
        {secondarySideBar === 'open' && (
          <LightRightSideMenuOpenIcon className="theme-light:hidden" />
        )}
        {secondarySideBar === 'close' && (
          <DarkRightSideMenuClosedIcon className="theme-dark:hidden" />
        )}
        {secondarySideBar === 'close' && (
          <LightRightSideMenuClosedIcon className="theme-light:hidden" />
        )}
      </BaseButton>
    );

  if (iconType === 'Terminal')
    return (
      <BaseButton onClick={togglePanel}>
        {panel === 'open' && (
          <DarkTerminalOpenIcon className="theme-dark:hidden" />
        )}
        {panel === 'open' && (
          <LightTerminalOpenIcon className="theme-light:hidden" />
        )}
        {panel === 'close' && (
          <DarkTerminalClosedIcon className="theme-dark:hidden" />
        )}
        {panel === 'close' && (
          <LightTerminalClosedIcon className="theme-light:hidden" />
        )}
      </BaseButton>
    );

  return <div />;
};

export default WindowLayoutButton;
