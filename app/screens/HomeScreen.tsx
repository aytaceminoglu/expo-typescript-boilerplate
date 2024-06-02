import React, {FC, useCallback, useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, View, ViewStyle} from "react-native";
import Card from "../components/Card";
import axios from "axios";
import {AppStackScreenProps} from "../navigators/AppNavigator";
import {FlashList} from "@shopify/flash-list";

interface HomeScreenProps extends AppStackScreenProps<"Home"> {
}

const HomeScreen: FC<HomeScreenProps> = (props) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const {navigate} = props.navigation;
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchCards()
    }, [])
    const fetchCards = () => {
        setLoading(true)
        axios
            .get(`https://api.pokemontcg.io/v2/cards?pageSize=10&page=${page}`)
            .then((response) => {
                setCards(prevCards => [...prevCards, ...response.data.data]);
                setPage(page + 1);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    const Item = ({item}) => (

        <Card
            pokemon={item}
            onPress={() => {
                navigate("Pokemon", {
                    pokemonId: item.id,
                });
            }}
        />

    );

    const keyExtractor = useCallback((item: any, i: number) => `${i}-${item.id}`, []);


    return (
        <View style={$containerStyle}>

            <FlashList
                style={$flashListStyle}
                data={cards}
                keyExtractor={keyExtractor}
                renderItem={Item}
                numColumns={2}
                estimatedItemSize={500}
                onEndReached={fetchCards}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="small"/> : null}></FlashList>

        </View>
    );
};

const $containerStyle: ViewStyle = {
    flex: 1
}

const $flashListStyle: ViewStyle = {
    alignItems: "center"
}


export default HomeScreen;
