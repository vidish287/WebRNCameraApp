import { Text, View, StyleSheet, Platform } from "react-native";
import React, { Component } from "react";
import { Camera } from "expo-camera";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getCameraPermission: null,
      cameraType: Camera.Constants.Type.back,
    };
  }

  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log("status", status);
    let cameraStatus = status === "granted";
    this.setState({
      getCameraPermission: cameraStatus,
    });
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Camera style={styles.displayCamera} type={this.state.cameraType} />
        </View>
        <View style={styles.modelNameView}>
          <Text style={{ fontSize: 20, color: "#ffffff" }}>
            Model: {Platform.OS}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  displayCamera: {
    width: 500,
    height: 500,
  },
  modelNameView: {
    bottom: 40,
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: "center",
    position: "absolute",
    borderColor: "#ffffff",
  },
});

export default App;
