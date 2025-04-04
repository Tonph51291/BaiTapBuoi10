import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { store } from "../../store/store";
import { Provider } from "react-redux";

export default function Bai1_Lab5() {
  return (
    <Provider store={store}>
      <Text>Bai1_Lab5</Text>
    </Provider>
  );
}

const styles = StyleSheet.create({});
