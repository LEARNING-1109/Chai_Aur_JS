let btns = document.querySelectorAll('.button');


btns.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e.target)
        console.log(e.target.id)

        document.body.style.backgroundColor = e.target.id;
        // document.body.style.backgroundColor = "blue";
    })
})

let applyColor = document.querySelector('#apply-color');
let chooseColor = document.querySelector('#choose-color');


applyColor.addEventListener('click', function (e) {
    // console.log(chooseColor.value);
    document.body.style.backgroundColor = chooseColor.value;
})


// -------------- DYNAMIC COLOR CHANGE ----------

let colorPicker = document.querySelector('#choose-color');
colorPicker.addEventListener('change', function (e) {
    document.body.style.backgroundColor = e.target.value;
})


