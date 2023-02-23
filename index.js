// console.log('hello')
// console.log('I added javascript')
function javascriptLoaded(){
    console.log('loaded javascript')
}
function executeOnDocumentReady() {
    console.log( "the document ready!" );
    let myTitle = $(".titleClass")[0].innerHTML
    console.log(myTitle);
}
$(document).ready(executeOnDocumentReady);