import { DarkTheme } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerShown: false,
      statusBarStyle: "light",
    }}
  />;
}
