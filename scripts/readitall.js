
var numform = document.getElementById("numform");
var Xradio = document.getElementsByName('rbX');
var Ytext = document.getElementById('txtY');
var Rcheck = document.getElementsByName('cbR[]');
var statusbar = document.getElementById('status');
numform.addEventListener("submit", (event) => {

    event.preventDefault();
    let xvalue = 999;
    let yvalue = 999;
    let rvalue = 999;
    let status = "Success!";


    for (i = 0; i < Xradio.length; i++) {
        if (Xradio[i].checked)
            xvalue = Xradio[i].value;
    }

    if (xvalue == 999){
        status = "X has to have a value assigned!";
    }

    if (isNaN(Ytext.value)){
        status = "Y has to be a number!";
    }
    else{
        yvalue = Number(Ytext.value);
        if (!(yvalue >= -5 && yvalue <= 5)){
            status = "Y has to be a number from -5 to 5!";
        }
    }

    for (i = 0; i < Rcheck.length; i++) {
        if (Rcheck[i].checked){
            if (rvalue != 999){
                status = "Choose only one R value!";
            }
            rvalue = Rcheck[i].value;
        }
    }
    if (rvalue == 999) status = "Choose an R value!";

    statusbar.textContent = status;
    if (status == "Success!"){
        draw(xvalue, yvalue, rvalue);
        datagrab(xvalue, yvalue, rvalue);
    }
    else
    draw(null, null, null);
});
