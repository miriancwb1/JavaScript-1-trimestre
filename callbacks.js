const nomes = ["Mirian", "Matheus", "Eliel"];

nomes.forEach (function (nome){
    console.log (nome);
});

nomes.forEach((nome) => {
    console.log (nome);
});

function imprimirNome(nome){
    console.log (nome);
};

nomes.forEach(imprimirNome);