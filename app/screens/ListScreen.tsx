import React, { useEffect, useState } from "react"
import {ActivityIndicator, FlatList, Touchable, TouchableOpacity, View} from "react-native"
import Card from "../components/Card"
import axios from "axios"

const ListScreen = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?pageSize=10")
      .then((response) => setCards(response.data.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={{ paddingTop: 80 }}>
      {loading == true ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card pokemon={item} />}
        />
      )}
    </View>

  )
}

export default ListScreen
