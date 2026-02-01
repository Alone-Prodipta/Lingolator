let string = '';
let buttons = document.querySelectorAll(".keys");
Array.from(buttons).forEach((keys) => {
    keys.addEventListener("click", (e) => {
        let val= e.target.innerText;
        if(val == '=')
        {
            string= eval(string);
            document.querySelector(".count").value= string;
        }
        else
        {
            switch(val) 
            {
                case 'AC':
                    string = "";
                    document.querySelector(".count").value = string;
                    break;
                case 'DEL':
                    string = string.substring(0, string.length - 1);
                    document.querySelector(".count").value = string;
                    break;
                case '.':
                    string += '.';
                    document.querySelector(".count").value = string;
                    break;
                case '%':
                    string += '/100';
                    document.querySelector(".count").value = string;
                    break;
                case '*':
                    string += '*';
                    document.querySelector(".count").value = string;
                    break;
                case '/':
                    string += '/';
                    document.querySelector(".count").value = string;
                    break;
                case '+':
                    string += '+';
                    document.querySelector(".count").value = string;
                    break;
                case '-':
                    string += '-';
                    document.querySelector(".count").value = string;
                    break;
                default:
                    string += val;
                    document.querySelector(".count").value = string;
                    console.log(val);
            }
        }          
    });
});
