import { cars } from "./Cars";
import { pageGarage} from "./PageGarage";
export const body =  document.querySelector('body');

const garageP = pageGarage();
cars(callbackCar);
    console.log(garageP);

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
            
            console.log(this.id);

        break;
    }
}