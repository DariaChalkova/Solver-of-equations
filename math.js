//script for lineal equations
let k, l, x;

function validate() {
    k = document.forms["input_form"]["kterm"].value;
    l = document.forms["input_form"]["lterm"].value;


    if (k == 0) {
        outputText = "<em>k</em> не може бути нулем!";
    } else if (isNaN(k, l)) {
        outputText = "<em>k,l</em> має бути числом!";
    } else {
        let x = -l / k;
        outputText = "Для рівняння <strong>" + (k == 1 ? "" : k) + "x + " + (l == 1 ? "" : l) + " " + " = 0</strong>, x дорівнює <strong>" + x + "</strong>";

    }

    // output the result (or errors)
    document.getElementById("output_text").innerHTML = outputText;
}

//  //script for quadratic equations
let a, b, c;

function validateq() {
    a = document.forms["input_form_quadratic"]["aterm"].value;
    b = document.forms["input_form_quadratic"]["bterm"].value;
    c = document.forms["input_form_quadratic"]["cterm"].value;


    if (a == 0) {
        outputAnswer = "<em>a</em> не може бути нулем!";
    } else if (isNaN(a, b, c)) {
        outputAnswer = "<em>a,b,c</em> має бути числом!";
    } else if (Math.pow(b, 2) - 4 * a * c<0) {
        outputAnswer = "Дискримінант<em>D</em> від'ємний, тому розв'язків дане рівняння немає.";
    } else {
        let x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        let x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        outputAnswer = "Для рівняння <strong>" + (a == 1 ? "" : a) + "x<sup>2</sup> + " + (b == 1 ? "" : b) + " x+" + c + " = 0</strong>, x<sub>1</sub> дорівнює <strong>" + x1 + "</strong>, x<sub>2</sub> дорівнює <strong>" + x2 + "</strong>"

    }

    // output the result (or errors)
    document.getElementById("output_answer").innerHTML = outputAnswer;
}
