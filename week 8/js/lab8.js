function submitProductOrderForm(event) {
    if ((validateName() && validateSurname() && validatePhone() && validateCity() && validateQuantity() && validateDateTime()) === true) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const phone = document.getElementById("phone").value;
        const city = document.getElementById("city").value;
        const dateTime = document.getElementById("date-time").value;
        const quantity = document.getElementById("quantity").value;

        let summaryHtml = `
            <strong>Имя:</strong> ${name}<br>
            <strong>Фамилия:</strong> ${surname}<br>
            <strong>Номер телефона:</strong> ${phone}<br>
            <strong>Город:</strong> ${city}<br>
            <strong>Дата и Время:</strong> ${dateTime}<br>
            <strong>Количество:</strong> ${quantity}
        `;

        document.getElementById("summaryContent").innerHTML = summaryHtml;
        document.getElementById("summaryBlock").style.display = 'block';
    } else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields with valid inputs";
        const text = document.getElementById("hidden");
        text.style.display = "block";
    }
}

function updateSendButton() {
    const inputs = document.querySelectorAll('.field_form');
    const allValid = Array.from(inputs).every(input => input.value.trim() !== '');
    const button = document.querySelector('.button');
    button.disabled = !allValid;
}

window.onload = function() {
    const inputs = document.querySelectorAll('.field_form');
    inputs.forEach(input => {
        input.oninput = updateSendButton;
    });
    updateSendButton();
}

function validateName() {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z\u0400-\u04FF\s]{2,15}$/;
    if (regex.test(name)) {
        document.getElementById("name").style.color = "green";
        document.getElementById("name").nextElementSibling.innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("name").style.color = "red";
        document.getElementById("name").nextElementSibling.innerHTML = "Please, enter 2-15 characters";
        return false;
    }
}

function validateSurname() {
    var surname = document.getElementById("surname").value;
    var regex = /^[a-zA-Z\u0400-\u04FF\s]{2,15}$/;
    if (regex.test(surname)) {
        document.getElementById("surname").style.color = "green";
        document.getElementById("surname").nextElementSibling.innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("surname").style.color = "red";
        document.getElementById("surname").nextElementSibling.innerHTML = "Please, enter 2-20 characters";
        return false;
    }
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\+?[0-9]{4,15}$/;
    if (regex.test(phone)) {
        document.getElementById("phone").style.color = "green";
        document.getElementById("phone").nextElementSibling.innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("phone").style.color = "red";
        document.getElementById("phone").nextElementSibling.innerHTML = "Invalid phone number";
        return false;
    }
}

function validateCity() {
    var city = document.getElementById("city").value;
    var regex = /^[a-zA-Z\u0400-\u04FF\s]{2,2000}$/;
    if (regex.test(city)) {
        document.getElementById("city").style.color = "green";
        document.getElementById("city").nextElementSibling.innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("city").style.color = "red";
        document.getElementById("city").nextElementSibling.innerHTML = "Please enter a valid address";
        return false;
    }
}

function validateDateTime() {
    var dateTime = document.getElementById("date-time").value;
    if (dateTime !== '') {
        document.getElementById("date-time").style.color = "green";
        document.getElementById("date-time").nextElementSibling.innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("date-time").style.color = "red";
        document.getElementById("date-time").nextElementSibling.innerHTML = "Please select a date and time";
        return false;
    }
}

function validateQuantity() {
    var quantity = document.getElementById("quantity").value;
    if (quantity >= 1) {
        document.getElementById("quantity").style.color = "green";
        document.getElementById("quantity").nextElementSibling.innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("quantity").style.color = "red";
        document.getElementById("quantity").nextElementSibling.innerHTML = "Quantity must be at least 1";
        return false;
    }
}