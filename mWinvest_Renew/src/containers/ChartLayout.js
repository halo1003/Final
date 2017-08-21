import React, { Component } from 'react';
import { View,Text,StyleSheet,Dimensions} from 'react-native';
import {Tabs,Tab,Content} from 'native-base';
import Chart from 'react-native-chart';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10
    },
    chart: {
        height: 200,
        width: Dimensions.get('window').width-20,
    },
});

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
    [10,2],
    [0, 1],
    [1, 3],
    [3, 7],

];

class ChartLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="pine"
                    cornerRadius = {10}
                 />
            </View>
        );
    }
}
export default ChartLayout
