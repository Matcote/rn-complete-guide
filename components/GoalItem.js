import React from "react";
import { View, Text } from "react-native";

const GoalItem = ({ title }) => {
  return (
    <View
      style={{
        marginTop: 10,
        padding: 10,
        backgroundColor: "lightblue",
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

export default GoalItem;
