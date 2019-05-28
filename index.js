import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

//importar o componente 
import CenaPrincipal from './src/components/CenaPrincipal';

export default class app5 extends Component {
    render() {
        return (
            <CenaPrincipal />
        );
    }
}

AppRegistry.registerComponent('app5', () => app5);
