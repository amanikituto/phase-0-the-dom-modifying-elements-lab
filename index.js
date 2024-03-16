// 1. Remove the main node with id 'main'
const mainNode = document.getElementById('main');
mainNode.remove();

// 2. Create a new <h1> element and store it in a variable named `newHeader`
const newHeader = document.createElement('h1');

// 3. Set the id attribute of the `newHeader` element to 'victory'
newHeader.setAttribute('id', 'victory');

// 4. Set the text content of the `newHeader` element
const yourName = 'YOUR-NAME'; // Replace 'YOUR-NAME' with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the newHeader element to the document body
document.body.appendChild(newHeader);
