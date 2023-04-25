import React from 'react';

// Components
import VSHeaderMenu from './components/VSHeaderMenu/VSHeaderMenu';
import useAppStore from './store/useAppStore';

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <div className={`h-screen bg-black ${theme}`}>
      <VSHeaderMenu filename="VSHeaderMenu.tsx" />

      <button
        type="button"
        className="m-3 rounded-md bg-gray-500 px-2 py-1 text-gray-100 transition-colors hover:bg-gray-600"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
