    function toKhmerNumber(num) {
      const khmerDigits = ['០','១','២','៣','៤','៥','៦','៧','៨','៩'];
      return num.toString().split('').map(digit => khmerDigits[parseInt(digit)]).join('');
    }


    function generateNumbers() {
      var output = document.getElementById("output");
      var diceImage = document.getElementById("diceImage");
      diceImage.classList.remove("obb");
      void diceImage.offsetWidth; 
      diceImage.classList.add("obb");
      var diceThrow = Math.floor(Math.random() * 6) + 1;
      output.innerHTML = "លេខ ឡុកឡាក់: " + toKhmerNumber(diceThrow);
      output.style.color = "#FFB303";
      output.style.fontSize = "40px";
      output.style.fontFamily = "Khmer OS Muol Light";
      output.style.textShadow = "2px 2px 5px black"; 
      
      diceImage.src = "" + diceThrow + ".png";
    }
        generateNumbers();