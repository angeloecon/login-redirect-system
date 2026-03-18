import React from "react";
import { StyleSheet, View } from "react-native";

const CardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  cardContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    boxShadow: "1px 5px 3.84px rgba(0, 0, 0, 0.25)",
    elevation: 3,
    overflow: "hidden",
  },
});

export default CardTemplate;
