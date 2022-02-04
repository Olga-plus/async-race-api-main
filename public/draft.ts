// import { Garage } from "./Garage.1";

// <svg height="150" width="400">
// <defs>
//   <lineargradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
//     <stop offset="20%" style="stop-color:yellowgreen;stop-opacity:1" />
//     <stop offset="100%" style="stop-color:purple;stop-opacity:1" />
//   </lineargradient>
// </defs>
// <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
// </svg>

// const main = document.querySelector('main') as HTMLElement
// const buttonGarage = document.querySelector('.to-garage-btn') as HTMLElement
// const buttonWinners = document.querySelector('.to-winners-btn') as HTMLElement;
// const buttonGenerate = document.querySelector('.generate-cars') as HTMLElement;
// const resetBtn = document.querySelector('.btn-reset') as HTMLElement
// const buttonCreate = document.querySelector('.create-btn') as HTMLElement


// buttonGarage.onclick = function() {
//     listCar ();
// }

// function listCar (){
//     fetch('http://localhost:3000/garage')
//     .then(response => response.json())
//     .then(result =>  createGaragePage (result))
// }

//  function createGaragePage (result: any){
//     pageGarage.innerText = 'Page #1'; ///
//    updateDisplay(result);
// }

// const pageGarage = document.querySelector('.page-garage') as HTMLElement;

// function updateDisplay(result: any){

//     result.forEach(element => {

//         const wrapperBtn = document.createElement('div');
//         wrapperBtn.className = 'wrapper wrapper-btn-car';
//         pageGarage.appendChild(wrapperBtn);

//         const selectButton = document.createElement('button');
//         selectButton.className = 'select-btn';
//         selectButton.innerText = 'select';
 
//         const removeButton = document.createElement('button');
//         removeButton.className = 'remove-btn';
//         removeButton.innerText = 'remove';
//         removeButton.id = `${element.id}`; 
//         removeButton.onclick = remove;

//         const nameCar = document.createElement('div');
//         nameCar.className = 'name-car';
//         nameCar.innerText = `${element.name}`;

//         wrapperBtn.append(selectButton, removeButton, nameCar);

//         const wrapperCar = document.createElement('div');
//         wrapperCar.className = 'wrapper wrapper-car';
//         pageGarage.appendChild(wrapperCar);

//         const btnA = document.createElement('button');
//         btnA.className = 'btn-ab';
//         btnA.innerText = 'A';
//         btnA.setAttribute = ('value', "started")
//         btnA.onclick = startCar;
//         const btnB = document.createElement('button');
//         btnB.className = 'btn-ab';
//         btnB.innerText = 'B';
//         btnB.setAttribute = ('value', "stopped")

//         const car = document.createElement('div');
//         car.className = 'car';
//         car.style.backgroundColor =`${element.color}`;       
//         wrapperCar.append(btnA, btnB, car);
//     });

  
// }
//   function startCar(){
//       console.log(this.setAttribute)
//         fetch(`http://localhost:3000/engine?id=1&status=${this.setAttribute}`, {
//             method: 'PATCH',
     
//         }).then(response => console.log(response.json()))
//     }

// buttonCreate.onclick = function() {
//     let newCar = {
//         name: document.getElementById('createCarName').value,
//         color: document.getElementById('createCarColor').value
//       }

//     fetch('http://localhost:3000/garage', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCar)
//     }).then(response => console.log( response.json()))
//     .then(() => {
//         pageGarage.innerText = 'Page #1'; ///
//         listCar ();
//     });

//     document.getElementById('createCarName').value = '';
//     document.getElementById('createCarColor').value = '';
    
// };

// function remove () {
//         fetch(`http://localhost:3000/garage/${this.id}`, {
//             method: 'DELETE',
//         }).then(response => console.log(response.json()))
//         .then(() => {
//             pageGarage.innerText = 'Page #1'; ///
//             listCar ();
//         });
// };




// const main: HTMLElement = document.querySelector('main');

// export class Garage {
//     callback: () => void;
//     name: string;
//     color: string;
//     id: number

//     constructor({ name, color, id }: { name: string; color: string; id: number; }){
//         this.name = name;
//         this.color = color;
//         this.id = id;
//         this.createGarageList();

//     }


