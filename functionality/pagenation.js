const curpag = document.getElementById("pagenu");

function prevpage(){
    if(curpag.value<=1)
    {    
        return ;
    }
    else{
        pageNo = pageNo-1;
        const url = apiEnd + "s=" + title + "&" + "page=" + pageNo + "&"; 
        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error("Request failed");
            }
            return response.json();}).then((res)=>{
                curpag.value = pageNo; 
                console.log("working");
                viewer(res["Search"]);}).catch((error)=>{
                    console.log("Error:",error.message);});
    }
}
function nextpage(){
    const curpag = document.getElementById("pagenu");
    if(curpag.value>=totalPage)
    {    
        return ;
    }
    else{
        pageNo = pageNo+1;
        const url = apiEnd + "s=" + title + "&" + "page=" + pageNo + "&"; 
        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error("Request failed");
            }
            return response.json();}).then((res)=>{
                curpag.value = pageNo; 
                console.log("working");
                viewer(res["Search"]);}).catch((error)=>{
                    console.log("Error:",error.message);});
    }
}

curpag.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        if(totalPage===0)
        {
            curpag.value = 0;
            pageNo = curpag.value;
            return ;
        }
        if(curpag.value<1)
        {
            curpag.value = 1;
        }
        if(curpag.value>totalPage)
        {
            curpag.value = totalPage;
        }
        pageNo = curpag.value;
        const url = apiEnd + "s=" + title + "&" + "page=" + pageNo + "&"; 
        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error("Request failed");
            }
            return response.json();}).then((res)=>{
                console.log("working");
                viewer(res["Search"]);}).catch((error)=>{
                    console.log("Error:",error.message);});
    }
});