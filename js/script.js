const rowElem = document.querySelector(".row");
console.log(rowElem);

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    } else {
        console.log(i);
    }

    const boxElem = `<div class="box">${i}</div>`;
    rowElem.innerHTML += boxElem;
}

