import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Product List", headerShown: false }}
      />
      <Stack.Screen
        name="detail/[id]"
        options={{ title: "Product Detail", headerShown: false }}
      />
    </Stack>
  );
}
