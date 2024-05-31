import React, { FC, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import { Pokemon } from "../models/pokemon";

interface PokemonScreenProps extends AppStackScreenProps<"Pokemon"> {}

const PokemonScreen: FC<PokemonScreenProps> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  const { pokemonId } = props.route.params;

  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/${pokemonId}`)
      .then((response) => {
        setPokemon(response.data.data);
        console.log(JSON.stringify(response.data.data));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading == true ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          <Image source={{ uri: pokemon.images.large }} style={styles.image} />
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.type}>Type: {pokemon.types.join(", ")}</Text>
          <Text style={styles.hp}>HP: {pokemon.hp}</Text>
          {pokemon.abilities ? (
            <Text style={styles.subTitle}>
              Abilities:{" "}
              {pokemon.abilities &&
                pokemon.abilities.map((ability, index) => (
                  <Text key={index} style={styles.ability}>
                    {ability.name}: {ability.text}
                  </Text>
                ))}
            </Text>
          ) : (
            <View>
              <Text style={styles.subTitle}>Abilities: </Text>
              <Text style={styles.ability}>No Abilities</Text>
            </View>
          )}
          <Text style={styles.subTitle}>Attacks:</Text>
          {pokemon.attacks &&
            pokemon.attacks.map((attack, index) => (
              <Text key={index} style={styles.attack}>
                {attack.name} ({attack.cost.join(", ")}): {attack.damage} -{" "}
                {attack.text}
              </Text>
            ))}
          <Text style={styles.subTitle}>Weaknesses:</Text>
          {pokemon.weaknesses &&
            pokemon.weaknesses.map((weakness, index) => (
              <Text key={index} style={styles.weakness}>
                {weakness.type}: {weakness.value}
              </Text>
            ))}
          <Text style={styles.subTitle}>Set Information:</Text>
          <Text style={styles.set}>Set: {pokemon.set.name}</Text>
          <Text style={styles.set}>Series: {pokemon.set.series}</Text>
          <Text style={styles.set}>
            Release Date: {pokemon.set.releaseDate}
          </Text>
          <Text style={styles.set}>Rarity: {pokemon.rarity}</Text>
          <Text style={styles.set}>Artist: {pokemon.artist}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 300,
    height: 420,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  type: {
    fontSize: 20,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  hp: {
    fontSize: 20,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ability: {
    fontSize: 16,
    marginBottom: 5,
  },
  attack: {
    fontSize: 16,
    marginBottom: 5,
  },
  weakness: {
    fontSize: 16,
    marginBottom: 5,
  },
  set: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PokemonScreen;
