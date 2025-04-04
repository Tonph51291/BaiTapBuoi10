import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Bai1_Lab6 from "./Bai1_Lab6";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Bai2_lab5 from "./Bai2_lab5";
import Bai2_lab6 from "./Bai2_lab6";
import Bai3_Lab6 from "./Bai3_Lab6";

export default function index() {
  return (
    <Provider store={store}>
      <Bai3_Lab6 />
    </Provider>
  );
}

const styles = StyleSheet.create({});
