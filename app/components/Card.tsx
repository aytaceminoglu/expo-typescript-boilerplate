import React, { FC } from "react"
import {Image, ImageStyle, Text, TouchableOpacity, View, ViewStyle} from "react-native"
import { Pokemon } from "../models/pokemon"


interface CardProps {
  pokemon: Pokemon
}

const Card: FC<CardProps> = ({ pokemon}) => {
  const abilitiesText = pokemon.abilities
  ? pokemon.abilities.map((ability) => ability.name).join(", ")
  : "No abilities";
  

  return (
      <TouchableOpacity>
    <View
      style={$containerStyle}
    >
      <Image
        source={{ uri: pokemon.images.small }}
        style={$imageStyle}
      ></Image>
      <View style={$rightSection}>
        <Text>Name: {pokemon.name}</Text>
        <Text>Type: {pokemon.supertype}</Text>
        <Text>
          Abilities: {abilitiesText}
        </Text>
      </View>
    </View>
      </TouchableOpacity>
  )
}

const $containerStyle: ViewStyle = {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: "lightgray",
  padding: 8,
  marginBottom: 16,
}

const $imageStyle: ImageStyle = { width: 100, aspectRatio: 0.71 }


const $rightSection: ViewStyle = { paddingLeft: 16 }


export default Card
