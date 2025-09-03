import { Text, View } from "react-native";
import { WelcomeText } from "../components/WelcomeText"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to index.tsx</Text>
      <WelcomeText />
    </View>
  );
}
