var usuarios = ["joao@americanas.br", "karen@accenture.com", "manoel@tap.pt", "alice@submarino.br", "paul@times.com", "cesar@porto_digital.br"]

for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];
    const nomeFuncionario = extrairNomeFuncionario(usuario);
    const nomeEmpresa = extrairNomeEmpresa(usuario);
    const nomePais = extrairNomePais(usuario);

    console.log(`O usuário ${nomeFuncionario} trabalha na empresa ${nomeEmpresa} e reside em/no ${nomePais}`)
}

function extrairNomeFuncionario(email) {
    const indexArroba = email.indexOf('@');

    const nomeFuncionario = email.substring(0, indexArroba);
    
    return colocarPrimeiraLetraMaiuscula(nomeFuncionario);
};

function extrairNomeEmpresa(email) {
    const indexArroba = email.indexOf('@') + 1;
    const indexPonto = email.indexOf('.');

    const nomeEmpresa = email.substring(indexArroba, indexPonto);

    return colocarPrimeiraLetraMaiuscula(nomeEmpresa);
};

function extrairNomePais(email) {
    let nomePais = '';

    if (email.includes('.br')) {
        nomePais = 'Brasil';
    } else if (email.includes('.pt')) {
        nomePais = 'Portugal';
    } else {
        nomePais = 'Estados Unidos';
    }
    return nomePais;
};

function colocarPrimeiraLetraMaiuscula(palavra) {
    return palavra.substring(0,1).toUpperCase() + palavra.substring(1);
}