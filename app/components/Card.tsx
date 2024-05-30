import React, { FC } from "react";
import {
  Image,
  ImageStyle,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Pokemon } from "../models/pokemon";

interface CardProps {
  pokemon: Pokemon;
  onPress: () => void;
}

const Card: FC<CardProps> = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={$containerStyle}>
        <Image
          source={{ uri: pokemon.images.small }}
          style={$imageStyle}
        ></Image>
        <Text>Tap to see {pokemon.name}'s detail</Text>
      </View>
    </TouchableOpacity>
  );
};

const $containerStyle: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "lightgray",
  padding: 8,
  marginBottom: 16,
  alignContent: "center",
  alignItems: "center",
};

const $imageStyle: ImageStyle = {
  width: 100,
  aspectRatio: 0.71,
};

const $rightSection: ViewStyle = { paddingLeft: 16 };

export default Card;
