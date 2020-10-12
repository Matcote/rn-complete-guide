import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = React.useState([]);
  const addGoalHandler = (enteredGoal) => {
    setGoals([...goals, enteredGoal]);
  };
  // const deleteGoalHandler = (goalId) ={
  //   setGoals()
  // }

  return (
    <View style={{ padding: 50 }}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={goals}
          style={{ height: 300 }}
          renderItem={(itemData) => <GoalItem title={itemData.item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
