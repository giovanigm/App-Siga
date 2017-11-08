import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Left, Item, CardItem, Text, H1, H2 } from 'native-base';

import CardAviso from './card-aviso';

import styles from './styles';

const avisos = [
    {
        codigo: 1,
        titulo: 'Roubo na Fatec',
        conteudo: 'Prezados,\nVenho lhes informar que o aluno Joselito roubou nossos professores.\n\n\n\n\nBando de fdp',
    },
    {
        codigo: 2,
        titulo: 'Novo Endereço da Intranet',
        conteudo: '<p><span>Prezados(as) alunos (as),</span></p><p>&nbsp;</p><p>&nbsp;</p><div>Vimos informar que a partir de 30 de outubro o SIGA estar&aacute; funcionando em novo endere&ccedil;o devido a mudan&ccedil;a do ambiente para o Azure do CPS.</div><div>&nbsp;</div><div><div>O novo endere&ccedil;o &eacute;:&nbsp;</div><div>&nbsp;</div><div><div><strong>FATEC para ALUNO</strong></div><div>&nbsp;</div><div><a href="https://siga.cps.sp.gov.br/aluno/login.aspx" target="_blank" rel="noopener noreferrer"><strong>https://siga.cps.sp.gov.br/aluno/login.aspx</strong></a></div></div><div>&nbsp;</div><div>&nbsp;</div><div>&Eacute; necess&aacute;rio digitar&nbsp;<span><strong><span style="background-color: #ffff00;">https://</span>&nbsp;</strong></span>anteriormente ao endere&ccedil;o e que preferencialmente o navegador seja o Google Chrome.</div><div>&nbsp;</div><div>O acesso deve ser feito com o mesmo Usu&aacute;rio e Senha antes utilizados.</div><div>&nbsp;</div><div>Informamos que o ambiente atual ser&aacute; desligado no dia 27 de outubro as 23h30min e o SIGA retornar&aacute; no dia 30 de outubro no novo endere&ccedil;o.</div><div>&nbsp;</div><div>&nbsp;</div><div>Atenciosamente,</div></div><div><div id="x_divtagdefaultwrapper" dir="ltr"><div id="x_divtagdefaultwrapper" dir="ltr"><div>&nbsp;</div></div></div></div><p>Diretoria Acad&ecirc;mica</p>',
    },
];

class TelaAvisos extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={avisos}
                        renderRow={data =>
                            (<CardAviso aviso={data} />)} />
                </Content>
            </Container>
        );
    }
}

export default TelaAvisos;
