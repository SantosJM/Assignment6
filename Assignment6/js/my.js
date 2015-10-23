// ==================== Delivery INFO VALIDATION =========================//

function deliveryValidation() {
    
    var customerName = document.deliveryInfo.customer;
    var addType = document.deliveryInfo.addressType;
    var street = document.deliveryInfo.streetAddress;
    var unitNumber = document.deliveryInfo.aptNo;
    var uCity = document.deliveryInfo.city;
    var uState = document.deliveryInfo.state;
    var zip = document.deliveryInfo.zipCode;
    var tele = document.deliveryInfo.phone;
    var uEmail = document.deliveryInfo.email;
    var cvc = document.deliveryInfo.cvc;


    if (customerValidation(customerName)) {
    if (addTypeValidation(addType)) {
    if (streetValidation(street)) {
    if (unitValidation(unitNumber)) {
    if (cityValidation(uCity)) {
    if (stateValidation(uState)) {
    if (zipValidation(zip)) {
    if (phoneValidation(tele)) {
    if (emailValidation(uEmail)) {
    if (cvcValidation(cvc)) {
    }}}}}}}}}}

    return false;
}

function customerValidation(customerName) {
    var letters = /^[a-zA-Z ]+$/;
    if (customerName.value.match(letters)) {
        return true;
    } else {
        alert("NAME must have alphabet characters only");
        customerName.focus();
        return false;
    }
}

function addTypeValidation(addType) {
    if (addType.value == "default") {
        alert("You need to specify your TYPE OF ADDRESS");
        addType.focus();
        return false;
    } else {
        return true;
    }
}

function streetValidation(street) {
    var letters = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;
    if (street.value.match(letters)) {
        return true;
    } else {
        alert("Street Address can only have alphanumeric characters");
        street.focus();
        return false;
    }
}

function unitValidation(unitNumber) {
    var letters = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;
    if (unitNumber.value.match(letters)) {
        return true;
    } else {
        alert("Unit Number can only have alphanumeric characters");
        unitNumber.focus();
        return false;
    }
}

function cityValidation(uCity) {
    var letters = /^[a-zA-Z ]+$/;
    if (uCity.value.match(letters)) {
        return true;
    } else {
        alert("CITY must have alphabet characters only");
        uCity.focus();
        return false;
    }
}

function stateValidation(uState) {
    var uStateLength = uState.value.length;
    if (uStateLength != 2) {
        alert("STATE should only be TWO alphabet characters only");
        uState.focus();
        return false;
    } return true;
}

function zipValidation(zip) {
    var numbers = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (zip.value.match(numbers)) {
        return true;
    } else {
        alert("ZIP code can only be 5 NUMERIC characters");
        zip.focus();
        return false;
    }
}

function phoneValidation(tele) {
    var phoneNo = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/;
    if (tele.value.match(phoneNo)) {
        return true;
    } else {
        alert("That is not a valid 10-digit phone number");
        return false;
    }
}

function emailValidation(uEmail) {
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(uEmail.value.match(mailFormat))  {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uEmail.focus();
        return false;
    }
}

function cvcValidation(cvc) {
    var code = /^[0-9]{3,4}$/;
    if (cvc.value.match(code)) {
        return true;
    } else {
        alert("Invalid CVC Code. Enter 3-4 numeric digits");
        return false;
    }
}


// ============================ PIZZA ORDER ==============================//


// ==== dropdown for Dough ====//

function populateDropdown(dough){
    var dropdown = document.getElementById("dough_list");

    switch (dough.value){
        case 'Hand Tossed':{
            dropdown.options.length = 0;
            dropdown.options[dropdown.options.length] = new Option("Small - $9.99", "Small - $9.99");
            dropdown.options[dropdown.options.length] = new Option("Medium - $12.99", "Medium - $12.99");
            dropdown.options[dropdown.options.length] = new Option("Large - $14.99", "Large - $14.99");
            break;
        }
        case 'Thin Crust':{
            dropdown.options.length = 0;
            dropdown.options[dropdown.options.length] = new Option("Medium - $11.99", "Medium - $11.99");
            dropdown.options[dropdown.options.length] = new Option("Large - $13.99", "Large - $13.99");
            break;
        }
        case 'New York Style':{
            dropdown.options.length = 0;
            dropdown.options[dropdown.options.length] = new Option("Large - $16.99", "Large - $16.99");
            dropdown.options[dropdown.options.length] = new Option("Extra Large - $19.99", "Extra Large - $19.99");
            break;
        }
        case 'Gluten Free':{
            dropdown.options.length = 0;
            dropdown.options[dropdown.options.length] = new Option("Small - $10.99", "Small - $10.99");
            break;
        }
    }
}
//==== calculating pizza order ===== //
/*
function cheeseCost(selectObj) {
    cCost = 0;
    if (selectObj[0].selected) cCost += 0.00;
    else if(selectObj[1].selected) cCost = 0.00;
    else if(selectObj[2].selected) cCost = 2.99;
    else if(selectObj[3].selected) cCost = 3.99;
    return cCost;
}
function sauceCost(selectObj) {
    sCost = 0;
    if (selectObj[0].selected) sCost += 0.00;
    else if(selectObj[1].selected) sCost = 0.00;
    else if(selectObj[2].selected) sCost = 1.99;
    return sCost;
}
*/

