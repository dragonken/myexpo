import React, {Component} from 'react';
import {Text, View, Dimensions, ScrollView, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      error: null
    };
  }

  setRegion = () => ({latitude: this.state.region.latitude, longitude: this.state.region.longitude, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA});

  render() {
    return (<MapView provider={PROVIDER_GOOGLE} style={styles.map} scrollEnabled={true} zoomEnabled={true} pitchEnabled={true} rotateEnabled={true} initialRegion={this.state.region}>
      <Marker title="This is a title" description="This is a description" coordinate={this.state.region}/>
      <Marker title="This is setRegion" description="This is setRegion" coordinate={this.setRegion()}/>
      {
        !!this.state.region.latitude && !!this.state.region.longitude && <Marker coordinate={{
              "latitude" : this.state.region.latitude,
              "longitude" : this.state.region.longitude
            }} title={"Your Location"}/>
      }

    </MapView>);
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
