import { incElementCounter } from "./elementCounter";
let simwindow;
export function getReferenceInitSections(simwindowRef) {
    simwindow = simwindowRef.current;
}

export function initSections() {
    // create header and append
    let header = document.createElement('header');
    header.id = `element${incElementCounter()}`;
    let logoDiv = document.createElement('div');
    logoDiv.id = `element${incElementCounter()}`;
    let nav = document.createElement('nav');
    nav.id = `element${incElementCounter()}`;

    logoDiv.textContent = "VanillaStudio";
    for(let i = 0; i < 3 ; i++) {
        let link = document.createElement('a');
        link.id = `element${incElementCounter()}`;
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

    console.log(header);
    simwindow.appendChild(header);

    // create main and append 
    let main = document.createElement('main');
    main.id = `element${incElementCounter()}`;
    main.style = `background-color: lightblue; height: 100vh`;
    simwindow.appendChild(main);
    
    let footer = document.createElement("footer");
    footer.id = `element${incElementCounter()}`;
    let footerDiv = document.createElement("div");
    footerDiv.id = `element${incElementCounter()}`;
    footerDiv.textContent = "Made with Vanilla Studio";
    footer.appendChild(footerDiv);
    footer.style = `
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
    `
    simwindow.appendChild(footer);
    
}
