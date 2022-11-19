var entrada = require('readline-sync')

let palavraUsuario = entrada.question('Informe uma palavra sem numeros e caracteres especiais: ');

console.log('Sua palavra criptografada: ' + criptografarPalavra(palavraUsuario));

function criptografarPalavra(palavra) {
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't',
     'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5'];
    let palavraCriptografada = '';

     for (let index = 0; index < palavra.length; index++) {
        const letra = palavra[index];
        const letraCriptografada = alfabeto[alfabeto.indexOf(letra) + 5];
        palavraCriptografada += letraCriptografada;
    }
    return palavraCriptografada;
}