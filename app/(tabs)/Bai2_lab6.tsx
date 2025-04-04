import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useGetPokemonByNameQuery } from "@/store/prokemon";

export default function Bai2_lab6() {
  const [name, setName] = useState("");
  console.log("name", name);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useGetPokemonByNameQuery(searchTerm, {
    skip: searchTerm.trim() === "",
  });

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nhập tên Pokemon..."
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Tìm kiếm" onPress={() => setSearchTerm(name)} />

      {isLoading && <Text>Đang tải...</Text>}
      {error && <Text>Không tìm thấy Pokémon 😢</Text>}
      {data && (
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>{data.name.toUpperCase()}</Text>
          <Image
            source={{ uri: data.sprites.front_default }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Chiều cao: {data.height}</Text>
          <Text>Cân nặng: {data.weight}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
