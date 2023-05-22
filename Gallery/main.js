const paths = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
const description = ['Autumn road','Night sky','Snowy mountains','Landing plane', 'Spongebob']
var index = 0;

function thum_click_text(id){
    document.getElementById("displayText").innerText = description[id];
}


function thum_click(img){
    var display = document.getElementById("displayImage");
    display.src = img.src;
    thum_click_text(img.id)
}


function setThum(){
    const ul = document.getElementById("list");
    for (var i = 0;i<paths.length;i++){
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.id = i;
        img.src = paths[i];
        img.onclick = function(){thum_click(this)}
        li.appendChild(img);
        ul.appendChild(li);
    }
}


function prevImg(){
    var img = document.getElementById("displayImage");
    index -= 1;
    if (index < 0){
        index = paths.length - 1;
    }
    img.src = paths[index];
    document.getElementById("displayText").innerText = description[index];
}


function nextImg(){
    var img = document.getElementById("displayImage");
    index += 1;
    if (index >= paths.length){
        index = 0;
    }
    img.src = paths[index];
    document.getElementById("displayText").innerText = description[index];
}    
