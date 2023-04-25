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
    className="m-[0.125rem] flex items-center justify-center rounded-[0.250rem] p-[0.1875rem] hover:bg-dark-header-button-hover"
  >
    {children}
  </button>
);
export default BaseButton;
