import {body} from './app';
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
    drive:boolean;
    timestamp: number;
    start: number;
    carContainer: HTMLDivElement

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
        this.carContainer = document.createElement('div');
        this.carContainer.className = 'car-container';
        body.appendChild(this.carContainer);

        const wrapperBtn = document.createElement('div');
        wrapperBtn.className = 'wrapper';
        this.carContainer.appendChild(wrapperBtn);

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
        this.carContainer.appendChild(wrapperCar);

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

        this.btnA.onclick = this.started.bind(this);
        this.btnB.onclick = this.stop.bind(this);
        this.start = null;
        this.drive = true;
    }

    remove(){
        this.evtType = 'remove';
        console.log(this.evtType)
        this.callback(); //-------------?
    }
    select(){
        this.evtType = 'select';
        console.log( this.evtType )
        this.callback();
    }

    started(){
        this.evtType = 'started';
        console.log(this.id);
        fetch(`http://localhost:3000/engine?id=${this.id}&status=${this.evtType}`, {
            method: 'PATCH',
        }).then(response => response.json()) 
          .then(result => {
           this.timestamp = result.distance / result.velocity;
           window.requestAnimationFrame(this.step.bind(this));
            fetch(`http://localhost:3000/engine?id=${this.id}&status=drive`, {
                method: 'PATCH',
            })
            .then((response) => {  
                if (response.status !== 200) {  
                    console.log('Status Code: ' +  
                    response.status); 
                    this.drive = false;
                    return this.drive;  
                } 
            })
        });
    }

    stop(){
        this.evtType = 'stopped';
        fetch(`http://localhost:3000/engine?id=${this.id}&status=${this.evtType}`, {
            method: 'PATCH',
        }).then(response => response.json()) 
        .then(result => {
        console.log(this.start, result, 'newStopp');
           this.timestamp = 0;
           this.car.style.transform = 'translateX(0px)';
           window.requestAnimationFrame(this.step.bind(this));
        })
    }

    step(timestamp: number) {

        let progresstime;
        if (this.evtType === 'stopped'){
            this.car.style.transform = 'translateX(0px)';
            this.start = null;
        }
        if (this.evtType === 'started'){
            if (!this.start) {
                this.start = timestamp;
            }
            progresstime = this.timestamp - this.start;
            // let windoWidth = ((document.body.scrollWidth) * progresstime) / timestamp;
            let windoWidth =  progresstime /this.timestamp;
            // let wayCar = Math.min(progresstime / timestamp)
            this.car.style.transform = 'translateX(' + windoWidth + 'px)';
         
            // console.log(this.evtType, progresstime, this.timestamp, this.drive, '222222')
            if (progresstime < this.timestamp && this.drive) {
                // console.log(this.evtType, progresstime, this.drive, '111111111')
            window.requestAnimationFrame(this.step.bind(this));
            }
        }
    }
}

// export function cars(callbackCar:()=> void) {
//     return fetch('http://localhost:3000/garage')
//           .then(response => response.json())
//           .then(result => {
//               result.forEach((elem: Car) => {
//                   let car = new Car(elem, callbackCar);
//                   return car;
//               });
//               console.log(result, 'function carss')
//               return result;
//           });
//   }