import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Portrait = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(`/${title}`)}
      style={{ backgroundColor: "pink", padding: 4 }}
    >
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Portrait;
