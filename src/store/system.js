import {observable, action} from 'mobx';

class Store {
    @observable skin = '';

    @action setSkin(skin) {
        this.skin = skin;
    }
}

export default new Store();