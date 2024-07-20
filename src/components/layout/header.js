import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const Header = ({ leftComponent, centerComponent, rightComponent }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {leftComponent ? leftComponent : <View />}
      </View>
      <View style={styles.center}>
        {centerComponent ? centerComponent : <View />}
      </View>
      <View style={styles.right}>
        {rightComponent ? rightComponent : <View />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.primary
  },
  left: {
    flex: 1,
    alignItems: "flex-start",
  },
  center: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default Header;
