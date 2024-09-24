let simwindow, template, child1, child2, child3, child4;

export function getReferenceForLayout(simwindowRef) {
    simwindow = simwindowRef.current;
} 

function createTemplate(childrenCount) {

}

function handleClick(e) {
    
    let layoutType = e.target.classList[1];
    console.log(layoutType);
    switch(layoutType) {
        case "layout-1" : 
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;

            template.style = `
            display:grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `;
            template.appendChild(child1);
            template.appendChild(child2);
            simwindow.appendChild(template);
        break;
        case "layout-2" :
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;
            child3.style = `outline: 2px solid blue`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            height: 100%;
            `
            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
        break;
        case "layout-3" :
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `
            template.appendChild(child1);
            template.appendChild(child2);
            simwindow.appendChild(template);
        break;
        case "layout-4":
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child1.style = `outline: 2px solid blue`;
            child2.style = `outline: 2px solid blue`;
            child3.style = `outline: 2px solid blue`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-rows: repeat(3, 1fr);
            width: 100%;
            height: 100%;
            `
            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
        break;
        case "layout-5":
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child1.style = `outline: 2px solid blue; grid-row: 1 / span 2;`;
            child2.style = `outline: 2px solid blue;`;
            child3.style = `outline: 2px solid blue;`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
        break;
        case "layout-6":
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child1.style = `outline: 2px solid blue; `;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue; grid-row: 1 / span 2; grid-column: 2 / 3`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
        break;
        case "layout-7":
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child1.style = `outline: 2px solid blue; grid-column: 1 / span 2`;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue;`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
        break;
        case "layout-8":
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child1.style = `outline: 2px solid blue; `;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue; grid-column: 1 / span 2`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            simwindow.appendChild(template);
        break;
        case "layout-9":
            template = document.createElement('div');
            child1 = document.createElement('div');
            child2 = document.createElement('div');
            child3 = document.createElement('div');
            child4 = document.createElement('div');
            child1.style = `outline: 2px solid blue; `;
            child2.style = `outline: 2px solid blue; `;
            child3.style = `outline: 2px solid blue;`;
            child4.style = `outline: 2px solid blue;`;

            template.style = `
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 100%;
            `

            template.appendChild(child1);
            template.appendChild(child2);
            template.appendChild(child3);
            template.appendChild(child4);
            simwindow.appendChild(template);
    } 
}

window.addEventListener("keyup", (e) => {
    if(e.key == 'c') {
        console.log("html code : ");
        console.log(simwindow.innerHTML);
    }
})

export {handleClick}