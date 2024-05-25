import {Pokemon} from "../models/pokemon";
import {FC} from "react";
import {Text, View} from "react-native";


interface CardProps{
    pokemon: Pokemon
}

const CardDetail = ({pokemon}) => {

    return(
        <View>
            <Text>
                Name: {pokemon.name}
            </Text>
        </View>
    )
}
export default CardDetail