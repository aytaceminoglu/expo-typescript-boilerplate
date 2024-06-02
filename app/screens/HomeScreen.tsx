import React, {FC, useEffect, useState} from "react";
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
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchCards()
    }, [])

    const fetchCards = () => {
        const prevPage = page + 1
        setPage(prevPage)
        setLoading(true)
        axios
            .get(`https://api.pokemontcg.io/v2/cards?pageSize=10&page=${page}`)
            .then((response) => setCards(prevCards => [...prevCards, ...response.data.data]))
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


    return (
        <View>

            <FlashList
                style={{alignItems: "center"}}
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={Item}
                numColumns={2}
                estimatedItemSize={200}
                onEndReached={fetchCards}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="small"/> : null}></FlashList>

        </View>
    );
};

const $containerStyle: ViewStyle = {
    flex: 1
}


export default HomeScreen;
