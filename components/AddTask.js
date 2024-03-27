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

const AddTask = (props) => {
  const handleNewTask = () => {
    // console.log("Handle new task pressed: ", newTask);
    if (newTask.trim() != "") {
      props.onPress(newTask);
      setNewTask("");
    }
  };
  const [newTask, setNewTask] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Add a new task"
        //defaultValue={text}
      />
      <TouchableOpacity style={styles.button} onPress={handleNewTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#F5F1F1",
    paddingVertical: 16,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    fontSize: 17,
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "#558CF6",
    fontWeight: "bold",
  },
});

export default AddTask;
