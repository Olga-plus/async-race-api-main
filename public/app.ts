import { cars } from "./Cars";
import { pageGarage} from "./PageGarage";
export const body =  document.querySelector('body');

const garageP = pageGarage(callbackGarage);
const arrsCars = cars(callbackCar);

    console.log(garageP.inputDisable);

function callbackGarage(): void {
    console.log(this.inputDisable);
   this.inputDisable = false;
   console.log(this.inputDisable);
}

function callbackCar(): void {
    switch(this.evtType){
        case 'remove':
            fetch(`http://localhost:3000/garage/${this.id}`, {
                    method: 'DELETE',
                }).then(response => response.json())
                .then(result => {
                    result;
                    body.innerHTML = '';
                    pageGarage(callbackGarage);
                    cars(callbackCar);
                });
            break;
        case 'select':
            callbackGarage();
            console.log(this.id, garageP.inputDisable);

        break;
    }
}