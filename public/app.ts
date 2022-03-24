import { cars } from "./Cars";
import { PageGarage } from "./PageGarage";
export const body =  document.querySelector('body');


export function pageGarage(){
    let garagePage = new PageGarage(callbackCar);
    return garagePage;
}
cars(callbackCar);
    // console.log(carss);

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