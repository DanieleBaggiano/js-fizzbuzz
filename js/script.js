const rowElem = document.querySelector(".row");
console.log(rowElem);

for (let i = 1; i <= 100; i++) {
    let bgClass;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
        bgClass = "fizzbuzz";
        
    } else if (i % 3 === 0) {
        console.log("FIZZ");
        bgClass = "fizz"
        
    } else if (i % 5 === 0) {
        console.log("BUZZ");
        bgClass = "buzz"
        
    } else {
        console.log(i);
    }

    const writeElemFizzBuzz = `<div class="writefizzbuzz"></div>`;
    rowElem.innerHTML += writeElemFizzBuzz;

    const writeElemFizz = `<div class="writefizz"></div>`;
    rowElem.innerHTML += writeElemFizz;

    const writeElemBuzz = `<div class="writebuzz"></div>`;
    rowElem.innerHTML += writeElemBuzz;

    const boxElem = `<div class="box ${bgClass}">${i}</div>`;
    rowElem.innerHTML += boxElem;
}

