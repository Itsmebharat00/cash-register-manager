const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes =  [2000, 500, 100, 20, 10, 5, 1 ];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmt.value > 0) {
       
        if (cashGiven.value >=  billAmt.value) {
            
            const amountToReturned = cashGiven.value -  billAmt.value;
            calculateChange(amountToReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToReturned) {
    for(let i = 0; i < availableNotes.length; i++ ) {
        const numberOfNotes = Math.trunc(amountToReturned / availableNotes[i]);
        amountToReturned = amountToReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
}



function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}


