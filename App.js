import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigation } from "./src/navigation/RootStackNavigator";
import { RecoilRoot } from "recoil";

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSerif: require("./assets/fonts/NotoSerif.ttf"),
    NotoSerifBold: require("./assets/fonts/NotoSerifBold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // 폰트 로딩 중에는 렌더링을 방지
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}
