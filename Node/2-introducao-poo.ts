// Sem classe, tem que repetir várias vezes
const p = {
  name: "teste",
  age: 35,

  showName() {
    // console.log(this.name);
  },
};

const anotherP: User = {
  name: "Igor",
  age: 35,
  showName() {
    // console.log(this.name);
  },
};

p.showName();
anotherP.showName();

// Com uma classe, podemos instanciar.

class User {
  name: string = "Igor";
  age: number = 55;

  // Metodo para CONSTRUIR um novo USER
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  // Metodo de funções
  showName = () => {
    console.log(this.name);
  };
}

// Passar os parameetros recebidos no constructor
const anotherUser = new User("Ana", 33);
anotherUser.showName();
