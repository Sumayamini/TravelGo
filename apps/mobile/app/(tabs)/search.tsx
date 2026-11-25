import { ScrollView, StyleSheet, Text } from "react-native";
import BusSearchForm from "@/components/BusSearchForm";
import { colors } from "@/constants/theme";

export default function SearchScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Where are you headed?</Text>
      <Text style={styles.subtitle}>Choose a route and date to prepare your bus search.</Text>
      <BusSearchForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 12, paddingBottom: 36 },
  title: { color: colors.navy, fontSize: 26, fontWeight: "800", marginTop: 8 },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21, marginBottom: 8 },
});
