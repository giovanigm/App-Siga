import React, { Component } from 'react';
import { List, Card, CardItem, Text, Left, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardBibliografia extends Component {
    static propTypes = {
        bibliografias: PropTypes.arrayOf({
            bibliografia: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            bibliografias: this.props.bibliografias,
        };
    }

    render() {
        const { bibliografias } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3>Bibliografia</H3>
                </CardItem>
                <List
                    dataArray={bibliografias}
                    renderRow={data =>
                        (<CardItem style={styles.item}>
                            <Left>
                                <Text style={styles.text}>{data}</Text>
                            </Left>
                        </CardItem>)} />
            </Card>
        );
    }
}

export default CardBibliografia;
