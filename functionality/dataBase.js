let db;
let openRequest = indexedDB.open("OMDb");

openRequest.addEventListener("success",(e)=>{
    console.log("DB Success");
    db = openRequest.result;
})
openRequest.addEventListener("error",(e)=>{
    console.log("DB error");
})
openRequest.addEventListener("upgradeneeded",(e)=>{
    console.log("upgrading");
    db.createObjectStore("data",{ keyPath:"id" });
    db = openRequest.result;
})