import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type PokemonType = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

type UserType = {
  name: string;
  email: string;
  age: string;
  password: string;
  gender: string;
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemonByName: build.query<PokemonType, string>({
      query: (name) => `pokemon/${name}`,
    }),
    signup: build.mutation<UserType, UserType>({
      query: (body) => ({
        url: "http://192.168.1.5:3000/user",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPokemonByNameQuery, useSignupMutation } = pokemonApi;
