import Portrait from "@/components/portrait";
import { FlatList, View } from "react-native";
const data = [
  {
    title: "Conectar",
  },
  {
    title: "Random",
  },
];

export default function Index() {
  const renderItem = ({ item }: any) => {
    return <Portrait title={item.title} key={item.title} />;
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}
