import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../theme";

export default function RecipeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  
  },
  
});
