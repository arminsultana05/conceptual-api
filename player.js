const searchPlayer = () => {
    const inputField = document.getElementById('input-player')
    const errorMassage = document.getElementById('error-massage')
    const inputText = inputField.value;
    inputField.value = '';
    if (inputText == '' || typeof(inputText) == 'number') {
        errorMassage.innerText = 'Please give a player name'
    } else {


    }



}