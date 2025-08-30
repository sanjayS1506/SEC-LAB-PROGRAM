function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const operation = (document.getElementById("operation").value)
    let result;


switch(operation){
    //add
case "Add" :
       result = num1 + num2;
       break;
    
    //sub
case "Subraction" :
   result = num1 - num2;
   break;

case "Multiplication" :
   result = num1 * num2;
   break;

case "Division" :
    if(num2 === 0){
        result = "Invalid"
    }
    else{
        result = num1 / num2
    }
    break;
default :
        result = "Invalid operation"
    
}
result = document.getElementById("result").innerText = "Result :" + result;


}
