import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

//importar o componente 
//import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class app5 extends Component {
    render() {
        return (
            <CenaClientes />
        );
    }
}

AppRegistry.registerComponent('app5', () => app5);
