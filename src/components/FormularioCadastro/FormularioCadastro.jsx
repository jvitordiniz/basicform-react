import React,{useEffect, useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Step, Stepper, StepLabel, Typography } from "@material-ui/core"

function FormularioCadastro({ aoEnviar }) { //recebendo propriedade da classe App.js (também funciona passando "props")
    
    const[etapaAtual, setEtapaAtual] = useState(0);
    const[dadosColetados, setDados] = useState({});
    
    //useEffect executa em cada ciclo de vida do componente (quando componente for montado/atualizado (useState) /desmontado)
    useEffect(()=>{ //serve para substituir o ComponentDidMount/update/WillUnmount
        if(etapaAtual === formularios.length-1){ //-1 para enviar os dados sem precisar chegar até a página de agradecimento
            aoEnviar(dadosColetados);
        }
    })

    const formularios =[
        <DadosUsuario aoEnviar={coletarDados}/>, 
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5" align="center">Cadastro Finalizado</Typography>
    ];

    //função para agregação dos dados entre os formulários
    function coletarDados(dados){
        setDados({...dadosColetados, ...dados}) //spread operator: concatena dados a cada submit
        proximaEtapa(); //depois chama a proxima etapa
    }

    function proximaEtapa(){
        setEtapaAtual(etapaAtual+1);
    }

    return (
        <>
        <Stepper activeStep = {etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finaização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    );
}


export default FormularioCadastro;