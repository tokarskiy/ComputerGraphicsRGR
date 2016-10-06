function buttonClick() {
    var right = ["a12", "a24", "a32", "a41", "a53", "a62", "a74", "a83", "a94"];
    var score = 0;

    right.forEach(x => {
        var elem = document.getElementById(x);
        //alert(JSON.stringify(elem));
        if (elem.checked)
        {
            score++;
        }
    });
    document.getElementById("testResult").innerHTML = "Результат: " + resultMessage(score);
}

function resultMessage(score) {
    if (score <= 3)
    {
        return "Набрані бали: " + score + ". Оцінка: незадовільно.";
    }
    if (score <= 6)
    {
        return "Набрані бали: " + score + ". Оцінка: задовільно.";
    }
    if (score < 9)
    {
        return "Набрані бали: " + score + ". Оцінка: добре.";
    }
    return "Ви відповіли правильно на всі питання! ";
}