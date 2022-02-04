import { cars } from "./Cars";
import { garage } from "./PageGarage";

const body =  document.querySelector('body');
cars(callbackCar);

function callbackCar() {
    switch(this.evtType){
        case 'remove':
            fetch(`http://localhost:3000/garage/${this.id}`, {
                    method: 'DELETE',
                }).then(response => response.json())
                .then(result => {
                    result;
                    // location.reload(); // ------------------???????????????????
                });
            break;
        case 'select':
            console.log(this.id);
            break;

    case 'started':
        console.log(this.id);
        fetch(`http://localhost:3000/engine?id=${this.id}&status=${this.evtType}`, {
            method: 'PATCH',
        }).then(response => response.json()) 
        .then(result => console.log(result))
        break;

    case 'stopped':
        console.log(this.id);
        fetch(`http://localhost:3000/engine?id=${this.id}&status=${this.evtType}`, {
            method: 'PATCH',
        }).then(response => response.json()) 
        .then(result => console.log(result))
        break;
    }
}