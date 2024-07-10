import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { subscribedState } from "../atoms/state";
export const StoreScreen = () => {
  const navigation = useNavigation();
  const [subscribed, setSubscribed] = useRecoilState(subscribedState);

  return (
    <View>
      <Text>Welcome to the Store</Text>
      <Button title="Go back to Home" onPress={() => {navigation.goBack();setSubscribed(false)}} />
    </View>
  );
};
