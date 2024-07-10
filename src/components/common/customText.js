import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({ style, ...props }) => {
  let fontFamily = "NotoSerif";

  const { fontWeight } = StyleSheet.flatten(style) || {};

  if (fontWeight >= 800) {
    fontFamily = "NotoSerifBold";
  }

  const customStyle = StyleSheet.flatten([
    style,
    { fontFamily, fontWeight: undefined },
  ]);

  return <Text {...props} style={customStyle} />;
};

export default CustomText;
