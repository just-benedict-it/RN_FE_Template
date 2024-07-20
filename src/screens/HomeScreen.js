import React from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { subscribedState } from "../atoms/state";
import { colors } from "../styles/colors";
import IconButton from "../components/common/iconButton";
import Header from "../components/layout/header";
import { LeftComponent, CenterComponent } from "../components/specific/HomeScreen/headerComponent";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [subscribed, setSubscribed] = useRecoilState(subscribedState);

  const goToStoreScreen = () => {
    navigation.navigate("StoreScreen");
    setSubscribed(true)
  };
  const handleLeftPress = () => {
    Alert.alert("Left button pressed");
  };
  const handleCenterPress = () => {
    Alert.alert("Center button pressed");
  };
  console.log("Home subscribed : ", subscribed);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<LeftComponent onPress={handleLeftPress} />}
        centerComponent={<CenterComponent onPress={handleCenterPress} />}
      />
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.8}
        onPress={goToStoreScreen}
      >
        <Text style={styles.addButtonText}>Go to Store Screen</Text>
        <IconButton
          iconSet="MaterialIcons"
          name="star"
          size={30}
          color={colors.primary}
          onPress={() => console.log("Star pressed!")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  addButton: {
    backgroundColor: colors.background,
    borderColor: colors.borderStroke,
    borderWidth: 2,
    borderRadius: 1000,
    padding: 15,
    margin: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButtonText: {
    color: colors.greyText,
    fontSize: 16,
    fontWeight: "700",
  },
});


