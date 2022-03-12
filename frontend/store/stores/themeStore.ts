import { action, decorate, observable } from 'mobx';

class ThemeStore {
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}

decorate(ThemeStore, {
  isDarkMode: observable,

  toggleDarkMode: action,
});
export default ThemeStore;
