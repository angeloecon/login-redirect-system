import CardTemplate from "@/components/CardTemplate";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const dashboard = () => {
  const router = useRouter();
  const { isLoggedIn, signOut, userName } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);

  const handleSignout = () => {
    signOut();
    router.replace("/");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  if (!isLoggedIn) return null;

  return (
    <CardTemplate>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome, {userName}!</Text>

      <View style={styles.buttonContainer}>
        <Button title="Go to Profile" onPress={handleProfile} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Logout" color="red" onPress={handleSignout} />
      </View>
    </CardTemplate>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "100%",
  },
});

export default dashboard;
