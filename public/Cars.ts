import { garage } from "./PageGarage";

interface CarInterface {
    name: string; color: string; id: number
}


const main: HTMLElement = garage.main;

export class Car {
    callback: () => void;
    name: string;
    color: string;
    id: number
    removeButton: HTMLButtonElement;
    selectButton: HTMLButtonElement;
    car: HTMLDivElement;
    evtType: string = null;
    btnA: HTMLButtonElement;
    btnB: HTMLButtonElement;

    constructor({ name, color, id }: { name: string; color: string; id: number; }, callback: () => void){
        this.name = name;
        this.color = color;
        this.id = id;
        this.renderCar();
        this.callback = callback;

    }

    eventType(){
        return this.evtType
    }

    renderCar() {

        const carContainer = document.createElement('div');
        carContainer.className = 'car-container';
        main.appendChild(carContainer);

        const wrapperBtn = document.createElement('div');
        wrapperBtn.className = 'wrapper';
        carContainer.appendChild(wrapperBtn);

        this.selectButton = document.createElement('button');
        this.selectButton.className = 'select-btn';
        this.selectButton.innerText = 'select';

        this.removeButton = document.createElement('button');
        this.removeButton.className = 'remove-btn';
        this.removeButton.innerText = 'remove';

        const nameCar = document.createElement('div');
        nameCar.className = 'name-car';
        nameCar.innerText = `${this.name}`;

        wrapperBtn.append(this.selectButton, this.removeButton, nameCar);

        const wrapperCar = document.createElement('div');
        wrapperCar.className = 'wrapper';
        carContainer.appendChild(wrapperCar);

        this.btnA = document.createElement('button');
        this.btnA.className = 'btn-a';
        this.btnA.innerText = 'A';

        this.btnB = document.createElement('button');
        this.btnB.className = 'btn-b';
        this.btnB.innerText = 'B';

        this.car = document.createElement('div');
        this.car.className = 'car';
        this.car.style.backgroundColor = `${this.color}`;
        this.car.id = `${this.id}`;

        wrapperCar.append(this.btnA, this.btnB, this.car);

        this.removeButton.onclick = this.remove.bind(this);
        this.selectButton.onclick = this.select.bind(this);

        this.btnA.onclick = this.start.bind(this);
        this.btnB.onclick = this.stop.bind(this);
        
    }

    remove(){
        this.evtType = 'remove';
        console.log(this.evtType)
        this.callback();
    }
    select(){
        this.evtType = 'select';
        console.log( this.evtType)
        this.callback();
    }

    start(){
        this.evtType = 'started';
        this.callback();
    }

    stop(){
        this.evtType = 'stopped';
        this.callback();
    }
}


export function cars(callbackCar:any) {
    fetch('http://localhost:3000/garage')
        .then(response => response.json())
        .then(result => {
            result.forEach((elem: CarInterface) => {
                let car = new Car(elem, callbackCar);
            });
            
        });
}