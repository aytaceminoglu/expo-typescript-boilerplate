import React, { FC, useEffect, useState } from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Card from "../components/Card";
import axios from "axios";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import {FlashList} from "@shopify/flash-list";

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

const HomeScreen: FC<HomeScreenProps> = (props) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const { navigate } = props.navigation;

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?pageSize=10")
      .then((response) => setCards(response.data.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{
      flex: 1
    }}>
      {loading == true ? (
        <ActivityIndicator size={"large"} />
      ) : (
          <FlashList
              data={cards}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
              <Card
                  pokemon={item}
                  onPress={() => {
                    navigate("Pokemon", {
                      pokemonId: item.id,
                    });
                  }}
              />
          )}
              estimatedItemSize={1}
          />
      )}
    </View>
  );
};



export default HomeScreen;
