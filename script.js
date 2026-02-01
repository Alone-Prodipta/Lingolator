let string=" ";
let buttons= document.querySelectorAll(".keys");
Array.from(buttons).forEach((keys)=>{
    keys.addEventListener("click",(e)=>{
        if(e.target) 
        {
            console.log(e.target.value);
            str= str+ e.target.innerHTML;
            document.querySelector("input").value= str;
        }
    });
});
