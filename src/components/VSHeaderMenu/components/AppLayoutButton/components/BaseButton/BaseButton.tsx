import React, { ReactNode } from 'react';

// Interfaces
interface IBaseButton {
  children: ReactNode;
  onClick?: () => void;
}

const BaseButton: React.FunctionComponent<IBaseButton> = ({
  children,
  onClick,
}): JSX.Element => (
  <button
    onClick={onClick}
    type="button"
    title="LayoutButton"
    className="m-[0.125rem] flex h-[1.4375rem] w-[1.4375rem] items-center justify-center rounded-[0.28125rem] hover:bg-dark-header-button-hover"
  >
    {children}
  </button>
);
export default BaseButton;
