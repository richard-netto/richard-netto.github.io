import React, { ReactNode } from 'react';

// Interfaces
interface IBaseButton {
  children: ReactNode;
}

const BaseButton: React.FunctionComponent<IBaseButton> = ({
  children,
}): JSX.Element => (
  <button
    type="button"
    title="LayoutButton"
    className="m-[0.125rem] flex items-center justify-center rounded-md p-[0.1875rem] hover:bg-dark-header-button-hover"
  >
    {children}
  </button>
);
export default BaseButton;