function calcTotalCost () {

    var psu = document.getElementById("deliveryInfo");
    var totalcostofpizza = 0;
    var dough = "";
    var toppingcost = 0;
    var cheeseSelect = cheeseCost;
    var sauceSelect = sauceCost;

    function cheeseCost(selectObj) {
    cCost = 0;
    if (selectObj[0].selected) cCost += 0.00;
    else if(selectObj[1].selected) cCost = 0.00;
    else if(selectObj[2].selected) cCost = 2.99;
    else if(selectObj[3].selected) cCost = 3.99;
    return cCost;
    }
    function sauceCost(selectObj) {
        sCost = 0;
        if (selectObj[0].selected) sCost += 0.00;
        else if(selectObj[1].selected) sCost = 0.00;
        else if(selectObj[2].selected) sCost = 1.99;
        return sCost;
    }

    for (var i = 0; i < psu.topping.length; i++) {
        if (psu.topping[i].checked) {
            toppingcost += parseFloat(psu.topping[i].value);
            totalcostofpizza += parseFloat(psu.topping[i].value);
        }
    }

    document.deliveryInfo.total.value = totalcostofpizza;
    confirm ("Pizza Order Details" + "\nTotal price: $" + totalcostofpizza);
    return (true);
}



/* OBJECT LITERALS
var handtossed = {
    sizes = ["Small", "Medium", "Large"],
    prices = ["9.99", "12.99", "14.99"]
};

var thincrust = {
    sizes = ["Medium", "Large"],
    prices = ["11.99", "13.99"]
};

var nystyle = {
    sizes = ["Large", "Extra Large"],
    prices = ["16.99", "19.99"]
};

var glutenfree = {
    sizes = "Small",
    prices = "9.99"
};
*/


//======================== BILLING =========================//


// ==== same as delivery checkbox checked ====//
function FillBilling(f) {
    if(f.billingtoo.checked == true) {
        f.billingCustomer.value = f.customer.value;
        f.billingAddressType.value = f.addressType.value;
        f.billingStreetAddress.value = f.streetAddress.value;
        f.billingAptNo.value = f.aptNo.value;
        f.billingCity.value = f.city.value;
        f.billingState.value = f.state.value;
        f.billingZipCode.value = f.zipCode.value;
        f.billingPhone.value = f.phone.value;
        f.billingEmail.value = f.email.value;
    }
}

// ==== credit card validation ====//
var ccErrorNo = 0;
var ccErrors = new Array ()

ccErrors [0] = "Unknown card type";
ccErrors [1] = "No card number provided";
ccErrors [2] = "NUMERIC characters only";
ccErrors [3] = "Credit card number is invalid";
ccErrors [4] = "Credit card number has an inappropriate number of digits";


function checkCreditCard (cardnumber, cardname) {

    var cards = new Array();

    cards [0] = {name: "Visa",
                 length: "13,16",
                 prefixes: "4",
                 checkdigit: true};
    cards [1] = {name: "MasterCard",
                 length: "16",
                 prefixes: "51,52,53,54,55",
                 checkdigit: true};
    cards [2] = {name: "AmEx",
                 length: "15",
                 prefixes: "34,37",
                 checkdigit: true};

    var cardType = -1;
    for (var i=0; i<cards.length; i++) {

        if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
            cardType = i;
            break;
        }
    }

    if (cardType == -1) {
        ccErrorNo = 0;
        return false;
    }

    if (cardnumber.length == 0)  {
        ccErrorNo = 1;
        return false;
    }

    cardnumber = cardnumber.replace (/\s/g, "");

    var cardNo = cardnumber;
    var cardexp = /^[0-9]{13,19}$/;
    if (!cardexp.exec(cardNo))  {
        ccErrorNo = 2;
        return false;
    }

    if (cards[cardType].checkdigit) {
        var checksum = 0;
        var mychar = "";
        var j = 1;

        var calc;
        for (i = cardNo.length - 1; i >= 0; i--) {

            calc = Number(cardNo.charAt(i)) * j;

            if (calc > 9) {
                checksum = checksum + 1;
                calc = calc - 10;
            }
            checksum = checksum + calc;

            if (j ==1) {j = 2} else {j = 1};
        }

        if (checksum % 10 != 0)  {
            ccErrorNo = 3;
            return false;
        }
    }

    var LengthValid = false;
    var PrefixValid = false;
    var undefined;


    var prefix = new Array ();
    var lengths = new Array ();

    prefix = cards[cardType].prefixes.split(",");

    for (i=0; i<prefix.length; i++) {
        var exp = new RegExp ("^" + prefix[i]);
        if (exp.test (cardNo)) PrefixValid = true;
    }

    if (!PrefixValid) {
        ccErrorNo = 3;
        return false;
    }

    lengths = cards[cardType].length.split(",");
    for (j=0; j<lengths.length; j++) {
        if (cardNo.length == lengths[j]) LengthValid = true;
    }

    if (!LengthValid) {
        ccErrorNo = 4;
        return false;
    };

    return true;
}
function testCreditCard () {
    myCardNo = document.getElementById('CardNumber').value;
    myCardType = document.getElementById('CardType').value;
    if (checkCreditCard (myCardNo,myCardType)) {
        alert ("Congratulations! Credit card ACCEPTED!")
    }
    else {alert (ccErrors[ccErrorNo])};
}


// ==== expiration date ====//
var today, someday;
var exMonth=document.getElementById("exMonth");
var exYear=document.getElementById("exYear");
today = new Date();
someday = new Date();
someday.setFullYear(exYear, exMonth, 1);

function validateExpDate () {

        if (someday < today) {
            alert("The expiration date is before today's date. Please select a valid expiration date");
            return false;
        }
    }
    

