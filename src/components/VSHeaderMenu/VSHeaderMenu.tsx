import React from 'react';

// Components
import WindowResizeButton from './components/WindowResizeButton/WindowResizeButton';
import WindowLayoutButton from './components/WindowLayoutButton/WindowLayoutButton';

// Constants
import menuOptions from '../../constants/menu';

// Assets
import { ReactComponent as VSCodeLogo } from '../../assets/vscode.svg';

// Interfaces
interface IVSHeaderMenuProps {
  filename: string;
}

const VSHeaderMenu: React.FunctionComponent<IVSHeaderMenuProps> = ({
  filename,
}): JSX.Element => {
  return (
    <div className="flex h-[1.875rem] items-center bg-dark-header-background">
      {/* Menu Options */}
      <div className="flex h-[1.875rem] w-1/3 flex-grow items-center">
        {/* VSCode Icon */}
        <div className="mr-2 pl-3">
          <VSCodeLogo className="h-[1.0625rem] w-auto" />
        </div>

        {/* Menu Buttons */}
        {menuOptions.map((menuOption) => (
          <div className="flex" key={menuOption.name}>
            <div className="cursor-pointer rounded-md px-2 py-[0.125rem] text-center text-header-options text-dark-base hover:bg-dark-header-button-hover">
              {menuOption.name}
            </div>
          </div>
        ))}
      </div>

      {/* Project information */}
      <div className="flex h-[1.875rem] w-1/3 items-center justify-center text-dark-base">
        <p className="text-header-title">
          {filename} - richard-netto.github.io - Visual Studio Code
        </p>
      </div>

      {/* Layout Buttons and Window Actions */}
      <div className="flex h-[1.875rem] w-1/3 flex-row items-center justify-end">
        {/* Custom Layout */}
        <WindowLayoutButton iconType="LeftSideMenu" />

        {/* Custom Layout */}
        <WindowLayoutButton iconType="Terminal" />

        {/* Custom Layout */}
        <WindowLayoutButton iconType="RightSideMenu" />

        {/* Custom Layout */}
        <WindowLayoutButton iconType="CustomizeLayout" />

        {/* Minimize */}
        <WindowResizeButton iconType="minimize" />

        {/* Restore */}
        <WindowResizeButton iconType="restore" />

        {/* Close */}
        <WindowResizeButton iconType="close" />
      </div>
    </div>
  );
};

export default VSHeaderMenu;
