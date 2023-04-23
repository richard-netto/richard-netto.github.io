export type TMenuOption = {
  name: string;
  dropdownOptions: (TDropdownOption | null)[];
};

export type TDropdownOption = {
  name: string;
  shortcut?: string;
  options: (TDropdownOption | null)[];
};

const menuOptions: TMenuOption[] = [
  {
    name: 'File',
    dropdownOptions: [
      {
        name: 'New Text File',
        options: [],
        shortcut: 'Ctrl+N',
      },
      {
        name: 'New File...',
        options: [],
        shortcut: 'Ctrl+Alt+Windows+N',
      },
      {
        name: 'New Window',
        options: [],
        shortcut: 'Ctrl+Shift+N',
      },
      null,
      {
        name: 'Open File...',
        options: [],
        shortcut: 'Ctrl+O',
      },
      {
        name: 'Open Folder...',
        options: [],
        shortcut: 'Ctrl+K Ctrl+O',
      },
      {
        name: 'Open Workspace from File...',
        options: [],
        shortcut: 'Ctrl+K Ctrl+O',
      },
      {
        name: 'Open Recent',
        options: [
          {
            name: 'Reopen Closed Editor',
            options: [],
            shortcut: 'Ctrl+Shift+T',
          },
          null,
          {
            name: 'Recent Files Here!',
            options: [],
          },
          null,
          {
            name: 'Old Recent Files Here!',
            options: [],
          },
          null,
          {
            name: 'More...',
            options: [],
            shortcut: 'Ctrl+R',
          },
          null,
          {
            name: 'Clear Recently Opened',
            options: [],
          },
        ],
        shortcut: 'Ctrl+K Ctrl+O',
      },
      null,
    ],
  },
  {
    name: 'Edit',
    dropdownOptions: [],
  },
  {
    name: 'Selection',
    dropdownOptions: [],
  },
  {
    name: 'View',
    dropdownOptions: [],
  },
  {
    name: 'Go',
    dropdownOptions: [],
  },
  {
    name: 'Run',
    dropdownOptions: [],
  },
  {
    name: 'Terminal',
    dropdownOptions: [],
  },
  {
    name: 'Help',
    dropdownOptions: [],
  },
];

export default menuOptions;
