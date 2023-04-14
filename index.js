// function addingEventListener() {
//     const input=document.getElementById('button');
//     return input.addEventListener('click',clickAlert)
// }
// addingEventListener()

// function clickAlert(){
//     return alert('I was clicked!');
// }

function addingEventListener() {
    const input=document.getElementById('button');
    return input.addEventListener('click',() => alert('I was clicked'))
}
addingEventListener()

// function clickAlert(){
//     return alert('I was clicked!');
// }

