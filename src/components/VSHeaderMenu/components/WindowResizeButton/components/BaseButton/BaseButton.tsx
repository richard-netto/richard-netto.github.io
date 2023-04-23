import React, { ReactNode } from 'react';

// Types
import { TWindowResizeButtonIcon } from '../../WindowResizeButton';

// Interfaces
interface IBaseButton {
  children: ReactNode;
  iconType: TWindowResizeButtonIcon;
}

const BaseButton: React.FunctionComponent<IBaseButton> = ({
  iconType,
  children,
}): JSX.Element => (
  <button
    type="button"
    className={`flex h-full w-[2.8125rem] items-center justify-center ${
      iconType !== 'close'
        ? 'hover:bg-dark-header-window-button-hover'
        : 'hover:bg-dark-header-window-close-button-hover'
    }`}
  >
    {children}
  </button>
);
export default BaseButton;
