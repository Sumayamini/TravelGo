import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants/theme";

const cities = ["Bengaluru", "Chennai", "Hyderabad", "Kochi", "Mumbai", "Mysuru", "Pune", "Tirupati"];

function localDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function CityChoices({ label, value, onSelect }: { label: string; value: string; onSelect: (city: string) => void }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.cityGrid}>
        {cities.map((city) => (
          <Pressable
            key={city}
            onPress={() => onSelect(city)}
            accessibilityRole="button"
            accessibilityState={{ selected: city === value }}
            style={[styles.cityOption, city === value && styles.cityOptionSelected]}
          >
            <Text style={[styles.cityOptionText, city === value && styles.cityOptionTextSelected]}>{city}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default function BusSearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(localDateString);
  const [error, setError] = useState("");

  function search() {
    if (!from || !to) {
      setError("Choose both cities to continue.");
      return;
    }
    if (from === to) {
      setError("Choose two different cities.");
      return;
    }
    const dateParts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    if (!dateParts) {
      setError("Enter a valid date in YYYY-MM-DD format.");
      return;
    }
    const [, yearText, monthText, dayText] = dateParts;
    const year = Number(yearText);
    const month = Number(monthText);
    const day = Number(dayText);
    const parsedDate = new Date(year, month - 1, day);
    if (
      parsedDate.getFullYear() !== year ||
      parsedDate.getMonth() !== month - 1 ||
      parsedDate.getDate() !== day
    ) {
      setError("Enter a valid date in YYYY-MM-DD format.");
      return;
    }
    if (date < localDateString()) {
      setError("Journey date cannot be in the past.");
      return;
    }
    setError("");
    router.push({ pathname: "/results", params: { from, to, date } });
  }

  return (
    <View style={styles.card}>
      <CityChoices label="From" value={from} onSelect={setFrom} />
      <View style={styles.divider} />
      <CityChoices label="To" value={to} onSelect={setTo} />
      <View style={styles.divider} />
      <Text style={styles.label}>Journey date</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        keyboardType="numbers-and-punctuation"
        autoCapitalize="none"
        accessibilityLabel="Journey date in year-month-day format"
        style={styles.dateInput}
      />
      <Text style={styles.dateHint}>Use YYYY-MM-DD</Text>
      {error ? <Text accessibilityRole="alert" style={styles.error}>{error}</Text> : null}
      <Pressable style={styles.submit} onPress={search} accessibilityRole="button">
        <Text style={styles.submitText}>Search buses</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.white, borderRadius: 18, padding: 18, gap: 12, borderWidth: 1, borderColor: colors.border },
  label: { color: colors.muted, fontSize: 12, fontWeight: "700", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.8 },
  cityGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  cityOption: { borderWidth: 1, borderColor: colors.border, borderRadius: 18, paddingHorizontal: 11, paddingVertical: 8 },
  cityOptionSelected: { backgroundColor: colors.sky, borderColor: colors.ocean },
  cityOptionText: { color: colors.ink, fontSize: 12, fontWeight: "600" },
  cityOptionTextSelected: { color: colors.ocean },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 2 },
  dateInput: { borderWidth: 1, borderColor: colors.border, borderRadius: 10, color: colors.ink, paddingHorizontal: 12, paddingVertical: 12 },
  dateHint: { color: colors.muted, fontSize: 12, marginTop: -7 },
  error: { color: colors.danger, fontSize: 13, lineHeight: 19 },
  submit: { backgroundColor: colors.ocean, borderRadius: 10, alignItems: "center", paddingVertical: 15, marginTop: 4 },
  submitText: { color: colors.white, fontWeight: "700", fontSize: 15 },
});
