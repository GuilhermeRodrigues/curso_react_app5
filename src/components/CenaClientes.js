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

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    //hidden
                    backgroundColor='#b9c941'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#b9c941' />

                <View style={styles.cabecalho}>
                    <Image source={detalheClientes} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalheCliente}>Sys - tecnlogia em sistemas</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDetalheCliente}>Rsm - consultoria</Text>
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
        color: '#b9c941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});
