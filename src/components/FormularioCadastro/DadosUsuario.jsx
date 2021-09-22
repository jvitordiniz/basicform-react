import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    //useState do dropdown de seleção
    const [selecao, setSelecao] = useState("");
    const handleNumber = (event) => {
        setSelecao(...selecao, event.target.value)
        console.log(event.target.value)
    }

    //useState do dropdown de mostrar a tabela
    const [mostrar, setTabela] = useState(false);
    const handleTabela = (event)=>{
        if(event.target.value === "true"){ 
            setTabela(true)
            console.log("true")
        }else{
            setTabela(false)
            console.log("false")
        }
    }


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email} //sempre atribui valor do e-mail neste campo (q inicialmente é zero) para tornar o formulário "controlado" 
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                id="email"
                name="email"
                label="email"
                type="email"
                margin="normal"
                variant="outlined"
                fullWidth
                required />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
                required />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled = {!erros.senha.valido}
            >Próximo</Button>


    <h2>Itens não usados no formulário:</h2> <br/><br/><br/>
    <div>                                  
        <select value={selecao.values} onChange={handleNumber}>
          <option value="">selecione</option> 
          <option value="Selecao_1">Selecao 1</option>
          <option value="Selecao_2">Selecao 2</option>
        </select>
      </div> 
      
<br/><br/><br/>

    
      <div>                                  
        <select onChange={handleTabela}>
          <option value="">selecione</option> 
          <option value="true">Mostrar Tabela</option>
          <option value="false">Esconder Tabela</option>
        </select>
        <div style={ mostrar ? {display:'block'} : {display:'none'} }> 
        <table border='1px'><tbody>
            <tr><th>titulo 1</th><th>titulo 2</th></tr><tr><td>dado 1</td><td>dado 2</td></tr>
        </tbody></table>
        </div>
        
</div><br/><br/><br/>

        </form>
    );


}

export default DadosUsuario;