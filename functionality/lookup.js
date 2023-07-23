// let tdata ;

const picdetail = document.getElementById("picdetail");
// console.log(picdetail);

// console.log(localStorage.getItem("detail"));
function movehome(){
    window.open('./../htmlComponents/home.html',"_self");
}
window.onload = function(){
    data = localStorage.getItem("detail");
    data = JSON.parse(data);
    picdetail.innerHTML = "";

    imagepart = document.createElement("div");
    imagepart.className = "imagepart";
    img = document.createElement("img");
    // 
    

    if(data["Poster"]!="N/A")
    {
        img.src = data["Poster"];
    }
    else
    {
        img.src = "https://s3.amazonaws.com/ionic-marketplace/omdb-search/icon.png";
    }
    imagepart.appendChild(img);
    picdetail.appendChild(imagepart);

    detailpart = document.createElement("div");
    detailpart.className = "detailpart";

    imgdetail = document.createElement("p");
    imgdetail.className = "imgdetail";
    imgdetail.innerHTML = data["Title"];
    detailpart.appendChild(imgdetail);


    metadata1 = document.createElement("p");
    metadata1.className = "metadetail";
    metadata1.innerHTML = data["Released"] + " | " + data["Genre"] + " | " + data["imdbRating"];
    detailpart.appendChild(metadata1);


    metadata2 = document.createElement("p");
    metadata2.className = "metadetail";
    metadata2.innerHTML =  "Plot : " + data["Plot"];
    detailpart.appendChild(metadata2);

    metadata3 = document.createElement("p");
    metadata3.className = "metadetail";
    metadata3.innerHTML =  "Language : " + data["Language"];
    detailpart.appendChild(metadata3);

    metadata4 = document.createElement("p");
    metadata4.className = "metadetail";
    metadata4.innerHTML =  "Actors : " + data["Actors"];
    detailpart.appendChild(metadata4);

    metadata5 = document.createElement("p");
    metadata5.className = "metadetail";
    metadata5.innerHTML =  "Director : " + data["Director"];
    detailpart.appendChild(metadata5);

    metadata6 = document.createElement("p");
    metadata6.className = "metadetail";
    metadata6.innerHTML =  "Writers : " + data["Writer"];
    detailpart.appendChild(metadata6);

    picdetail.appendChild(detailpart);
};
