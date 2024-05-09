const alunos = ["João", "Paulo", "juliana","Eliel"];
const medias = [10,8.7,5,9]

const listaDeAlunosEMedias = [ alunos, medias ];

function exibeNomeeNota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

       const [alunos,medias] = listaDeAlunosEMedias;

       const indice = alunos.indexOf(aluno);

       const mediadoAluno = medias [indice]

       
        

        console.log(`${aluno}está cadstrado!`)
        
        } else {

        console.log("aluno(não encontrado!") 
          }  
}

exibeNomeeNota("João")
exibeNomeeNota("Paulo")
exibeNomeeNota("juliana")
exibeNomeeNota("Eliel")
