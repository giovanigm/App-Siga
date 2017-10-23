import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text, Button } from 'native-base';

import LinhaPosicao from './linha-posicao';
import styles from './styles';

class ItemPosicao extends Component {
    static propTypes = {
        eventEmitter: PropTypes.shape({
            emit: PropTypes.func,
        }).isRequired,
        posicao: PropTypes.shape({
            mes: PropTypes.number,
            nome_mes: PropTypes.string,
            cheques: PropTypes.string,
            dinheiro: PropTypes.string,
            duplicatas: PropTypes.string,
            credito: PropTypes.string,
            debito: PropTypes.string,
            total: PropTypes.string,
            orto: PropTypes.number,
            vidas: PropTypes.number,
            faturamento: PropTypes.string,
            contratos: PropTypes.number,
        }).isRequired,
    }

    constructor(props) {
        super(props);

        this.onSelecionaPosicao = this.onSelecionaPosicao.bind(this);
    }

    onSelecionaPosicao() {
        this.props.eventEmitter.emit('posicao.selecionada', this.props.posicao);
    }

    render() {
        const { posicao } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <Text style={styles.textoMes}>{posicao.nome_mes}</Text>
                </CardItem>
                <LinhaPosicao item={'Aceites em cheques'} valor={posicao.cheques} escuro={false} />
                <LinhaPosicao item={'Aceites em dinheiro'} valor={posicao.dinheiro} escuro />
                <LinhaPosicao item={'Aceites em duplicatas'} valor={posicao.duplicatas} escuro={false} />
                <LinhaPosicao item={'Aceites em crédito'} valor={posicao.credito} escuro />
                <LinhaPosicao item={'Aceites em débito'} valor={posicao.debito} escuro={false} />
                <LinhaPosicao item={'Total de aceites'} valor={posicao.total} escuro />
                <LinhaPosicao item={'Orto'} valor={`${posicao.orto}`} escuro={false} />
                <LinhaPosicao item={'Vidas'} valor={`${posicao.vidas}`} escuro />
                <LinhaPosicao item={'Faturamento'} valor={posicao.faturamento} escuro={false} />
                <LinhaPosicao item={'Contratos'} valor={`${posicao.contratos}`} escuro />
                <Button onPress={this.onSelecionaPosicao} transparent info>
                    <Text>Visualizar posição do mês</Text>
                </Button>
            </Card>
        );
    }
}

export default ItemPosicao;
