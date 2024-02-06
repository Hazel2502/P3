function calcularVelocidad() {
    const distancia = document.getElementById('distancia').value;
    const tiempo = document.getElementById('tiempo').value;
  
    const velocidadMetrosSegundos = (distancia * 1000) / (tiempo * 60);
    
    document.getElementById('resultadoVelocidad').innerText = `Velocidad: ${velocidadMetrosSegundos.toFixed(2)} m/s`;
  }
  
  function evaluarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
  
    if (lado1 === lado2 && lado2 === lado3) {
      document.getElementById('resultadoTriangulo').innerText = 'Triángulo Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      document.getElementById('resultadoTriangulo').innerText = 'Triángulo Isósceles';
    } else {
      document.getElementById('resultadoTriangulo').innerText = 'Triángulo Escaleno';
    }
  }
  
  function realizarOperacion(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    let resultado;
    switch (operacion) {
      case 'suma':
        resultado = num1 + num2;
        break;
      case 'resta':
        resultado = num1 - num2;
        break;
      case 'multiplicacion':
        resultado = num1 * num2;
        break;
      case 'division':
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          alert('Error: División por cero.');
          return;
        }
        break;
      default:
        alert('Operación no válida.');
        return;
    }
  
    document.getElementById('resultadoCalculadora').innerText = `Resultado: ${resultado.toFixed(2)}`;
  }
  
  function esPrimo() {
    const numero = parseInt(document.getElementById('numeroPrimo').value);
  
    if (numero <= 1) {
      document.getElementById('resultadoPrimo').innerText = 'El número no es primo';
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        document.getElementById('resultadoPrimo').innerText = 'El número no es primo';
        return;
      }
    }
  
    document.getElementById('resultadoPrimo').innerText = 'El número es primo';
  }
  