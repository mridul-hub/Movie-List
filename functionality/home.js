var apiEnd = 'https://www.omdbapi.com/?apikey=c348d59a&'
var title = "harry";
var pageNo = 1;
var totalPage = 86;
// import "./../functionality/global";

// let tdata;
fetch('https://www.omdbapi.com/?s=harry&apikey=c348d59a&').then((response)=>{
    if(!response.ok){
        throw new Error("Request failed");
    }
    return response.json();
}).then((res)=>{
    console.log("working");
    viewer(res["Search"]);
    curpag.value = 1;
}).catch((error)=>{
    console.log("Error:",error.message);    
});

function viewer(data){
    var length = data.length;
    var j = 0;
    let mcontent = document.createElement("div");
    const maincontentContainer = document.getElementById("main-contentContainer");
    maincontentContainer.innerHTML = "";
    mcontent.className = "main-content";
    for(var i =0;i<Math.ceil(length/2);i++)
    {
        let contentcolumn = document.createElement("div");
        contentcolumn.className = "contentcolumn";
        var cur =0;
        while(j<length&&cur!=2)
        {
            let datacontent = document.createElement("div");
            datacontent.className = "datacontent";
            datacontent.id = data[j]["imdbID"]
            let img = document.createElement("img");
            if(data[j]["Poster"]!="N/A")
            {
                img.src = data[j]["Poster"];
            }
            else
            {
                img.src = "https://s3.amazonaws.com/ionic-marketplace/omdb-search/icon.png";
            }
            datacontent.appendChild(img);
            let p = document.createElement("p");
            p.innerHTML = data[j]["Title"];
            j = j+1;
            cur = cur + 1;
            datacontent.appendChild(p);
            contentcolumn.appendChild(datacontent);
        }
        mcontent.appendChild(contentcolumn);
    }
    maincontentContainer.appendChild(mcontent);
    return 0;
}

const searcicon= document.getElementById("searcicon");
const srcbox = document.getElementById("srcbox");

searcicon.addEventListener('click',(e)=>{
    const url = apiEnd + "s=" + srcbox.value + "&" ;
    fetch(url).then((response)=>{
        if(!response.ok){
                throw new Error("Request failed");
            }
            return response.json();}).then((res)=>{
                pageNo = 1;
                curpag.value = 1;
                title = srcbox.value;
                srcbox.value = "";
                totalPage = Math.ceil(Number(res["totalResults"])/10);
                viewer(res["Search"]);}).catch((error)=>{
                    homerevoke();
                console.log("Error:",error.message);});
});

function homerevoke(){
    srcbox.value = "";
    title = "harry";
    pageNo = 1;
    const url = apiEnd + "s=" + title + "&" ;
    fetch(url).then((response)=>{
        if(!response.ok){
                throw new Error("Request failed");
            }
            return response.json();}).then((res)=>{
                curpag.value = 1;
                totalPage = Math.ceil(Number(res["totalResults"])/10);
                viewer(res["Search"]);}).catch((error)=>{
                console.log("Error:",error.message);});
}

// console.log(tdata);
let tdata;
document.body.addEventListener('click',(e)=>{
    
    if(e.target.parentElement.className === 'datacontent')
    {   
        imdbid = e.target.parentElement.id;     
        url = 'https://www.omdbapi.com/?apikey=c348d59a&' + "i=" + imdbid + "&";
        fetch(url).then((response)=>{
            if(!response.ok){
                    throw new Error("Request failed");
                }
                return response.json();}).then((res)=>{
                    tdata = res;
                    localStorage.clear();
                    localStorage.setItem("detail",JSON.stringify(res));
                sameTab();}).catch((error)=>{
                    console.log("Error:",error.message);});
    }
})

function sameTab(){
    var eve =  window.open('./../htmlComponents/lookup.html',"_self");
}
