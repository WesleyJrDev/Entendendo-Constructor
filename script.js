class Aluno{
    constructor (Nome,Sexo, Idade, Curso, Semestre){
        this.Nome = Nome;
        this.Sexo = Sexo;
        this.Idade = Idade;
        this.Curso = Curso;
        this.Semestre = Semestre;
    }

        Apresentar(){
            return `Esse é o ${this.Nome} do curso de ${this.Curso}`;
        }
    };

let Wesley = new Aluno ("Wesley Damazio dos Santos Junior", "Masculino", 35, "Psicologia", 10);

let Lara = new Aluno ("Lara Dias Damazio", "Feminino", 13, "Veterinária", 10);

console.log( Wesley.Apresentar());