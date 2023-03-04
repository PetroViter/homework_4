const select = prompt('Select an action +-/*');
const num1 = +prompt('Enter first number');
const num2 = +prompt ('Enter second number');
let results = null;


switch (select) {
    case '+':
        results = num1 + num2;
        alert(num1+'+'+num2+'='+results);
        break;

    case '-':
        results = num1 - num2;
        alert(num1+'-'+num2+'='+results);
        break;

    case '/':
        results = num1 / num2;
        alert(num1+'/'+num2+'='+results);
        break;

    case '*':
        results = num1 * num2;
        alert(num1+'*'+num2+'='+results);
        break;
}