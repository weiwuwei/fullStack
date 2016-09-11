var wordToDisplay = ["_", "_", "_", "_", "_", "_"];
var wordString = wordToDisplay.join(" ");
document.getElementById("word").innerHTML = wordString;
var img = document.getElementById("myImage");
console.log(img);
var words = ["string", "integer"];
var pickedWord = words[Math.floor(Math.random() * words.length)];
console.log(pickedWord);
var livesleft = 6;
var flag;
var wordsChar = pickedWord.split('');
function resetForm() {
    console.log(document.getElementById("myForm"));
}
document.getElementById("search").addEventListener("click", check);
function check(e) {
    e.preventDefault();
    var inputField = document.getElementById("guess");
    var inputValue = inputField.value;
    console.log(inputValue);
    for (var i = 0; i < pickedWord.length; i++) {
        console.log(inputValue == wordsChar[i]);
        if (inputValue == wordsChar[i]) {
            flag = true;
            for (var i = 0; i < pickedWord.length; i++) {
                if (inputValue == wordsChar[i]) {
                    wordToDisplay[i] = inputValue;
                    var wordString = wordToDisplay.join(" ");
                    document.getElementById("word").innerHTML = wordString;
                }
            }
            break;
        }
        else {
            flag = false;
        }
    }
    if (!flag) {
        livesleft--;
    }
    console.log(livesleft);
    if (livesleft == 5) {
        var left = document.getElementById("live");
        left.innerHTML = "5";
        img.
            setAttribute("src", "http://i382.photobucket.com/albums/oo268/Espeon200/hangman/stage2.png");
    }
    if (livesleft == 4) {
        var left = document.getElementById("live");
        left.innerHTML = "4";
        img.setAttribute("src", "http://i382.photobucket.com/albums/oo268/Espeon200/hangman/stage3.png");
    }
    if (livesleft == 3) {
        var left = document.getElementById("live");
        left.innerHTML = "3";
        img.setAttribute("src", "http://i382.photobucket.com/albums/oo268/Espeon200/hangman/stage4.png");
    }
    if (livesleft == 2) {
        var left = document.getElementById("live");
        left.innerHTML = "2";
        img.setAttribute("src", "http://i382.photobucket.com/albums/oo268/Espeon200/hangman/stage5.png");
    }
    if (livesleft == 1) {
        var left = document.getElementById("live");
        left.innerHTML = "1";
        img.setAttribute("src", "http://i382.photobucket.com/albums/oo268/Espeon200/hangman/stage9.png");
        alert("You are dead! The right ansure is : " + pickedWord);
    }
    inputField.value = "";
}
