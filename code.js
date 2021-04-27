$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate() {
    $("p#calculate").empty();
    //get users income
    //convert to number
    let income = parseInt($("#salary").val());
    //get users credit score
    //convert to a number
    let credit = parseInt($("#credit").val());
    //get users time at job in mos
    //convert to a number
    let timeAtJob = parseInt($("#monthsAtJob").val());


//if income is >= 40000 and credit score is >= 600 then approved
    if (income >= 40000 && credit >= 600) {
        $("p#output").text(`You are Approved for a Loan!`)
    }

//if income is >= 40000 and credit score <= 599 and at job >= 13 mos approved
    else if (income >= 40000 && credit <= 599 && timeAtJob >= 13) {
        $("p#output").text(`You are Approved for a Loan!`)
    }

//if income is >= 40000 and credit score <= 599 and at job <= 12 mos denied
    else if (income >= 40000 && credit <= 599 && timeAtJob <= 12) {
        $("p#output").text(`You are not Approved for a Loan at This Time.`)
    }

//if income is <= 39999 and credit score >= 600 and at job >= 13 mos approved
    else if (income <= 39999 && credit >= 600 && timeAtJob >= 13)  {
        $("p#output").text(`You are Approved for a Loan!`)
    }

//if income is <= 39999 and credit score >= 600 and at job <= 12 mos denied
    else if (income <= 39999 && credit >= 600 && timeAtJob <=12)   {
        $("p#output").text(`You are not Approved for a Loan at This Time.`)
    }

//if income is <= 39999 and credit score <= 599 and at job <= 12 mos denied
    else if (income <= 39999 && credit <= 599 && timeAtJob <= 12) {
        $("p#output").text(`You are not Approved for a Loan at This Time.`)
    }



}




























