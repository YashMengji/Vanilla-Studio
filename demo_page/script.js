/*
let html = {
  element1: {
    tagName: 'div',
    attributes: {class:'card', id:'c'},
    content: 'this is a div'
  }
  ...
}
*/
//empty html object
let html = {}
//constructor function to generate new html element
function GenerateNewElement( tagName, attributes, content) {

    this.tagName = tagName
    this.attributes = attributes
    this.content = content

  }

let btns = document.querySelectorAll(".card")
console.log(btns)
let elementCounter = 0 // elementCounter to uniquely identify each element

//looping through buttons and adding event listeners
for(let i = 0; i < btns.length; i++){

  btns[i].addEventListener('click', ()=>{
    elementCounter += 1
    let elementStr = 'element' + elementCounter
    let elementName = btns[i].getAttribute('name')
    let newElement = new GenerateNewElement(elementName, {class:'container', id:''}, 'this is a '+elementName)
    html[elementStr] =  newElement
    console.log(html)
    let createdElement = document.createElement(elementName);
    createdElement.setAttribute('class', html[elementStr].attributes.class)

    createdElement.innerHTML = html[elementStr].content
    document.querySelector('.sim-window').appendChild(createdElement)

    GenerateHtmlCodeString(elementStr)
  })

}

function GenerateHtmlCodeString(elementStr){
    let htmlString = `<${html[elementStr].tagName} class="${html[elementStr].attributes.class}">\n\t${html[elementStr].content}\n</${html[elementStr].tagName}>\n`
    console.log(htmlString)
    document.querySelector('.code-preview').textContent += htmlString
    //document.querySelector('.code-preview').style.whiteSpace = 'pre';
}