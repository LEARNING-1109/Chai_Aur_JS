

// let date = t.toLocaleDateString();
// console.log(date);

// console.log(time);

let clock = document.querySelector("#clock");

console.log(clock)

setInterval(() => {
    let t = new Date();
    let time = t.toLocaleTimeString();
    clock.innerHTML = time;
}, 1000);

