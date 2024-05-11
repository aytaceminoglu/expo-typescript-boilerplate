import React from "react";
import {Image, Text, View} from "react-native";
import {Header} from "react-native/Libraries/NewAppScreen";

const Card = ({data}) => {
    return (
        <View style={{
            width: '90%',
            backgroundColor: 'orange',
            height: 'auto',
            padding: 5,
            margin: 3,

        }}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 5}}>
                    <Image source={{uri: data && data.images.small}} style={{width: 75, height: 75}}/>
                </View>
                <View style={{flex: 5}}>
                    <Text style={{fontWeight: 'bold'}}>Name: </Text><Text>{data && data.name}</Text>
                </View>
                <View style={{flex: 5}}>
                    <Text style={{fontWeight: 'bold'}}>Type: </Text><Text>{data && data.supertype}</Text>
                </View>
            </View>

            <View>
                <Text style={{
                    fontWeight: 'bold'
                }}>Abilities</Text>
                {
                    data && data.abilities ? (
                        data.abilities.map((ability, index) => (
                            <Text key={index}>{ability ? ability.text : 'Özellik Bulunamadı'}</Text>
                        ))
                    ) : (
                        <Text>This pokemon is a bullshit because It doesn't have any skill</Text>
                    )
                }


            </View>
            <View style={{flex: 1}}></View>

        </View>
    );
};

export default Card;
