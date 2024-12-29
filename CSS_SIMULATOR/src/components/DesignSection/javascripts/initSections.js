import { incElementCounter } from "./elementCounter";
let simwindow;
export function getReferenceInitSections(simwindowRef) {
    simwindow = simwindowRef.current;
}

export function initSections() {
    // create header and append
    let header = document.createElement('header');
    header.id = `element${incElementCounter()}`;
    header.classList.add('section');
    let logoDiv = document.createElement('div');
    logoDiv.id = `element${incElementCounter()}`;
    logoDiv.classList.add('section')
    let nav = document.createElement('nav');
    nav.id = `element${incElementCounter()}`;
    nav.classList.add('section');

    logoDiv.textContent = "VanillaStudio";
    for(let i = 0; i < 3 ; i++) {
        let link = document.createElement('a');
        link.id = `element${incElementCounter()}`;
        link.classList.add('section');
        if(i == 0) {
            link.textContent = "Home";
        }else if(i == 1) {
            link.textContent = "About";
        }else if(i == 2) {
            link.textContent = "Contact";
        }
        // links.push(link);
        link.style = `text-decoration:none; color: black;`;
        nav.appendChild(link);
    }
    nav.style = `display: flex; gap: 5rem;`;
    header.appendChild(logoDiv);
    header.appendChild(nav);
    header.style = `
    display:flex; 
    justify-content: space-between;
    padding: 2rem 5rem;`

    simwindow.appendChild(header);

    // create main and append 
    let main = document.createElement('main');
    main.id = `element${incElementCounter()}`;
    main.classList.add('section');
    main.style = `background-color: lightblue; height: 100vh`;
    simwindow.appendChild(main);
    
    let footer = document.createElement("footer");
    footer.id = `element${incElementCounter()}`;
    footer.classList.add('section');
    let footerDiv = document.createElement("div");
    footerDiv.id = `element${incElementCounter()}`;
    footerDiv.classList.add('section');
    footerDiv.textContent = "Made with Vanilla Studio";
    footer.appendChild(footerDiv);
    footer.style = `
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
    `
    simwindow.appendChild(footer);
    
}
