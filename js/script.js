const rowElem = document.querySelector(".row");
console.log(rowElem);

for (let i = 1; i <= 100; i++) {
    let bgClass;
    let num = i;

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FIZZBUZZ");
        bgClass = "fizzbuzz";
        num = "FIZZBUZZ";
    } else if (num % 3 === 0) {
        console.log("FIZZ");
        bgClass = "fizz"
        num = "FIZZ";
    } else if (num % 5 === 0) {
        console.log("BUZZ");
        bgClass = "buzz"
        num = "BUZZ";
    } else {
        console.log(i);
    }

    const boxElem = `<div class="box ${bgClass}">${num}</div>`;
    rowElem.innerHTML += boxElem;
}

