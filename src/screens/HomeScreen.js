import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { subscribedState } from "../atoms/state";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [subscribed, setSubscribed] = useRecoilState(subscribedState);

  const goToStoreScreen = () => {
    navigation.navigate("StoreScreen");
    setSubscribed(true)
  };

  console.log("Home subscribed : ", subscribed);

  return (
    <View>
      <Text>Hello</Text>
      <Button title="Go to Store" onPress={goToStoreScreen} />
    </View>
  );
};
