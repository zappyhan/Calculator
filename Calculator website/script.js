const display = document.getElementById('screen')

function displayInput(input)  {
    display.value += input;
}
 
function clearDisplay() {
    display.value = ''
}

function calculate (){
   try {
    display.value = eval(display.value)}
    catch {
        display.value = 'Error',
        setTimeout(clearDisplay, 1000);
        
    }

}