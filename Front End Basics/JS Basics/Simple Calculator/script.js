function handleOnclick(){
        let num1=parseInt(document.getElementById('num1').value);
        let num2=parseInt(document.getElementById('num2').value);
        let op=document.getElementById('op').value;
        console.log('The Calculation');
        let res= document.getElementsByTagName('p')[0];
        switch(op){
            case '+':
                res.textContent=`The Sum of ${num1}
                and ${num2} is ${num1+num2}`;
                break;

            case '-':
                res.textContent=`The Difference of ${num1}
                and ${num2} is ${num1-num2}`;
                break;

            case '*':
                res.textContent=`The Product of ${num1}
                and ${num2} is ${num1*num2}`;
                break;
            
            case '/':
                if(num2 != 0){
                res.textContent=`The Division of ${num1}
                and ${num2} is ${num1/num2}`;}
                
                else{
                    res.textContent=`The Division of ${num1}
                and ${num2} cannot be permormed`;
                }
                
                break;
            
            default:
                console.log('Wrong Input');
                break;
        }
    }