import React, { FC, useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  Image,
  ViewStyle,
  TouchableOpacity,
  Alert,
  TextStyle,
  ImageStyle,
} from "react-native";
import axios from "axios";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import { Pokemon, PokemonDetail } from "../models/pokemon";

interface PokemonScreenProps extends AppStackScreenProps<"Pokemon"> {}

interface DetailContainerProps {
  title: string;
  details?: PokemonDetail[];
}

const PokemonScreen: FC<PokemonScreenProps> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  const { pokemonId } = props.route.params;

  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/${pokemonId}`)
      .then((response) => {
        setPokemon(response.data.data);
        //console.log(JSON.stringify(response.data.data));
      })
      .finally(() => setLoading(false));
  }, []);

  const DetailContainer: FC<DetailContainerProps> = useCallback(
    ({ title, details }) => {
      return (
        <View style={$detailContainerStyle}>
          <Text style={$labelStyle}>{title}</Text>
          {details ? (
            <View style={$buttonContainerStyle}>
              {details.map((detail) => (
                <TouchableOpacity
                  style={$buttonStyle}
                  onPress={() => Alert.alert(detail.name, detail.text)}
                >
                  <Text>{detail.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text>No detail</Text>
          )}
        </View>
      );
    },
    []
  );

  return (
    <ScrollView contentContainerStyle={$contentContainerStyle}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image source={{ uri: pokemon.images.large }} style={$imageStyle} />

          <View style={$labelContainer}>
            <Text style={$labelStyle}>{pokemon.name}</Text>
            <Text style={$labelStyle}>Type: {pokemon.types.join(", ")}</Text>
            <Text style={$labelStyle}>HP: {pokemon.hp}</Text>
          </View>

          <DetailContainer title="Abilities" details={pokemon.abilities} />
          <DetailContainer title="Attacks" details={pokemon.attacks} />
        </>
      )}
    </ScrollView>
  );
};

const $detailContainerStyle: ViewStyle = {
  marginTop: 16,
};

const $labelContainer: ViewStyle = {
  gap: 8,
  paddingVertical: 16,
};
const $contentContainerStyle: ViewStyle = {
  padding: 8,
};

const $imageStyle: ImageStyle = {
  width: 300,
  height: 420,
  alignSelf: "center",
};

const $labelStyle: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
};

const $buttonStyle: ViewStyle = {
  padding: 8,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "black",
  alignSelf: "flex-start",
};

const $buttonContainerStyle: ViewStyle = {
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 8,
  marginTop: 8,
};

export default PokemonScreen;
