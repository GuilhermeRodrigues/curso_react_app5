import React, { Component } from 'react';

import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    //hidden
                    backgroundColor='#61bd8c'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61bd8c' />

                <View style={styles.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>

                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>TEL: (16) 3703-7085</Text>
                    <Text style={styles.txtContatos}>CEL: (16) 99999-9999</Text>
                    <Text style={styles.txtContatos}>EMAIL: contato@atmconsultoria.com</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61bd8c',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        marginTop: 20,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }
});
