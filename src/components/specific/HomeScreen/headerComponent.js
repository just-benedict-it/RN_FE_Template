import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
// LeftComponent
export const LeftComponent = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>Left</Text>
  </TouchableOpacity>
);

// CenterComponent
export const CenterComponent = () => (
  <View style={styles.centerContainer}>
    <Text style={styles.centerText}>Centersdfsdfsdf</Text>
  </View>
);

// RightComponent
export const RightComponent = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>Right</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: colors.background,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.background,
  },
  centerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.background,
  },
});
