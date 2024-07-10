import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StoreScreen } from "../screens/StoreScreen";

const Stack = createStackNavigator();

export function RootStackNavigation() {
  return (
    // initialRouteName : 첫 화면 (선택)
    // screenOptions : 스크린 전체에 주기 위한 옵션 (선택)
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* name, components: 루트와 렌더링을 위한 컴포넌트 (필수) options : 해당 */}
      {/* 스크린의 옵션 (선택) */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} />
    </Stack.Navigator>
  );
}
