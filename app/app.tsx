
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'expo-image';
import {Image as ReactNativeImage} from 'react-native'

export default function app() {
  return (
    <MapView style={{flex:1}}>
      {/* borderRadius has no effect */}
      <Marker coordinate={{latitude:0,longitude:0}}  >
          <Image style={{height:50, width:50, borderRadius: 25}} source={{uri:'https://dgalywyr863hv.cloudfront.net/pictures/athletes/45051653/27714051/1/large.jpg'}}/>
      </Marker>
      {/* circle */}
      <Marker coordinate={{latitude:15,longitude:0}}  >
          <ReactNativeImage style={{height:50, width:50, borderRadius: 25}} source={{uri:'https://dgalywyr863hv.cloudfront.net/pictures/athletes/45051653/27714051/1/large.jpg'}}/>
      </Marker>
    </MapView>
  );
}

