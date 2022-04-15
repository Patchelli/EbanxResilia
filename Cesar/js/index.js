document.getElementById("btn-enviar").addEventListener("click", start);

function start(event) {
  event.preventDefault();
  const op = document.querySelector('input[name="cod"]:checked').value;
  console.log(op);
  const str = document.getElementById("txt").value;
  const chave = parseInt(document.getElementById("chave").value || 0);

  const item = document.querySelector('input[name="op"]:checked').value;
  console.log(item);
  if (op == "1") {
    if (chave == 0) {
      alert("Defina uma chave!")
    }
    if (item == "1") {
      const codificar = Codificar(chave, str);
      document.getElementById("txt").value = codificar;
    } else {
      const decodificar = Decodificar(chave, str);
      document.getElementById("txt").value = decodificar;
    }
  } else {
    if (item == "1") {
      const codificar = btoa(str);
      document.getElementById("txt").value = codificar;
    } else {
      const decodificar = atob(str);
      document.getElementById("txt").value = decodificar;
    }
  }
}

clear.addEventListener("click", function () {
  const textArea = document.getElementById("txt");
  textArea.value = "";
}, false);


function Codificar(offset, str) {
  let resultE = [];
  const isPositive = offset >= 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      const offsetTurn = isPositive ? -65 : 65;
      resultE.push(String.fromCharCode((str.charCodeAt(i) + offset + offsetTurn) % 26 + 65));
    } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      const offsetTurn = isPositive ? -97 : -19;
      resultE.push(String.fromCharCode((str.charCodeAt(i) + offset + offsetTurn) % 26 + 97));
    } else {
      resultE.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  return resultE.join("");
}

function Decodificar(offset, str) {
  let resultD = [];
  const isPositive = offset >= 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      const offsetTurn = isPositive ? 65 : -65;
      resultD.push(String.fromCharCode((str.charCodeAt(i) - offset + offsetTurn) % 26 + 65));
    } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      resultD.push(String.fromCharCode((str.charCodeAt(i) - offset - 19) % 26 + 97));
    } else {
      resultD.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  return resultD.join("");
}

// function meuMenuToggle() {
//   var x = document.getElementById("chave");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "none";
//   }
// }

// cifra.addEventListener('click' , function(event){
//   event.preventDefault()

//   incrementar.innerHTML = `<label> forneça incremento cifra </label>
// <input id="texto1" type="number">`   
// })
id != '' && newSrc != '' && newSrc != 'invalidUrl'?img.src = newSrc:"";
