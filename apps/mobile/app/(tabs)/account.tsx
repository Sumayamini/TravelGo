import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your TravelGo account</Text>
      <Text style={styles.subtitle}>Sign in or create an account. Account services are not connected yet.</Text>
      <Link href="/login" style={styles.primary}>Log in</Link>
      <Link href="/signup" style={styles.secondary}>Create an account</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, gap: 14 },
  title: { color: colors.navy, fontSize: 25, fontWeight: "800" },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 22, marginBottom: 10 },
  primary: { overflow: "hidden", backgroundColor: colors.ocean, borderRadius: 10, color: colors.white, textAlign: "center", paddingVertical: 15, fontWeight: "700" },
  secondary: { overflow: "hidden", borderWidth: 1, borderColor: colors.ocean, borderRadius: 10, color: colors.ocean, textAlign: "center", paddingVertical: 14, fontWeight: "700" },
});
