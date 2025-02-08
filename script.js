function selectOption(option){
    if(option == 'yes'){
        document.getElementById('question').style.display = 'none';
        displayCatSilly();
    } else if (option == 'no'){
        document.getElementById('no-button').innerText = 'Really?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid!!');
    }
}

function displayCat(){
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatSilly(){
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catSillyImg = new Image();
    catSilly.src = 'cat-silly.gif';
    catSillyImg.onload = function() {
        imageContainer.appendChild(catSillyImg);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();