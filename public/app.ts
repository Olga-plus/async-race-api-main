import { cars } from "./Cars";
import {pageGarage} from "./PageGarage";
export const body =  document.querySelector('body');


pageGarage();
cars(callbackCar);
    // console.log(carss);
const updateCarName = document.querySelector('.updateCarName')
function callbackCar(): void {
    switch(this.evtType){
        case 'remove':
            fetch(`http://localhost:3000/garage/${this.id}`, {
                    method: 'DELETE',
                }).then(response => response.json())
                .then(result => {
                    result;
                    body.innerHTML = '';
                    pageGarage();
                    cars(callbackCar);
                });
            break;
        case 'select':
           
            console.log(this.id, updateCarName);

        break;
    }
}