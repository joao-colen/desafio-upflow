function generateInputs() {
    for(let i=0; i<$("#number_of_inputs").val(); i++) {
        $("<input type='number' class='campos_soma form-control' style='width: 20%; margin-left: 40%; text-align: center'> ").insertAfter(".input-group");
    }
    $("#number_of_inputs").val('');
    if($("button#calculate_soma").length == 0) {
        $("div#soma").append("<button id='calculate_soma' class='btn btn-primary' onclick='soma()' style='margin-left: 40%; width: 20%;'>Somar</button>");
    }

}


function soma() {
    var soma_total = 0;
    var arrayOfInputs = $("input.campos_soma");
    validation = true;
    for(let i = 0; i < arrayOfInputs.length; i++) {
        if($(arrayOfInputs[i]).val() == '') {
            alert("Todos os inputs devem ser preenchidos");
            validation = false;
        } else {
            soma_total = parseInt($(arrayOfInputs[i]).val()) + soma_total;
        }
    }
    if(validation == true) {
        alert("A soma total é " + soma_total);
        for(let i = 0; i < arrayOfInputs.length; i++) {
            $(arrayOfInputs[i]).val('');
        }
    }

}