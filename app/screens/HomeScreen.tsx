import React, {FC, useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
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
    fetchCards(page)
    }, [])

  const fetchCards = (page:number) => {
        setLoading(true)
    axios
        .get(`https://api.pokemontcg.io/v2/cards?pageSize=10&page=${page}`)
        .then((response) => setCards(prevCards => [...prevCards, ...response.data.data]))
        .finally(() => {
          setLoading(false)
        });
  }





    return (
        <View style={{
            flex: 2,
        }}>

                <FlashList
                    style={{alignItems:"center"}}
                    data={cards}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Card
                            pokemon={item}
                            onPress={() => {
                                navigate("Pokemon", {
                                    pokemonId: item.id,
                                });
                            }}
                        />
                    )}
                    numColumns={2}
                    estimatedItemSize={200}
                    onEndReached={() => {
                        setLoading(true);
                        setPage(prevPage => {
                            prevPage++
                            fetchCards(prevPage);
                            return prevPage;
                        })
                    }}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
                />

        </View>
    );
};


export default HomeScreen;
