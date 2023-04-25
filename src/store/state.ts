type TToggleState = 'open' | 'close';

export interface IState {
  // Theme
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  // Layout
  primarySideBar: TToggleState;
  togglePrimarySideBar: () => void;
  panel: TToggleState;
  togglePanel: () => void;
  secondarySideBar: TToggleState;
  toggleSecondarySideBar: () => void;
}
