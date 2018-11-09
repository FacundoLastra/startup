import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExpoTest extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync()
        .then((photo) => {
          this.props.navigation.navigate('ShowPhoto', { photo: photo })
        })
        .catch((err) => console.log(err))
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera ref={ref => { this.camera = ref }} style={styles.container} type={this.state.type}>
            <View
              style={styles.buttonsView}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity
                style={[styles.button, styles.takePictureButton]}
                onPress={this.takePicture}>
                <Text
                  style={styles.buttonsText}>
                  {' '}Take Picture{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.changeCameraButton]}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={styles.buttonsText}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1
    },
    buttonsView: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
    },
    button: {
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    takePictureButton: {
      flex: 2
    },
    changeCameraButton: {
      flex: 1
    },
    buttonsText: {
      fontSize: 18,
      marginBottom: 10,
      color: 'white',
      marginRight: 3
    }
  })

