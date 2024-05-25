import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const DetailScreen = () => {
    const [cardDetails, setCardDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://api.pokemontcg.io/v2/cards/xy1-21')
            .then((response) => setCardDetails(response.data.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            {loading ? (
                <ActivityIndicator size={"large"} />
            ) : (
                cardDetails ? <Card pokemon={cardDetails} /> : 'Detay Yok'
            )}
        </View>
    );
};

export default DetailScreen;
