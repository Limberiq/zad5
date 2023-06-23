function checkNumber(){
    let number = document.getElementById("number").value;
    
    if(number > 5){
      alert("Поздравляем! Вы ввели правильное число: " + number);
    }else if(number !== ""){
      let newNumber = confirm("Вы ввели неправильное число. Введите число больше 5: ");
      checkNumber(newNumber);
    }
  }