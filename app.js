const buttons = document.querySelectorAll('button');
const input = document.querySelector('#display');
// console.log(buttons);
for(const button of buttons){
    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;
        if(buttonText==='C') input.value='';
        else if(buttonText==='x') input.value+='*';
        else if(buttonText==='⌫') {
            let exp = input.value;
            input.value=exp.substring(0,input.value.length-1);
        }
        else if(buttonText=='=') {
            try{
                input.value=eval(input.value);
            } catch(e){
                input.value='Invalid Expression'
            }
        }
        else{
            input.value+=buttonText;
        }
    })
}