const body = document.querySelector('body')
export class PageGarage {
    btnCreate: HTMLButtonElement;
    btnUpdate: HTMLButtonElement;
    main: HTMLElement;
    buttonWinners: HTMLButtonElement;
    buttonGarage: HTMLButtonElement;
    btnRace: HTMLButtonElement;
    btnReset: HTMLButtonElement;
    btnGenerate: HTMLButtonElement;

    constructor(){
        this.createGaragePage();
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
    
        this.main = document.createElement('main');
        const wrapperInputCreate = document.createElement('div');
        wrapperInputCreate.className = "wrapper";
        const inputCreate = document.createElement('input');
        inputCreate.className = "inputs";
        inputCreate.id = "createCarName";
        inputCreate.type = "text";
        const inputColorCreate = document.createElement('input');
        inputColorCreate.className = "inputs";
        inputColorCreate.id = "createCarColor";
        inputColorCreate.type = "color";
        this.btnCreate = document.createElement('button');
        this.btnCreate.className = "btn create-btn";
        this.btnCreate.innerText = "create"
        wrapperInputCreate.append(inputCreate,inputColorCreate, this.btnCreate);

        const wrapperInputUpdate = document.createElement('div');
        wrapperInputUpdate.className = "wrapper";
        const inputUpdate = document.createElement('input');
        inputUpdate.className = "inputs";
        inputUpdate.id = "updateCarName";
        inputUpdate.type = "text";
        const inputColorUpdate = document.createElement('input');
        inputColorUpdate.className = "inputs";
        inputColorUpdate.id = "updateCarColor";
        inputColorUpdate.type = "color";
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

        wrapperInputUpdate.append(inputUpdate, inputColorUpdate, this.btnUpdate);
        
        const pageGarage = document.createElement('div');
        pageGarage.className = 'page-garage';
        pageGarage.innerText = 'Page #1'; ///
        this.main.append(pageGarage, wrapperInputCreate, wrapperInputUpdate, this.btnRace, this.btnReset, this.btnGenerate);
        body.append(header, this.main);
    }

}

export function pageGarage(){
    let garagePage = new PageGarage();
    return garagePage;
} 
export let garage = pageGarage();

