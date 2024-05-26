import {Pokemon} from "../models/pokemon";
import React, {FC} from "react";
import {Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";


interface CardProps {
    pokemon: Pokemon
}

const CardDetail = ({pokemon}) => {

    const abilitiesName = pokemon.abilities ? pokemon.abilities.map((ability) => ability.name).join(", ") : 'No ability';
    const abilitiesText= pokemon.abilities ? pokemon.abilities.map((ability) => ability.text).join(", ") : 'No ability';
    const abilitiesType = pokemon.abilities ? pokemon.abilities.map((ability) => ability.type) : 'No ability';

    const subtypeText = pokemon.subtypes ? pokemon.subtypes.map((subtype) => subtype).join(", ") : "yok"




    return (
        <View>
            <View style={{
                alignItems: "center"
            }}>
                <Image
                    source={{uri: pokemon.images.small}}
                    style={$imageStyle}>
                </Image>
                <Text style={$headerStyle}>
                    Name: {pokemon.name}
                </Text>
            </View>

            <View style={tableStyle.row}>
                <Text style={tableStyle.header}>Supertype/Subtype: </Text>
                <Text style={tableStyle.text}>{pokemon.supertype}/{subtypeText}</Text>

            </View>


            <View style={tableStyle.row}>
                <Text style={tableStyle.header}>HP: </Text>
                <Text style={tableStyle.text}>{pokemon.hp}</Text>
            </View>

            <View style={tableStyle.column}>
                <Text style={tableStyle.header}>Ability</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={tableStyle.header2}> Ability Name: </Text>
                    <Text style={tableStyle.text}> {abilitiesName} </Text>
                </View>
                <View style={{flexDirection:"column", paddingTop: 10}}>
                    <Text style={tableStyle.header2}> Ability Text: </Text>
                    <Text style={tableStyle.text}> {abilitiesText} </Text>
                </View>
                <View style={{flexDirection:"row", paddingTop: 10}}>
                    <Text style={tableStyle.header2}> Ability Type: </Text>
                    <Text style={tableStyle.text}> {abilitiesType} </Text>
                </View>


            </View>



        </View>
    )
}

const $containerStyle: ViewStyle = {
    alignItems: "center",
    alignContent: "center"
}

const $imageStyle: ImageStyle = {
    width: '60%',
    aspectRatio: 0.71,
    flexDirection: "column",
}

const $headerStyle: TextStyle = {
    fontWeight: 900,
    paddingTop: 20,
    fontSize: 25,
}


const tableStyle = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        alignContent: "center",
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    column: {
        flexDirection: "column",
        alignItems: "center",
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        alignContent: "center",
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        flexGrow:1
    },
    header: {
        fontWeight: "bold",
        flexDirection: "row",
        fontSize: 20
    },
    header2: {
        fontWeight: "bold",
        flexDirection: "row",
        fontSize: 15
    },
    text: {
        fontSize: 15,

    }

})


export default CardDetail