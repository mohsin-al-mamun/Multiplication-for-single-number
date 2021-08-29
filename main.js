// DOM Nodes here................

let Button = document.getElementById("btn");
let Number = document.getElementById("number");
let Refresh = document.getElementById("refresh");



// Event Listener section.........

Button.addEventListener("click", validate);
Refresh.addEventListener("click", reloadpage);




// Functions used in the Event Listeners....


        //This function is to do the main task.....
function validate(event){
    event.preventDefault();
    let Num = Number.value ;
    if(Num===''){alert("Plz Enter a number first..")} 
    else {
        // Button.style.visibility = "hidden";
        Refresh.style.visibility = "visible";
        let Num = Number.value ;
        // console.log( Number.value);
        let header = document.createElement("h3");
        header.innerHTML = `The Multiplication table of  <b >${ Num}</b>  is..`
        // console.log(header);
        document.getElementById("outputdiv").appendChild(header);
    
        for (let i=1; i<=10; i++){
            let product = Num* i
          let elem = document.createElement("p");
          elem.innerHTML = ` ${Num} X ${i} = ${product}`;
          document.getElementById("outputdiv").appendChild(elem);
    
    
        }
        window.scrollBy(0,document.body.scrollHeight);// This will scroll to the last table.
    }
   
}

// This function is to reload the page so that previous table vanises before the new one comes..


function reloadpage (event){
    event.preventDefault();
    Button.style.visibility = "visible";
    location.reload()  // This command reload the pages.
}
