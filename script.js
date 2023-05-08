$(document).ready(onReady)

function onReady() {
    
    $('#generateBtn').on('click', appendDiv)

}

let clickNum = $('#clickNum')

function appendDiv() {

    $('#divGoHere').append(`
    <div>
        <p class = "numHere"> <span id="clickNum">1</span>
    </div>

    `)
}