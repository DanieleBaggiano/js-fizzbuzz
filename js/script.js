const rowElem = document.querySelector(".row");
console.log(rowElem);

let boxElem = "";
for (let i = 1; i <= 100; i++) {
    let bgClass;
    let num = i;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
        bgClass = "fizzbuzz";
        num = "FIZZBUZZ";
    } else if (i % 3 === 0) {
        console.log("FIZZ");
        bgClass = "fizz"
        num = "FIZZ";
    } else if (i % 5 === 0) {
        console.log("BUZZ");
        bgClass = "buzz"
        num = "BUZZ";
    } else {
        console.log(i);
    }

    const boxElem = `<div class="box ${bgClass}">${num}</div>`;
    rowElem.innerHTML += boxElem;
}