// function createGaragePage(){
//     const header = document.createElement('heder');
//     const buttonGarage = document.createElement('button');
//     buttonGarage.className = "btn to-garage-btn";
//     buttonGarage.setAttribute = ('data-garage', 'garage');
//     buttonGarage.innerText = 'Garage';

//     const buttonWinners = document.createElement('button');
//     buttonWinners.className = "btn to-garage-btn";
//     buttonWinners.setAttribute = ('data-winners', 'winners');
//     buttonWinners.innerText = 'Winners';

//     header.append(buttonGarage, buttonWinners);

//     const main = document.createElement('main');
//     main.innerHTML = `
//     <div class="wrapper">
//         <input id="createCarName" type="text" class="inputs"><input id="createCarColor" type="color"><button class="btn create-btn">create</button>
//     </div>
//     <div class="wrapper">
//         <input id="updateCarName" type="text" class="inputs"><input id="updateCarColor" type="color"><button class="btn">update</button>
//     </div>
//     <div class="wrapper">
//         <button class="btn btn-race" >race</button><button class="btn btn-reset">reset</button><button class="btn generate-cars">generate cars</button>
//     </div>
// `;
//     const pageGarage = document.createElement('div');
//     pageGarage.className = 'page-garage';
//     pageGarage.innerText = 'Page #1'; ///
//     main.appendChild(pageGarage);
//     body.append(header, main);
    
//     buttonGarage.addEventListener('click', () => {getListCar()});
// }

// createGaragePage();

// const generateCarsBtn = document.querySelector('.generate-cars');
// const resetBtn = document.querySelector('.btn-reset');
// const raceBtn = document.querySelector('.create-btn');
// const createBtn = document.querySelector('.create-btn');
// const updateBtn = document.querySelector('.create-btn');

// function getListCar (){
//     fetch('http://localhost:3000/garage')
//     .then(response =>  response.json())
//     .then(result => {
//         console.log(result)
//      createListCar(result)
//     })
// }

// function createListCar(result){
//     result.forEach(item => {
//         console.log(item.name)
//     let list = new Garage(item);
// });
// }


// const main = document.querySelector('main');
// class Garage {
//     callback;
//     name;
//     color;
//     id;

//     constructor({name, color, id}){
//         this.name = name;
//         this.color = color;
//         this.id = id;
//         this.createGarageList();
//     }

//     createGarageList() {

//         const carContainer = document.createElement('div');
//         carContainer.className = 'car-container';
//         main.appendChild(carContainer);

//         const wrapperBtn = document.createElement('div');
//         wrapperBtn.className = 'wrapper';
//         carContainer.appendChild(wrapperBtn);

//         const selectButton = document.createElement('button');
//         selectButton.className = 'btn select-btn';
//         selectButton.innerText = 'select';

//         const removeButton = document.createElement('button');
//         removeButton.className = 'btn remove-btn';
//         removeButton.innerText = 'remove';

//         const nameCar = document.createElement('div');
//         nameCar.className = 'name-car';
//         nameCar.innerText = `${this.name}`;

//         wrapperBtn.append(selectButton, removeButton, nameCar);

//         const wrapperCar = document.createElement('div');
//         wrapperCar.className = 'wrapper';
//         carContainer.appendChild(wrapperCar);

//         const btnA = document.createElement('button');
//         btnA.className = 'btn-a';
//         btnA.innerText = 'A';

//         const btnB = document.createElement('button');
//         btnB.className = 'btn-b';
//         btnB.innerText = 'B';

//         const car = document.createElement('div');
//         car.className = 'car';
//         car.style.backgroundColor = `${this.color}`;
//         car.id = `${this.id}`;

//         wrapperCar.append(btnA, btnB, car);

//         // btnA.onclick = this.startCar.bind(this);
//         // btnB.onclick = this.stopCar.bind(this);
//         // selectButton.onclick = this.selectCar.bind(this);
//     }

    // selectCar(){
    //     this.callbackSelect();
    // }

    // deleteCar(){
    //     this.callbackDelete();
    // }

    // startCar(){
        
    // }
    // stopCar(){

    // }
// }


// function callbackDelete() {
//     fetch(`http://localhost:3000/garage/${this.id}`, {
//                     method: 'DELETE',
//                 }).then(response => console.log(response.json()))
//                 .then(result => {
//                     pageGarage.innerText = 'Page #1'; ///
//                     createListCar(result);
//                 });
// }