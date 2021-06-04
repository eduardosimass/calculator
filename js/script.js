/*para selecionar todos os botões*/
const buttons = document.querySelectorAll('button');
/*para selecionar texto do input*/
const display = document.querySelector('.display')


/*para adicionar um evento de listner*/
buttons.forEach(function(button){
  button.addEventListener('click', calculate)
});


/*para calcular os valores*/
function calculate (event){
  const clickedButtonValue = event.target.value;

if(clickedButtonValue === '='){
  if(display.value !== ''){
    display.value = eval(display.value);
  }
}else if (clickedButtonValue === 'C'){
  display.value ='';

}else {
  display.value += clickedButtonValue;
}
}

function Theme(){
  var element = document.body
  element.classList.toggle("light-mode"); 
}