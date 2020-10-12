import React from "react";
import { View, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = React.useState("");
  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        value={enteredGoal}
        placeholder="Course Goal"
        style={{ borderColor: "black", borderWidth: 1, padding: 10, flex: 1 }}
        onChangeText={goalInputHandler}
      />
      <Button title="+" onPress={() => addGoalHandler(enteredGoal)} />
    </View>
  );
};

export default GoalInput;
