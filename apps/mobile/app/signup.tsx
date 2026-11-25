import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import AuthForm from "@/components/AuthForm";
import { colors } from "@/constants/theme";

export default function SignupScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>Join TravelGo to make trip planning easier.</Text>
      <AuthForm mode="signup" />
      <Link href="/login" style={styles.link}>Already have an account? Log in</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 24, gap: 14 },
  title: { color: colors.navy, fontSize: 28, fontWeight: "800" },
  subtitle: { color: colors.muted, fontSize: 14, marginBottom: 8 },
  link: { color: colors.ocean, fontWeight: "700", textAlign: "center", padding: 12 },
});
