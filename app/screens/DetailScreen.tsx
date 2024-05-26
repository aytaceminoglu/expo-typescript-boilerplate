import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import CardDetail from "../components/CardDetail";
import {useRoute} from "@react-navigation/native";

const DetailScreen = () => {
    const [cardDetails, setCardDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const route = useRoute()
    const pokemonId = route.params["pokemonId"];
    useEffect(() => {
        axios
            .get(`https://api.pokemontcg.io/v2/cards/${pokemonId}`)
            .then((response) => setCardDetails(response.data.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            {loading ? (
                <ActivityIndicator size={"large"} />
            ) : (
                cardDetails ? <CardDetail pokemon={cardDetails} /> : 'Detay Yok'
            )}
        </View>
    );
};

export default DetailScreen;
