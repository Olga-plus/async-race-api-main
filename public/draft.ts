// import { Garage } from "./Garage.1";



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
