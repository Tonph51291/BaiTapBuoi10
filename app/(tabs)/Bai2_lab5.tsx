import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addImage } from "../../store/imageSlide";
import * as ImagePicker from "expo-image-picker";

export default function Bai2_lab5() {
  const dispatch = useDispatch();
  const imageUris = useSelector((state: RootState) => state.image.imageUri);
  const pickImages = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Chúng tôi cần quyền truy cập ảnh!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        // Lấy danh sách các URI của ảnh
        const imageUris = result.assets.map((asset) => asset.uri);
        imageUris.forEach((uri) => dispatch(addImage(uri))); // Lưu từng URI vào Redux
        console.log("Image URIs:", imageUris);
      }
    } catch (error) {
      console.error("Lỗi chọn ảnh:", error);
    }
  };

  console.log("image uri ", imageUris);
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button title="Chọn ảnh" onPress={pickImages} />
      <Button title="Xóa tất cả ảnh" color="red" />

      <ScrollView horizontal style={{ marginTop: 10 }}>
        {imageUris.map((uri, index) => (
          <TouchableOpacity key={index}>
            <Image
              source={{ uri: uri }} // Đúng key uri
              style={{ width: 100, height: 100, marginRight: 10 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
