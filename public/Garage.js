
const main = document.querySelector('main');

export class Garage {
    callback;
    name;
    color;
    id;

    constructor(name, color, id ){
        this.name = name;
        this.color = color;
        this.id = id;
        this.createGarageList();

    }

    createGarageList() {
    
        // const pageGarage = document.createElement('div');
        // pageGarage.className = 'page-garage';
        // pageGarage.innerText = 'Page #1'; ///
        // main.appendChild(pageGarage);

        const carContainer = document.createElement('div');
        carContainer.className = 'car-container';
        main.appendChild(carContainer);

        const wrapperBtn = document.createElement('div');
        wrapperBtn.className = 'wrapper';
        carContainer.appendChild(wrapperBtn);

        const selectButton = document.createElement('button');
        selectButton.className = 'select-btn';
        selectButton.innerText = 'select';

        const removeButton = document.createElement('button');
        removeButton.className = 'select-btn';
        removeButton.innerText = 'select';

        const nameCar = document.createElement('div');
        nameCar.className = 'name-car';
        nameCar.innerText = `${this.name}`;

        wrapperBtn.append(selectButton, removeButton, nameCar);

        const wrapperCar = document.createElement('div');
        wrapperCar.className = 'wrapper';
        carContainer.appendChild(wrapperCar);

        const btnA = document.createElement('button');
        btnA.className = 'btn-a';
        btnA.innerText = 'A';

        const btnB = document.createElement('button');
        btnB.className = 'btn-b';
        btnB.innerText = 'B';

        const car = document.createElement('div');
        car.className = 'car';
        car.style.backgroundColor = `${this.color}`;
        car.id = `${this.id}`;

        wrapperCar.append(btnA, btnB, car);
    }
}

