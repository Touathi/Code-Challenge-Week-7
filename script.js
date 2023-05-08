$(document).ready(onReady)

function onReady() {
    
    $('#generateBtn').on('click', clickBtn);
    $('#yellowBtn').on('click', clickYellow);
    $('#divGoHere').on('click','.DeleteBtn', deleteBtn)
}

let clickNum = 1

function clickBtn() {


    

    // Append a div and inside the div have a <p> that is able to change number every
    // time the generate button is clicked.
    $('#divGoHere').append(`
    <div id = "changeColor" class = "backRed">

        <button class ="yellowBtn">Yellow</button>
        <button class ="DeleteBtn">Delete</button>
        <p class = "numHere"> <span id="clickNum">${clickNum}</span>
    </div>

    `);

    // Could not get this to work
    $('#changeColor').addClass('backRed');
//   style = "background-color: red;"

    clickNum++

}

function clickYellow() {
    
    $('#changeColor').changeClass('goYellow')
}

function deleteBtn() {
    $(this).parent().remove();
}
// THis is working