//model irá conter todas as regras de validação (regra de negócio)
function validarCPF(cpf) {
      if (cpf.length !== 11) {
        return { valido: false, texto: "CPF inválido" };
      } else {
        return { valido: true, texto: "" };
      }
    }
    
  function validarSenha(senha) {
      if (senha.length < 4 || senha.length > 12) {
        return { valido: false, texto: "Senha deve conter 4 a 12 dígitos." };
      } else {
        return { valido: true, texto: "" };
      }
    } 


    function validarNome(nome) {
        if (nome.length < 4 || nome.length > 50) {
          return { valido: false, texto: "Nome deve conter 4 a 50 dígitos." };
        } else {
          return { valido: true, texto: "" };
        }
      } 




    export {validarCPF,validarSenha,validarNome}
  
  /*
  function validarNome(nome) {
    var regex = /^[A-Za-z]+$/  //Regex for Valid Characters i.e. Alphabets, Numbers and Space. (original = /^[A-Za-z0-9 ]+$/)
  
    var isValid = regex.test(nome);
  
  
    if (nome !== "") {
      if (!isValid) {
        return { valido: false, texto: "O nome contém caracteres inválidos" };
      } else {
        return { valido: true, texto: "" };
      }
    } else {
      return { valido: true, texto: "" };
    }
  
  }*/
  