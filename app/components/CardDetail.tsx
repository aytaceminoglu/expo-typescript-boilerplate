import {Pokemon} from "../models/pokemon";
import {FC} from "react";
import {Image, ImageStyle, Text, View, ViewStyle} from "react-native";


interface CardProps{
    pokemon: Pokemon
}

const CardDetail = ({pokemon}) => {

    return(
        <View style={$containerStyle}>
            <Image
            source={{uri: pokemon.images.small}}
            style={$imageStyle}

            >
            </Image>
            <Text>
                Name: {pokemon.name}
            </Text>
        </View>
    )
}

const $containerStyle: ViewStyle = {
    alignItems: "center",
    alignContent: "center"
}

const $imageStyle: ImageStyle = {
    width: '80%',
    aspectRatio: 0.71,
    flexDirection: "column"
}

export default CardDetail