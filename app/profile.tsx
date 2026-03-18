import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const profile = () => {
  const router = useRouter();
  const { email, userName } = useAuth();

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle" size={80} color="#0077ff" />

      <Text style={styles.title}>{userName}</Text>

      <View style={styles.subContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
          <View style={styles.line} />
          <Text style={styles.label}>Account Status:</Text>
          <Text style={styles.value}>Active</Text>
        </View>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={18} color="#ffffff" />
          <Text style={styles.btnText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subContainer: {
    width: "100%",
  },
  infoCard: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: "1px 5px 3.84px rgba(0, 0, 0, 0.25)",
    elevation: 3,
    overflow: "hidden",
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
  },
  btnContainer: {
    backgroundColor: "#00a2ff",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "white",
  },
});
export default profile;
