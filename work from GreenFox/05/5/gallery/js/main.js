var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
    showImg(indexValue +=e);
}

function showImg(e) {
    var i;
    const img = document.querySelectorAll('.content img');
    if(e > img.length) {
        indexValue = 1
    }
    if(e < 1) {
        indexValue = img.length
    }
    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}


function displayThumbnail(id){
    const img = document.querySelectorAll('.content img');

    var idpicture = document.getElementById(id);

    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    idpicture.style.display  = "block";
}
