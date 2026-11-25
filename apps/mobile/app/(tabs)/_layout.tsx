import { Tabs } from "expo-router";
import { colors } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: colors.white },
      headerTintColor: colors.navy,
      headerTitleStyle: { fontWeight: "800" },
      tabBarActiveTintColor: colors.ocean,
      tabBarInactiveTintColor: colors.muted,
      tabBarStyle: { backgroundColor: colors.white, borderTopColor: colors.border },
    }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarLabel: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search buses", tabBarLabel: "Search" }} />
      <Tabs.Screen name="account" options={{ title: "Your account", tabBarLabel: "Account" }} />
    </Tabs>
  );
}
