import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  binhPhuong,
  decrement,
  increment,
  RESET_COUNTER,
} from "../../store/couterSlide";

export default function Bai1_Lab6() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 19 }}>{count}</Text>
      <Button title="Tăng" onPress={() => dispatch(increment())} />
      <Button title="Giảm" onPress={() => dispatch(decrement())} />
      <Button title="Bình Phương" onPress={() => dispatch(binhPhuong())} />
      <Button title="Về 0" onPress={() => dispatch(RESET_COUNTER())} />
    </View>
  );
}

const styles = StyleSheet.create({});
