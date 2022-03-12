import { createContext, useContext } from 'react';

import DataStore from '~/store/stores/dataStore';
import ThemeStore from '~/store/stores/themeStore';

export const index = {
  dataStore: new DataStore(),
  themeStore: new ThemeStore(),
};

export const StoreContext = createContext(index);

export const useStore = () => {
  return useContext(StoreContext);
};
