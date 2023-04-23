import React from 'react';

// Components
import VSHeaderMenu from './components/VSHeaderMenu/VSHeaderMenu';

const App = (): JSX.Element => {
  const toggleTheme = (): void => {
    const rootDiv = document.getElementById('root') as HTMLDivElement;
    if (!rootDiv) return;

    if (rootDiv.className.includes('dark'))
      rootDiv.className = rootDiv.className.replace('dark', 'light');
    else rootDiv.className = rootDiv.className.replace('light', 'dark');
  };

  return (
    <div className="h-screen bg-black">
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
