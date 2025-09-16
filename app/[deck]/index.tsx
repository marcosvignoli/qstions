import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const cardsData = ["question 1", "question 2"];
const Deck = () => {
  const { Deck } = useLocalSearchParams();

  const renderItem = ({ item }: { item: string }) => {
    return <Text>{item}</Text>;
  };
  return (
    <View>
      <Text>{Deck}</Text>
      <FlatList data={cardsData} renderItem={renderItem} />
    </View>
  );
};

export default Deck;
