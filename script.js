$(document).ready(onReady)

function onReady() {
    
    $('#generateBtn').on('click', clickBtn)

}

let clickNum = 1

function clickBtn() {


    

    // Append a div and inside the div have a <p> that is able to change number every
    // time the generate button is clicked.
    $('body').append(`
    <div id = "needGoRed" style = "background-color: red;">

        <button id ="yellowBtn">Yellow</button>
        <button id ="DeleteBtn">Delete</button>
        <p class = "numHere"> <span id="clickNum">${clickNum}</span>
    </div>

    `);

    // Could not get this to work
    // $('#needGoRed').addClass("backRed");
    // $('#needGoRed').css("background-color", "red")

    clickNum++

}

function goYellow() {
    
}