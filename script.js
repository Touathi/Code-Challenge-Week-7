$(document).ready(onReady)

function onReady() {
    
    $('#generateBtn').on('click', clickBtn);
    $('#divGoHere').on('click', '.yellowBtn', clickYellow);
    $('#divGoHere').on('click', '.DeleteBtn', deleteBtn)
}

let clickNum = 1

function clickBtn() {


    

    // Append a div and inside the div have a <p> that is able to change number every
    // time the generate button is clicked.
    $('#divGoHere').append(`
    <div id = "changeColor" class = "backRed" >

        <button class ="yellowBtn">Yellow</button>
        <button class ="DeleteBtn">Delete</button>
        <p class = "numHere"> <span id="clickNum">${clickNum}</span>
    </div>

    `);

    // Could not get this to work
    
    clickNum++


}

// function addRed() {
//     $('#changeColor').addClass('backRed');
// }

function clickYellow() {
    
    $('#changeColor').addClass('goYellow')
}

function deleteBtn() {
    $(this).parent().remove();
}
// THis is working


// Some Reason I could not turn the other divs to yellow