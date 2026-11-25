import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "@/constants/theme";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function submit() {
    if (isSignup && !name.trim()) {
      setMessage("Enter your name to continue.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage("Enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }
    setMessage("Account access is coming soon. Your details have not been sent or saved.");
  }

  return (
    <View style={styles.form}>
      {isSignup && (
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Full name"
          autoComplete="name"
          accessibilityLabel="Full name"
          style={styles.input}
        />
      )}
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        autoComplete="email"
        keyboardType="email-address"
        autoCapitalize="none"
        accessibilityLabel="Email address"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password (at least 8 characters)"
        autoComplete={isSignup ? "new-password" : "current-password"}
        secureTextEntry
        accessibilityLabel="Password"
        style={styles.input}
      />
      <Pressable
        accessibilityRole="button"
        onPress={submit}
        style={styles.submit}
      >
        <Text style={styles.submitText}>{isSignup ? "Create account" : "Log in"}</Text>
      </Pressable>
      {message ? <Text accessibilityRole="alert" style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 14 },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 10, backgroundColor: colors.white, paddingHorizontal: 14, paddingVertical: 14, color: colors.ink },
  submit: { backgroundColor: colors.ocean, borderRadius: 10, alignItems: "center", paddingVertical: 15, marginTop: 3 },
  submitText: { color: colors.white, fontSize: 15, fontWeight: "700" },
  message: { color: colors.muted, fontSize: 13, lineHeight: 19 },
});
