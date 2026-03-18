import CardTemplate from "@/components/CardTemplate";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Email and Password cannot be empty.");
      console.log("Email and Password cannot be empty.");
      return;
    }

    if (username.indexOf("@email.com") == -1) {
      Alert.alert("Email is required.");
      console.log("Email is required.");
      return;
    }

    if (password.length < 3) {
      Alert.alert("Password should not be less than 3 letters.");
      return;
    }

    signIn(username);
    router.replace("/dashboard");
  };

  return (
    <CardTemplate>
      <Text style={styles.textHeader}>WELCOME</Text>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </KeyboardAvoidingView>

      <Pressable style={styles.btnSignIn} onPress={handleSignIn}>
        <Text style={styles.btnText}>Sign In</Text>
        <Ionicons name="log-in" size={30} color="#000000" />
      </Pressable>
    </CardTemplate>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginBottom: 30,
    gap: 20,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  inputText: {
    padding: 10,

    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  btnSignIn: {
    backgroundColor: "#07e3eb",
    textAlign: "center",
    padding: 5,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
