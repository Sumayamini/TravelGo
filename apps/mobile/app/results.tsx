import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

export default function ResultsScreen() {
  const { from, to, date } = useLocalSearchParams<{ from?: string; to?: string; date?: string }>();
  const hasRoute = Boolean(from && to && date);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>BUS SEARCH</Text>
        <Text style={styles.title}>{hasRoute ? `${from} to ${to}` : "Plan your next journey"}</Text>
        {hasRoute ? <Text style={styles.date}>Journey date: {date}</Text> : null}
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Search results are coming soon</Text>
          <Text style={styles.body}>
            {hasRoute ? "Bus listings are not available yet. No live availability is shown in this preview." : "Choose a route and date to prepare a search."}
          </Text>
        </View>
        <Link href="/(tabs)/search" style={styles.button}>Change search</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  card: { backgroundColor: colors.white, borderRadius: 18, padding: 22, borderWidth: 1, borderColor: colors.border, gap: 14 },
  eyebrow: { color: colors.ocean, fontSize: 11, fontWeight: "800", letterSpacing: 1.2 },
  title: { color: colors.navy, fontSize: 25, fontWeight: "800" },
  date: { color: colors.muted, fontSize: 14 },
  empty: { backgroundColor: colors.background, borderRadius: 12, padding: 18, gap: 8, marginTop: 4 },
  emptyTitle: { color: colors.navy, fontSize: 16, fontWeight: "700" },
  body: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  button: { overflow: "hidden", backgroundColor: colors.ocean, borderRadius: 10, color: colors.white, textAlign: "center", paddingVertical: 14, fontWeight: "700" },
});
