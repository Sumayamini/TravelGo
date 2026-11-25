import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BusSearchForm from "@/components/BusSearchForm";
import { colors } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>YOUR NEXT JOURNEY STARTS HERE</Text>
        <Text style={styles.title}>A better way to get there.</Text>
        <Text style={styles.subtitle}>Plan your bus journey with a little more ease.</Text>
      </View>
      <BusSearchForm />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>Thoughtful journeys start here</Text>
        <Text style={styles.infoBody}>Choose your cities and travel date to prepare a search. Bus listings will be added in a later phase.</Text>
        <Link href="/(tabs)/search" style={styles.link}>Go to search</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 20, paddingBottom: 36 },
  hero: { paddingTop: 10, gap: 10 },
  eyebrow: { color: colors.ocean, fontSize: 11, fontWeight: "800", letterSpacing: 1.4 },
  title: { color: colors.navy, fontSize: 34, lineHeight: 41, fontWeight: "800" },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 23 },
  info: { backgroundColor: colors.sky, borderRadius: 16, padding: 18, gap: 8 },
  infoTitle: { color: colors.navy, fontWeight: "700", fontSize: 16 },
  infoBody: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  link: { color: colors.ocean, fontWeight: "700", paddingTop: 3 },
});
