/*jslint browser */

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const form = document.getElementById("calc-form");
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const calcButton = document.getElementById("calc-button");
    const errorBox = document.getElementById("error");
    const resultBox = document.getElementById("result");

    // Только целое число от 1, без пробелов, букв и других символов
    const quantityPattern = /^[1-9][0-9]*$/;

    function showError(message) {
        resultBox.textContent = "";
        errorBox.textContent = message;
    }

    function showResult(total) {
        errorBox.textContent = "";
        resultBox.textContent = "Стоимость заказа: " +
                total.toLocaleString("ru-RU") + " ₽";
    }

    function calculate() {
        const quantityText = quantityInput.value.trim();

        if (!quantityPattern.test(quantityText)) {
            showError(
                "Введите количество цифрами: целое число от 1, " +
                "без букв, пробелов и других символов."
            );
            return;
        }

        const quantity = parseInt(quantityText, 10);
        const price = parseInt(productSelect.value, 10);

        showResult(price * quantity);
    }

    calcButton.addEventListener("click", calculate);

    // Enter в поле ввода не должен перезагружать страницу
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        calculate();
    });
});
