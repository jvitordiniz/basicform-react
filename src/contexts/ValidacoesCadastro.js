/*objeto context providers - cria um contexto customizado utilizado para englobar componentes que usarão funções 
sem que as mesmas precisam ser herdadas por um elemnt pai para isso, todos os componentes precisam ser declarados dentro do <ValidacoesCdastro>
*/

import React from 'react';

const ValidacoesCadastro = React.createContext();

export default ValidacoesCadastro;