import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from '../../hooks/useErros';

//componentes criados por meio de funções é a maneira mais nova de trabalhar com react

function DadosPessoais({ aoEnviar }) { //recebendo propriedade da classe App.js (também funciona passando "props")
    const [nome, setNome] = useState(""); //modo de guardar um estado dentro de um function component [variavel, funcao que será usada para atualizar estado]
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos,possoEnviar] = useErros(validacoes); /*recebe estado de erros e as funções disponíveis do hook customizado
                                                                     recebendo como parâm o contexto de validações*/


    return (
        <form

            onSubmit={(event) => {
                event.preventDefault(); //impede recarregamento do formulário
                if(possoEnviar()){
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades }); //, erros, errosNome, errosSNome
                }
            }}
        >

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido} //qnd ñ valido -> alertar
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido} //qnd ñ valido -> alertar
                helperText={erros.cpf.texto}
                id="cpf"
                name="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />


            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                        color="primary"
                    />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades"
                    color="primary"
                />}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary">Próximo
         </Button>


        </form>);
}

export default DadosPessoais;