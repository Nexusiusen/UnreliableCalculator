let number ="";
let operator ="";
let a ="";
let answer=false;

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) 
  {
    return;
  }

  // Get the ID of the clicked button
  const buttonId = event.target.id;

  // Log the button ID to the console
  console.log(`Button clicked: ${buttonId}`);
 
if (buttonId == "+" || buttonId == "-"||buttonId == "*"||buttonId=="/")
{
	operator=buttonId;

  if (a =="")
  {
    a=number;
    number ="";
  }

  else if(number!="")
  {
    a=calculate(a,number,operator)
    number ="";
  }
}

else if (buttonId == "=")
{
  if(operator !="")
  {
    a=calculate(a,number,operator)
    number="";
    operator="";
    answer=true;

    
  }
} 

else if (buttonId == "C")
{
  number="";
  operator="";
  a="";
}

else
{
  if (answer==true && operator=="")
  {
    a="";
    answer=false;
  }
  number +=buttonId;
}
  


function calculate(num1,num2,operator)
{
  //da funny
  const negOrPos = () => Math.floor(Math.random() * 2) === 1 ? -1 : 1;
  const modifier = (Math.floor(Math.random() * 5)) * negOrPos();
  const truthGenerator = () => Math.floor(Math.random() * 5) === 3 ? "false" : "truth";
  const truth = document.getElementById('truth');
    if (truth) 
    {
      truth.textContent = truthGenerator();
    }
    //end of funny

  switch (operator)
  {
  case "+":
    return (parseInt(a)+parseInt(number))+modifier;
    break;
  case "-":
    return(parseInt(a)-parseInt(number))+modifier;
    break;
  case "*":
    return (parseInt(a)*parseInt(number))+modifier;
    break;
  case "/":
    return (parseInt(a)/parseInt(number))+modifier;
    break;
  }
}

const display = document.getElementById('display');
  if (display) {
    display.textContent = a + operator + number;
  }
});