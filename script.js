console.log("Teste");

function calcular() {
  const sexo = document.querySelector("input[name=sexo]:checked").value;
  console.log(sexo);
  const altura = document.getElementById("altura").value;
  console.log(altura);
  const peso = document.getElementById("peso").value;
  console.log(peso);
  document.querySelector(".alerta").classList.remove("ativa");

  if ((!peso && !altura) || (altura < 0 && peso < 0)) {
    document.querySelector(".alerta p").innerHTML =
      "Os campos Peso e Altura não estão preenhcidos";
    document.querySelector(".alerta").classList.add("ativa");
  } else if (!peso || peso < 0) {
    document.querySelector(".alerta p").innerHTML =
      "O campo Peso não está preenhcido";
    document.querySelector(".alerta").classList.add("ativa");
  } else if (!altura || altura < 0) {
    document.querySelector(".alerta p").innerHTML =
      "O campo Altura não está preenhcido";
    document.querySelector(".alerta").classList.add("ativa");
  } else {
    const imc = peso / (altura / 100) ** 2;
    console.log(imc.toFixed(0));
    document.getElementById("numero").innerHTML = imc.toFixed(0);
    document.querySelector(".alerta").classList.remove("ativa");
    document.querySelector(".resultado").classList.add("ativa");

    if (imc <= 16) {
      document.getElementById("descricao").innerHTML = "Magreza grave";
      document.getElementById("numero").style.color = "#B22222";
      document.getElementById("descricao").style.color = "#B22222";
    }
    if (imc <= 17 && imc > 16) {
      document.getElementById("descricao").innerHTML = "Magreza moderada";
      document.getElementById("numero").style.color = "#FF6347";
      document.getElementById("descricao").style.color = "#FF6347";
    }
    if (imc < 18.5 && imc > 17) {
      document.getElementById("descricao").innerHTML = "Abaixo do peso";
      document.getElementById("numero").style.color = "wheat";
      document.getElementById("descricao").style.color = "wheat";
    }
    if (imc >= 18.5 && imc < 25) {
      document.getElementById("descricao").innerHTML = "Peso normal";
      document.getElementById("numero").style.color = "#2E8B57";
      document.getElementById("descricao").style.color = "#2E8B57";
    }
    if (imc >= 25 && imc < 30) {
      document.getElementById("descricao").innerHTML = "Sobrepeso";
      document.getElementById("numero").style.color = "wheat";
      document.getElementById("descricao").style.color = "wheat";
    }
    if (imc >= 30 && imc < 35) {
      document.getElementById("descricao").innerHTML = "Obesidade Grau I";
      document.getElementById("numero").style.color = "#FA8072";
      document.getElementById("descricao").style.color = "#FA8072";
    }
    if (imc >= 35 && imc < 40) {
      document.getElementById("descricao").innerHTML =
        "Obesidade Grau II (severa)";
      document.getElementById("numero").style.color = "#FF6347";
      document.getElementById("descricao").style.color = "#FF6347";
    }
    if (imc >= 40) {
      document.getElementById("descricao").innerHTML =
        "Obesidade Grau III (mórbida)";
      document.getElementById("numero").style.color = "#B22222";
      document.getElementById("descricao").style.color = "#B22222";
    }
  }
}
