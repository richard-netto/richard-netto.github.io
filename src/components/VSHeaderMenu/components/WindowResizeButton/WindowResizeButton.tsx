import React from 'react';

// Components
import BaseButton from './components/BaseButton/BaseButton';

// Assets
import { ReactComponent as DarkWindowCloseIcon } from '../../../../assets/icons/dark-window-close.svg';
import { ReactComponent as DarkWindowMinimizeIcon } from '../../../../assets/icons/dark-window-minimize.svg';
import { ReactComponent as DarkWindowRestoreIcon } from '../../../../assets/icons/dark-window-restore.svg';
import { ReactComponent as DarkWindowRestoreFullIcon } from '../../../../assets/icons/dark-window-restore-full.svg';
import { ReactComponent as LightWindowCloseIcon } from '../../../../assets/icons/light-window-close.svg';
import { ReactComponent as LightWindowMinimizeIcon } from '../../../../assets/icons/light-window-minimize.svg';
import { ReactComponent as LightWindowRestoreIcon } from '../../../../assets/icons/light-window-restore.svg';
import { ReactComponent as LightWindowRestoreFullIcon } from '../../../../assets/icons/light-window-restore-full.svg';

// Types
export type TWindowResizeButtonIcon =
  | 'close'
  | 'minimize'
  | 'restore'
  | 'restoreFull';

// Interfaces
interface IWindowResizeButtonProps {
  iconType: TWindowResizeButtonIcon;
}

const WindowResizeButton: React.FunctionComponent<IWindowResizeButtonProps> = ({
  iconType,
}): JSX.Element => {
  if (iconType === 'close')
    return (
      <BaseButton iconType={iconType}>
        <DarkWindowCloseIcon className="theme-dark:hidden [button:hover_&_path]:stroke-white" />
        <LightWindowCloseIcon className="theme-light:hidden [button:hover_&_path]:stroke-white" />
      </BaseButton>
    );

  if (iconType === 'minimize')
    return (
      <BaseButton iconType={iconType}>
        <DarkWindowMinimizeIcon className="theme-dark:hidden" />
        <LightWindowMinimizeIcon className="theme-light:hidden" />
      </BaseButton>
    );

  if (iconType === 'restore')
    return (
      <BaseButton iconType={iconType}>
        <DarkWindowRestoreIcon className="theme-dark:hidden" />
        <LightWindowRestoreIcon className="theme-light:hidden" />
      </BaseButton>
    );

  if (iconType === 'restoreFull')
    return (
      <BaseButton iconType={iconType}>
        <DarkWindowRestoreFullIcon className="theme-dark:hidden" />
        <LightWindowRestoreFullIcon className="theme-light:hidden" />
      </BaseButton>
    );

  return <div />;
};

export default WindowResizeButton;
