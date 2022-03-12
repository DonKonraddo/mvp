import { action, decorate, observable } from 'mobx';
class DataStore {
  data: string[] = [];

  addData(item: string) {
    this.data.push(item);
  }

  removeData(item: string) {
    this.data.splice(this.data.indexOf(item), 1);
  }
}
decorate(DataStore, {
  data: observable,
  addData: action,
  removeData: action,
});
export default DataStore;
