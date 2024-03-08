
let elBox = document.querySelector(".container")
console.log(elBox);
let elContainer = document.createElement('div')
console.log(elContainer);
elBox.append(elContainer)
console.log(elBox)
let print;
let insideContent = ''
for(let i=0; i<100; i++){
    if ((i + 1) % 15 === 0) {
        print = "fizzbuzz"
    }    else if ((i + 1) % 3 === 0){
        print = "buzz"
    } else if ((i + 1) % 5 === 0){
        print = "fizz"
    } else {
        print = i+1
    }
    // console.log(print);
    insideContent += `
    <div class="${print} square">${print}</div>
    `
}
elContainer.className = 'd-flex flex-wrap gap-2';
elContainer.innerHTML = insideContent;
