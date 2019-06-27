const myAge = prompt(`How old are you?`)

function checkAge(age) {
    if (age > 18)
        return true
    else
        return false
}
function isAllowed() {
    let allowed = checkAge(myAge)

    if (allowed) {
        let askName = prompt(`What is your name?`)
        let askAddress = prompt(`Where do you live?`)
        makeID(askName, myAge, askAddress)

    }
    else
        return console.log(`You are not allowed to make ID`);
}
function makeID(name, age, address) {
    const can = checkAge(myAge)

    if (can) {
        return console.log(`Name: ${name} \n Age: ${age} \n Address : ${address}`);       
    }
    else{
        return console.log(`Sorry :(`)
        
    }

}

const addMarks = (text, mark, times) => {
    let newText = text
  
    for (let i = 0; i <= times; i++) {
      newText += mark
    }
  
    console.log(newText)
  }
  
  isAllowed(myAge)
  addMarks('Hello', '!', 1) // Hello!
  addMarks('How are you', '?', 2) // How are you??
  