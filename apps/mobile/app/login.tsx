import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import AuthForm from "@/components/AuthForm";
import { colors } from "@/constants/theme";

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Log in to continue with TravelGo.</Text>
      <AuthForm mode="login" />
      <Link href="/signup" style={styles.link}>New to TravelGo? Sign up</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 24, gap: 14 },
  title: { color: colors.navy, fontSize: 28, fontWeight: "800" },
  subtitle: { color: colors.muted, fontSize: 14, marginBottom: 8 },
  link: { color: colors.ocean, fontWeight: "700", textAlign: "center", padding: 12 },
});
