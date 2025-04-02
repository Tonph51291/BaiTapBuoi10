import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Bai1_Lab6 from "./Bai1_Lab6";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function index() {
  return (
    <Provider store={store}>
      <Bai1_Lab6 />
    </Provider>
  );
}

const styles = StyleSheet.create({});
