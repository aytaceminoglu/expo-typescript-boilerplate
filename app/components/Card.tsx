import React, {FC, useState} from "react";
import {
    Button,
    Image,
    ImageStyle, Pressable, StyleSheet,
    Text, TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import {Pokemon} from "../models/pokemon";

interface CardProps {
    pokemon: Pokemon;
    onPress: () => void;
}

const Card: FC<CardProps> = ({pokemon, onPress}) => {

    return (

        <View style={$containerStyle}>
            <Image
                source={{uri: pokemon.images.small}}
                style={$imageStyle}
            ></Image>
            <TouchableOpacity
                onPress={onPress}
                style={$buttonStyle}
            >
                <Text style={$buttonTextStyle}>See Details</Text>
            </TouchableOpacity>
        </View>

    );
};

const $containerStyle: ViewStyle = {
    flex: 1,
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

const $buttonStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#add8e6",
    borderRadius: 4,
    marginTop: 5,
    elevation: 4,
    width: 90,
    height: 30
}

const $buttonTextStyle: TextStyle = {
    fontWeight: "bold"
}

const $rightSection: ViewStyle = {paddingLeft: 16};

export default Card;
