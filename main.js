import menu from "readline-sync"; //Import readline

//Coleção de objetos
let valores_gerais = [
    { salario: 510.00, ipca: 5.91, ano: 2010 },
    { salario: 545.00, ipca: 6.50, ano: 2011 },
    { salario: 622.00, ipca: 5.84, ano: 2012 },
    { salario: 678.00, ipca: 5.91, ano: 2013 },
    { salario: 724.00, ipca: 6.41, ano: 2014 },
    { salario: 788.00, ipca: 10.67, ano: 2015 },
    { salario: 880.00, ipca: 6.29, ano: 2016 },
    { salario: 937.00, ipca: 2.95, ano: 2017 },
    { salario: 954.00, ipca: 3.75, ano: 2018 },
    { salario: 998.00, ipca: 4.31, ano: 2019 },
    { salario: 1045.00, ipca: 4.52, ano: 2020 }
];

//Menu
console.log(`Projeto missão 19: Aplicação que faz comparação entre salário x inflação \n`);
console.log(`Escolha uma das opções: \n`);
console.log(`1 - Listar os salários minímos de 2010 à 2020`);
console.log(`2 - Listar o índice IPCA de 2010 à 2020`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA \n`);

let menuQuestao = menu.question(`Digite o número referenta a informação desejada: `);
console.log(`\n`);

//condicional para execução
if (Number(menuQuestao) == 1) {
    for (let index of valores_gerais) {
        let valorSalario = index.salario;
        let valorAno = index.ano;

        console.log(`${`Ano: `.padEnd(30, "-")} ${valorAno}`);
        console.log(`${`Salário Mínimo: `.padEnd(30, "-")} R$ ${valorSalario.toFixed(2).replace(".", ",")}\n`);
    }

} else if (Number(menuQuestao) == 2) {
    
} else if (Number(menuQuestao) == 3) {
    
} else {
    
}