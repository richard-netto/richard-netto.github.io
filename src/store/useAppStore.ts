/* eslint-disable import/no-unresolved */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Interfaces
import { IState } from './state';

const useAppStore = create<IState>()(
  devtools(
    persist(
      (set) => ({
        // Theme
        theme: 'dark',
        toggleTheme: () =>
          set(({ theme }) => ({
            theme: theme === 'dark' ? 'light' : 'dark',
          })),
        // Layout
        primarySideBar: 'close',
        togglePrimarySideBar: () =>
          set(({ primarySideBar }) => ({
            primarySideBar: primarySideBar === 'close' ? 'open' : 'close',
          })),
        panel: 'close',
        togglePanel: () =>
          set(({ panel }) => ({
            panel: panel === 'close' ? 'open' : 'close',
          })),
        secondarySideBar: 'close',
        toggleSecondarySideBar: () =>
          set(({ secondarySideBar }) => ({
            secondarySideBar: secondarySideBar === 'close' ? 'open' : 'close',
          })),
      }),
      { name: 'vscode-store' }
    )
  )
);

export default useAppStore;
