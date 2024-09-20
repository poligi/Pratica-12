const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25
    },
]

/* 1. Imprima no console a quantidade de pessoas Total. */

console.log(`Total de pessoas: ${data.length}`)

/* 2. Imprima no console a quantidade de pessoas pessoas do sexo
Feminino. */

const mulheres = data.filter(pessoa => pessoa.sexo === 'F').length

console.log(`Total de mulheres: ${mulheres}`)

/* 3. Imprima no console a soma do salário de todas as pessoas. */

const somaTodosSalarios = data.reduce((acumulador, pessoa) => acumulador + pessoa.salario, 0)

console.log(`Soma de todos os salários: ${somaTodosSalarios}`)

/*O método reduce percorre o array pessoas, somando os salários. 
O primeiro argumento da função reduce é o acumulador, que começa com o 
valor inicial 0, e para cada pessoa, soma o valor do campo salario. 0 é o
valor inicial do acumulador, começa com 0 e vai somando. */

/* 4. Imprima no console a média do salário de todas as pessoas. */

const media = somaTodosSalarios / data.length

console.log(`Média salarial: ${media.toFixed(2)}`)

/* 5. Imprima no console a soma do salário de todos as pessoas do sexo
Masculino */

let somaSalarioHomens = 0

for (let pessoa of data) {
    if (pessoa.sexo === 'M') {
        somaSalarioHomens += pessoa.salario
    }
}

console.log(`A soma do salário de todos os homens é de: ${somaSalarioHomens}`)

/* 6. Imprima no console a média do salário de todas as pessoas do sexo
Masculino */

const homens = data.filter(pessoa => pessoa.sexo === 'M')
const totalHomens = homens.length

somaSalarioHomens = homens.reduce((acumulador, pessoa) => acumulador + pessoa.salario, 0)

let mediaSalarioHomens = somaSalarioHomens / totalHomens

console.log(`A média salarial dos homens é de: ${mediaSalarioHomens.toFixed(2)}`)


/* 7. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso. */

const supSeteMil = data.some(pessoa => pessoa.salario > 7000);

console.log(supSeteMil);

/* 8. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'. */

const eva = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade')
console.log(eva)

/* 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva". */

const silva = data.filter(pessoa => pessoa.nome.includes('Silva'))
console.log(silva)

//O método .includes() verifica se a string "Silva" está presente no campo nome.

/* 10. Imprima os nomes utilizando o MAP */

const nomes = data.map(pessoa => pessoa.nome)
console.log(nomes)