let num = Number(prompt('Digite um número: '))
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto')

numeroTitulo.innerHTML = num;

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é: ${num ** 0.5} </p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>é NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)} </p>`;






