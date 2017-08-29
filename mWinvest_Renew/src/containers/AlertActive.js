import Carousel from 'react-native-snap-carousel';
import React, { Component } from "react";

export default class AlertActive extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={{height:40,width:200}}>
                <Text>1</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={200}
              itemWidth={200}
            />
        );
    }
}
