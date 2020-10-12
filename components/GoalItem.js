import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "lightblue",
        }}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
