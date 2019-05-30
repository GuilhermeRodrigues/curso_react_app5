import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

//importar o componente 
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class app5 extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ id: 'a' }}
                renderScene={(route, navigator) => {
                    /*Definir a cena com base na rota */
                    if (route.id === 'a') {
                        //Exibir a cenaPrincipal
                        return(<CenaPrincipal navigator={navigator} />);
                    }
                    if (route.id === 'b') {
                        //Exibir a cenaClientes
                        return(<CenaClientes navigator={navigator} />);
                    }
                }}
            />
        );
    }
}

AppRegistry.registerComponent('app5', () => app5);
