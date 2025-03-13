const soma = (a: number, b: number) => {
  console.log(a + b);
};

soma(2, 2);

let b: string = "b";
let c: number = 2;
let d: boolean = true;

let e: string | number = 2;

e = "Teste"; // Pode receber um valor númerico

let f: any = 2; // Recebe qualquer tipo

const num: number = 16;
if (num > 15) {
  console.log("Nuim maior que 15");
} else if (num === 15) {
  //no Typescript utiliza-se os === para confirmar valor e tipo, caso use == será levado em conta somente o tipo.
  console.log("Num é igual a 15");
} else {
  console.log("Num menor 15");
}

// Objeto literal, dependendo, pode substituir o if else
const typeUser = {
  admin: "Bem vindo admin",
  student: "Você é um estudante",
  viewer: "Você pode visualizar",
};

const user = "admin";
function validateUser(user: string) {
  //console.log(typeUser[user as keyof typeof typeUser]); //GATO
}

validateUser(user);

// Tipagem de Obj
interface Person {
  name: string;
  age: number;
  phone?: number; // A ? diz que a propriedade não é obrigatória, você pode inserir ou não.
}

const person: Person = {
  name: "Igor",
  age: 28,
  phone: 6199335551,
};

const anotherPerson = {
  name: "Aline",
  age: 99,
};

// Arrays           //Array<Person>
const arrayPerson: Person[] = [
    person,
    anotherPerson
];

// Array de números
const arrayNum: number[] = [
    1,2,3
]

// array de strings
const arrayString: Array<string> =[
    '1','2','3'
]


//Estrutura de repetição

//for
// i = estado inicial ; i < 5 = condição; i++ = Enquanto i < 5, ele vai repetir tudo que estiver dentro do FOR
for(let i = 0; i <5; i++){
    // console.log(i)
}

//while

let n = 2

while(n < 6){
    // console.log(n)
    n++
}

// Acessar arrays
const arrayNbr: number[] = [1,2,3,4]
const arrayStr: string[] = ['a','b','c','d']

// console.log(arrayNbr[0])
// console.log(arrayStr[0])
// console.log(arrayNbr.length)
// arrayStr.push('e')
// arrayNbr.pop() // retirar o último elemento do array
// console.log(arrayStr)


// Manipulando arrays           definindo cala elemento do array como num e depois pegando o num === 4
const searcNum = arrayNbr.find(num => num === 4) // buscar número = 4
// console.log(searcNum)

// Percorre todos os elementos // defina cada elemento como num e de um console.log
arrayNbr.forEach(num => console.log(num))

// Basicamente faz o mesmo que o foreach
arrayNbr.map(num => console.log(num))