import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Toast from 'react-native-root-toast';

class RootToast extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    toastr(msg) {
        this.setState({message: msg, visible: true});
        setTimeout(() => this.setState({
            visible: false
        }), 2000);
    }

    render() {
        return (
            <View>
                <Toast
                visible={this.state.visible}
                position={Toast.positions.CENTER }
                shadow={false}
                animation={false}
                hideOnPress={true}
                >{this.state.message}</Toast>
                <TouchableOpacity
                    onPress={() => { this.toastr('Hello, this is toastr!'); }}
                >
                    <Text style={{color: 'red'}}>Click here!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default RootToast;