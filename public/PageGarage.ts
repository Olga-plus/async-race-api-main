import { node } from "webpack";
import { Car } from "./Cars";

const body = document.querySelector('body');
const carsContainer = document.createElement('div');

// function cars(callbackCar:()=> void){
//     return fetch('http://localhost:3000/garage')
//           .then(response => response.json())
//           .then(result => {
//               result.forEach((elem: Car) => {
//                   let car = new Car(elem, callbackCar);
//                   return car;
//               })
//               console.log( result, 'function <sddAs')
//               return result;
//           });
// }

// let allCars = cars(callbackCar);
export class PageGarage {
    btnCreate: HTMLButtonElement;
    btnUpdate: HTMLButtonElement;
    sectionMenu: HTMLElement;
    buttonWinners: HTMLButtonElement;
    buttonGarage: HTMLButtonElement;
    btnRace: HTMLButtonElement;
    btnReset: HTMLButtonElement;
    btnGenerate: HTMLButtonElement;
    inputCreate: HTMLInputElement;
    inputUpdate: HTMLInputElement;
    inputColorCreate: HTMLInputElement;
    inputColorUpdate: HTMLInputElement;
    car: Car;

    inputDisable: boolean = true;
    id: number;

    callback: () => void;
    carsAll: Car[];
    timestamp: number;

    constructor(callback: () => void){
        this.createGaragePage();
        this.callback = callback;
        fetch('http://localhost:3000/garage')
          .then(response => response.json())
          .then(result => {
              this.carsAll = result.map((elem: Car) => {
                  this.car = new Car(elem, callbackCar);
                  return this.car;
              })
              console.log( this.carsAll, 'function <<CARS>>')
              return this.carsAll;
          });
    }

    createGaragePage(){
        const header = document.createElement('heder');
        this.buttonGarage = document.createElement('button');
        this.buttonGarage.className = "btn to-garage-btn";
        this.buttonGarage.setAttribute(`data-garage`, `garage`);
        this.buttonGarage.innerText = 'Garage';
    
        this.buttonWinners = document.createElement('button');
        this.buttonWinners.className = "btn to-garage-btn";
        this.buttonWinners.setAttribute('data-winners', 'winners');
        this.buttonWinners.innerText = 'Winners';
    
        header.append(this.buttonGarage, this.buttonWinners);
    
        this.sectionMenu = document.createElement('section');
        const wrapperInputCreate = document.createElement('div');
        wrapperInputCreate.className = "wrapper";
        this.inputCreate = document.createElement('input');
        this.inputCreate.className = "inputs";
        this.inputCreate.id = "createCarName";
        this.inputCreate.type = "text";

        this.inputColorCreate = document.createElement('input');
        this.inputColorCreate.className = "inputs";
        this.inputColorCreate.id = "createCarColor";
        this.inputColorCreate.type = "color";
        this.btnCreate = document.createElement('button');
        this.btnCreate.className = "btn create-btn";
        this.btnCreate.innerText = "create"
        wrapperInputCreate.append( this.inputCreate, this.inputColorCreate, this.btnCreate);
        this.btnCreate.onclick = this.create.bind(this)

        const wrapperInputUpdate = document.createElement('div');
        wrapperInputUpdate.className = "wrapper";
        this.inputUpdate = document.createElement('input');
        this.inputUpdate.className = "inputs";
        this.inputUpdate.id = "updateCarName";
        this.inputUpdate.type = "text";
        this.inputUpdate.disabled = this.inputDisable;

        this.inputColorUpdate = document.createElement('input');
        this.inputColorUpdate.className = "inputs";
        this.inputColorUpdate.id = "updateCarColor";
        this.inputColorUpdate.type = "color";
        this.inputColorUpdate.disabled = this.inputDisable;
        this.btnUpdate = document.createElement('button');
        this.btnUpdate.className = "btn create-btn";
        this.btnUpdate.innerText = "update";
        this.btnUpdate.onclick = this.update.bind(this)

        this.btnRace = document.createElement('button');
        this.btnRace.className = "btn race-btn";
        this.btnRace.innerText = "race";
        this.btnRace.onclick = this.raseAll.bind(this)

        this.btnReset = document.createElement('button');
        this.btnReset.className = "btn reset-btn";
        this.btnReset.innerText = "reset";

        this.btnGenerate = document.createElement('button');
        this.btnGenerate.className = "btn generate-btn";
        this.btnGenerate.innerText = "generate";

        wrapperInputUpdate.append(this.inputUpdate, this.inputColorUpdate, this.btnUpdate);
        
        const pageGarageNumber = document.createElement('div');
        pageGarageNumber.className = 'page-garage';
        pageGarageNumber.innerText = 'Page #1'; ///
        this.sectionMenu.append(wrapperInputCreate, wrapperInputUpdate, this.btnRace, this.btnReset, this.btnGenerate, pageGarageNumber);
        body.append(header, this.sectionMenu);
    }

    create() {
        fetch(`http://localhost:3000/garage`, {
            method: 'POST',
            body: JSON.stringify({ name: this.inputCreate.value, color: this.inputColorCreate.value}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(result => {
            console.log( this.car, result, '<<CARSss>>')
            body.innerHTML = '';
            this.createGaragePage();
            let rezID = result.id;
            this.carsAll.map(el => {
                if (el.id === rezID) {
                    el.name = result.name;
                    el.color = result.color;
                    this.car = new Car(el, callbackCar);
                } else {
                    this.car = new Car(el, callbackCar);
                }
            })
        });
    }

    update() {
        console.log(this.id, '<<<BA');
        fetch(`http://localhost:3000/garage/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: this.inputUpdate.value, color: this.inputColorUpdate.value}),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            body.innerHTML = '';
            this.createGaragePage();
    
                    this.car = new Car(result, callbackCar);
    
        });
    }

    raseAll() {
        console.log( this.carsAll.length, 'GGG<<' )
        let promisAll;
            let arr: any = [];
            for (let i = 0; i < this.carsAll.length; i++) {
                arr.push(fetch(`http://localhost:3000/engine?id=${this.carsAll[i].id}&status=started`,
                 {method: 'PATCH'}).then(response => response.json()))
            }
          promisAll = Promise.all(arr).then(res =>{
              this.carsAll.forEach ((elem, i) => {
                 elem.startedAll( res[i]);
                 console.log( i, '<<<i')
              })
           });
           console.log(arr, 'romisAll');
    }
}
export const garagePage = new PageGarage(callbackGarage);

    function callbackGarage() {
    }

    function callbackCar(): void {
        switch(this.evtType){
            case 'remove':
                fetch(`http://localhost:3000/garage/${this.id}`, {
                        method: 'DELETE',
                    }).then(response => response.json())
                    .then(result => {
                        result;
                        this.renderCar();
                    });
                break;
            case 'select':
                garagePage.inputColorUpdate.removeAttribute("disabled");
                garagePage.inputUpdate.removeAttribute("disabled");
                garagePage.inputColorUpdate.setAttribute('value', this.color);
                garagePage.inputUpdate.setAttribute('value', this.name);
                garagePage.inputUpdate.focus();
                garagePage.id = this.id;
            break;
        }
    }
// console.log(allCars
// .then(result => {
//     // result.map((elem: any) => {
//         console.log(result, '<<!!<');
//         // carsContainer.appendChild(elem.carContainer);
//     })
// // })
// );