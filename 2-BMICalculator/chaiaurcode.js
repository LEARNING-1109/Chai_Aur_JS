let btn = document.querySelector('button');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let result = document.querySelector('#results')


btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (height.value !== "" && weight.value !== "") {        
        console.log(height.value)
        let h = height.value;
        let w = weight.value;
        
        let res = w / (h * h) * Math.pow(10, 4);

        let category;
        if (res < 18.6)
            category = "Underweight";
        else if (res <= 25)
            category = "Normal weight";
        else {
            category = "Overweight";
        }

        result.innerHTML = `${res} <br>  BMI Category: ${category}`;
    }
    else {
        alert("⛔ Height and weight should not be empty !");
    }
});

