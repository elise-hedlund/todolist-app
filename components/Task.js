import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Task = (props) => {
  const { text, isCompleted, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.checkBox}>
          {isCompleted && <Text style={styles.checkmark}>&#10003;</Text>}
        </View>
        <Text
          style={[styles.itemText, isCompleted ? styles.completedText : null]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkmark: {
    color: "#000",
    fontSize: 15,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  item: {
    marginBottom: 16,
    flexDirection: "row",
    padding: 16,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 3,
  },
  itemText: {
    fontSize: 20,
  },
  checkBox: {
    width: "8%",
    aspectRation: 1,
    backgroundColor: "#8DDFDA66",
    borderRadius: 5,
    marginRight: 16,
  },
});

export default Task;
