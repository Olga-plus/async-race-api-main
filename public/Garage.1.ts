


class Garage {
    listResult: object

    constructor(){

    }

    getCars(){
         fetch('http://localhost:3000/garage')
        .then(response => response.json())
        .then(result => {return result.garage});
    }

    createGarageList() {
    
            const pageGarage = document.createElement('div');
            pageGarage.className = 'page-garage';
            pageGarage.innerText = 'Page #1'; ///
            main.appendChild(pageGarage);

            const wrapperBtn = document.createElement('div');
            wrapperBtn.className = 'wrapper';
            pageGarage.appendChild(wrapperBtn);

            const selectButton = document.createElement('button');
            selectButton.className = 'select-btn';
            selectButton.innerText = 'select';
    
            const removeButton = document.createElement('button');
            removeButton.className = 'select-btn';
            removeButton.innerText = 'select';

            const nameCar = document.createElement('div');
            nameCar.className = 'name-car';
            // nameCar.innerText = `${result[0].name}`;

            wrapperBtn.append(selectButton, removeButton, nameCar);

            const wrapperCar = document.createElement('div');
            wrapperCar.className = 'wrapper';
            pageGarage.appendChild(wrapperCar);

            const btnA = document.createElement('button');
            btnA.className = 'btn-a';
            btnA.innerText = 'A';

            const btnB = document.createElement('button');
            btnB.className = 'btn-b';
            btnB.innerText = 'B';

            const car = document.createElement('div');
            car.className = 'car';
            // car.style.backgroundColor = `${result[0].color}`;

            wrapperCar.append(btnA, btnB, car);
    }
}
