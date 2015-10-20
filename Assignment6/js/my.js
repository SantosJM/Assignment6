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

    if (customerValidation(customerName)) {
    if (addTypeValidation(addType)) {
    if (streetValidation(street)) {
    if (unitValidation(unitNumber)) {
    if (cityValidation(uCity)) {
    if (stateValidation(uState)) {
    if (zipValidation(zip)) {
    if (phoneValidation(tele)) {
    if (emailValidation(uEmail)) {
    }}}}}}}}}

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
        alert("STATE should only be 2 alphabet characters only");
        uState.focus();
        return false;
    } return true;
}

function zipValidation(zip) {
    var numbers = /^[0-9]+$/;
    if (zip.value.match(numbers)) {
        return true;
    } else {
        alert("ZIP code can only be numeric characters");
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


// ============================ PIZZA ORDER ==============================//

var handTossedOption = {
    sizes: ["Small", "Medium", "Large"],
    prices: [9.99, 12.99, 14.99],
};

var thinCrustOption = {
    sizes: ["Medium", "Large"],
    prices: [11.99, 13.99],
};

var newYorkStyleOption = {
    sizes: ["Large", "Extra Large"],
    prices: [16.99, 19.99],
};

var glutenFreeOption = {
    sizes: ["Small"],
    prices: [10.99],
};

/*
function populateDropdown(dough) {
    switch(dough) {
            case "handTossed":
                document.forms[1].dough.disabled = false;
                document.forms[1].dough.options[0].value = "Small";
                document.forms[1].dough.options[1].value = "Medium";
                document.forms[1].dough.options[2].value = "Large";
                break;
            case "thinCrust":
                document.forms[1].dough.disabled = false;
                document.forms[1].dough.options[0].value = "Medium";
                document.forms[1].dough.options[1].value = "Large";
                break;
            case "newYorkStyle":
                document.forms[1].dough.disabled = false;
                document.forms[1].dough.options[0].value = "Large";
                document.forms[1].dough.options[1].value = "Extra Large";
                break;
            case "glutenFree":
                document.forms[1].dough.disabled = false;
                document.forms[1].dough.options[0].value = "Small";
                break;
            default:
                document.forms[1].dough.length = 1;
                document.forms[1].dough.options[0].text = 'Select a dough first';
                document.forms[1].dough.disabled = true;
        }
}
*/

function populateDropdown() {
    var dropDown = document.getElementById("dropdown1");

