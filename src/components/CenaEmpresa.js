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

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    //hidden
                    backgroundColor='#ec7148'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#ec7148' />

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>

                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtEmpresa}>
                        A Atm consultoria está no mercado há mais de 20 anos.
                    </Text>
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
        color: '#ec7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtDetalhes: {
        fontSize: 18
    }
});
