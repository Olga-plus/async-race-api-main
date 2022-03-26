import { node } from "webpack";
import { Car, cars } from "./Cars";

const body = document.querySelector('body')
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

    inputDisable: boolean = true;

    callback: () => void;

    constructor(callback: () => void){
        this.createGaragePage();
        this.callback = callback
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

        this.btnRace = document.createElement('button');
        this.btnRace.className = "btn race-btn";
        this.btnRace.innerText = "race";

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
            result;
            body.innerHTML = '';
            pageGarage();
        });
    }

    update() {
        console.log(this, '<<<B');
    }

}

export function pageGarage(){
    let garagePage = new PageGarage(callbackCar);
    const arrsCars = cars(callbackCar);

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
                    });
                break;
            case 'select':
                garagePage.inputDisable=false;
                garagePage.inputColorUpdate.disabled = false;
                garagePage.inputUpdate.disabled = false;
                body.innerHTML = '';
                pageGarage();
                console.log(this.id, garagePage.inputDisable, garagePage.inputColorUpdate.disabled, '<<<AAA');
            break;
        }
    }

}

