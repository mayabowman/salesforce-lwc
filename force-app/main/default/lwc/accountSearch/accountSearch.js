import { LightningElement } from 'lwc';
export default class AccountSearch extends LightningElement {
    numberOfEmployees = null;
    handleChange(event) {
        this.numberOfEmployees = event.detail.value;
    }
    reset() {
        this.numberOfEmployees = null;
    }
}