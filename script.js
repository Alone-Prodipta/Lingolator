let string = "";
let buttons = document.querySelectorAll(".keys");
Array.from(buttons).forEach((keys) => {
    keys.addEventListener("click", (e) => {
        if (e.target) 
        {
            val= e.target.innerHTML;
            if(val== "=")
                {
                    string= eval(string);
                    string= string+ val;
                    document.querySelector("input").value= string;
                }
                else
                {
                    console.log(val);
                    string= string + val;
                    document.querySelector("input").value= string;
                }
            if(val!="DEL"&&val!="AC"&&val!="="&&val!="%")
            {
                console.log(val);
                // if(val=="+")
                // {
                //     string = string + "+";
                //     document.querySelector("input").value = string;
                // }
                string = string + val;
                document.querySelector("input").value = string;
            }
            if(val=="AC")
            {
                string = "";
                document.querySelector("input").value = string;
            }
            if(val=="DEL")
            {
                string = string.slice(0,-1);
                document.querySelector("input").value = string;
            }
            
                
                




        }
    });
});
