var accordeonButtons = document.getElementsByClassName("accordeon__button");

//пишемо подію під час кліку на кнопки - виклик функції toggle
for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
}

//пишемо функцію
function toggleItems() {

    // змінна кнопки(актуальна) з класом
    var itemClass = this.className;

    // додаємо всім кнопкам клас close
    for (var i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].className = "accordeon__button closed";
    }

    // закриваємо всі відкриті панелі з текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
        pannels[z].style.maxHeight = 0;
    }

    // перевірка. якщо кнопка має клас close при натисканні
    // до актуальної (натиснутої) кнопки додаємо активний клас
    // а панелі - яка знаходиться поруч задаємо висоту
    if (itemClass == "accordeon__button closed") {
        this.className = "accordeon__button activeA";
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

}