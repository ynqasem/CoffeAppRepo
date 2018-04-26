import React from 'react';
import Expo, {AppLoading} from 'expo';
import HomePage from './HomePage';

export default class MyApp extends React.Component {
    state = { 
        fontsAreLoaded: false,
     };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            });
        this.setState({fontsAreLoaded: true});
    }
    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading/>;
        }
        return (
                <HomePage MyStore={this.props.MyStore} />
        );
    }
}


