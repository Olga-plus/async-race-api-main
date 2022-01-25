
const main = document.querySelector('main')
const buttonGarage = document.querySelector('.to-garage-btn');
const buttonWinners = document.querySelector('.to-winners-btn');
const buttonGenerate = document.querySelector('.generate-cars');
const resetBtn = document.querySelector('.btn-reset')
const buttonCreate = document.querySelector('.create-btn')


buttonGarage.onclick = function() {
    listCar ();
}

function listCar (){
    fetch('http://localhost:3000/garage')
    .then(response => response.json())
    createGaragePage (result);
}

async function createGaragePage (result){
    pageGarage.innerText = 'Page #1'; ///
   await updateDisplay(result);
}


buttonCreate.onclick = function() {
    let newCar = {
        name: document.getElementById('createCarName').value,
        color: document.getElementById('createCarColor').value
      }

    fetch('http://localhost:3000/garage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    }).then(response => console.log( response.json())
    .then())

    document.getElementById('createCarName').value = '';
    document.getElementById('createCarColor').value = '';
    listCar ();
};

const pageGarage = document.querySelector('.page-garage');

function updateDisplay(result){

    console.log(result)

    result.forEach(element => {

        const wrapperBtn = document.createElement('div');
        wrapperBtn.className = 'wrapper';
        pageGarage.appendChild(wrapperBtn);

        const selectButton = document.createElement('button');
        selectButton.className = 'select-btn';
        selectButton.innerText = 'select';
 
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.innerText = 'remove';
        removeButton.id = `${element.id}`; 
        removeButton.onclick = remove;

        const nameCar = document.createElement('div');
        nameCar.className = 'name-car';
        nameCar.innerText = `${element.name}`;

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
        car.style.backgroundColor =`${element.color}`;       
        wrapperCar.append(btnA, btnB, car);
    });
}


function remove () {
console.log(this.id)
        fetch(`http://localhost:3000/garage/${this.id}`, {
            method: 'DELETE',
        }).then(response => console.log(response.json()))
        listCar ();
};

