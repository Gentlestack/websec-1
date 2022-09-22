let mathOperation = document.querySelector("#mathOperation");
let num1 = document.querySelector("#input1");
let num2 = document.querySelector("#input2");
let res = document.querySelector("#result");
5
function calculate() 
{
    if ((num1.value.length == 0) || (num2.value.length == 0))
    {
        alert("Запишите в поля ввода числа, над которыми вы хотели бы провести оперцию")
    }
    else
    {
        if (mathOperation.value == 1) 
        {
            res.innerHTML = Number(num1.value) + Number(num2.value);
        }
        if (mathOperation.value == 2) 
        {
            res.innerHTML =  Number(num1.value) - Number(num2.value);
        }
        if (mathOperation.value == 3) 
        {
            res.innerHTML =  Number(num1.value) * Number(num2.value);
        }
        if (mathOperation.value == 4) 
        {
            if (Number(num2.value) === 0) 
            {
                alert("На 0 делить нельзя");
            }
            else
            {
                res.innerHTML =  Number(num1.value) / Number(num2.value);
            }
       }
    }
}