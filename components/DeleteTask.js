import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  onPress,
  Keyboard,
  Pressable,
} from "react-native";

const DeleteTask = (props) => {
  const handleDeleteTask = () => {
    props.onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDeleteTask}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#F5F1F1",
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "crimson",
    fontWeight: "bold",
  },
});

export default DeleteTask;
