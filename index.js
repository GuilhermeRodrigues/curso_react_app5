import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends Component {
    render() {
        return (
            <BarraNavegacao />
        );
    }
}

AppRegistry.registerComponent('app5', () => app5);
