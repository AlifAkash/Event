const name='kuddus';
function add(num1, num2){
    window.result=num1+num2;
    console.log('Name inside', name);
    function double(num){
        return num*2;
    }
    const total=double(result);
    return total;
}
console.log('Name outside', name);
const sum=add(21,13);
console.log(sum);
console.log('Result outside', result);