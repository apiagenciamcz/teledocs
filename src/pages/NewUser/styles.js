import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: "#282c34",
    fontSize: 30,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    margin: 10
  },
  label: {
    fontSize: 14,
    color: "#999",
    padding: 3,
    flex: 1,
    marginTop: -10
  },
  input: {
    color: "#282c34",
    fontSize: 15,
    paddingLeft: Platform.OS === "ios" ? 20 : 10
  },
  inputLabel: {
    color: "#282c34",
    fontSize: 15
  }
});

export default styles;
