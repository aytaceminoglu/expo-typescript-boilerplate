import React, {FC} from "react"
import {Image, ImageStyle, Text, TouchableOpacity, View, ViewStyle} from "react-native"
import {Pokemon} from "../models/pokemon"
import RootNavigator from "../Navigator/RootNavigator";
import {useNavigation} from "@react-navigation/native";


interface CardProps {
    pokemon: Pokemon
}

const Card: FC<CardProps> = ({pokemon}, navigation) => {
    const abilitiesText = pokemon.abilities
        ? pokemon.abilities.map((ability) => ability.name).join(", ")
        : "No abilities";

    navigation = useNavigation();


    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Detail', {
                    pokemonId: pokemon.id
                })
            }}
        >
            <View
                style={$containerStyle}
            >
                <Image
                    source={{uri: pokemon.images.small}}
                    style={$imageStyle}
                ></Image>
                <Text>
                    Tap to see {pokemon.name}'s detail
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const $containerStyle: ViewStyle = {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 8,
    marginBottom: 16,
    alignContent: "center",
    alignItems: "center"
}

const $imageStyle: ImageStyle = {
    width: 100,
    aspectRatio: 0.71,
}


const $rightSection: ViewStyle = {paddingLeft: 16}


export default Card
