import {ActivityIndicator, FlatList, View} from "react-native";
import {useEffect, useState} from "react";
import Card from "./cardList";

export const CardList = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            fetch("https://api.pokemontcg.io/v2/cards")
                .then(response => response.json())
                .then((json) => setCards(json.data))
                .finally((e) => setLoading(false))
        })();
    }, []);

    return (
        <View style={{
            width:'90%',
            backgroundColor:'darkblue',
        }}>

            {
                loading == true ? (<ActivityIndicator size={"large"} />) :     <FlatList
                    data={cards}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                        <Card data={item} />
                    )} />
            }


        </View>
    )
}