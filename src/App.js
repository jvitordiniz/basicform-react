//componentes criados por meio de funções é a maneira mais nova de trabalhar com react
import React, { Component } from 'react';
import './App.css';
//import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core"
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCPF, validarSenha, validarNome } from "./models/cadastro"
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {

  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>

        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}>
          <FormularioCadastro aoEnviar={aoEnviar} />
        </ValidacoesCadastro.Provider>

      </Container>
    )
  };
}


function aoEnviar(dados) {
  console.log(dados);
}



export default App;
