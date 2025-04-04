import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Image {
  imageUri: string[];
}
const initialState: Image = {
  imageUri: [],
};

const imageSlide = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.imageUri.push(action.payload);
    },
  },
});

export const { addImage } = imageSlide.actions;
export default imageSlide.reducer;
