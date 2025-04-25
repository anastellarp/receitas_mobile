import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreens from "./screens/HomeScreens";
import ReceitaScreens from "./screens/ReceitaScreens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 6,
              shadowOpacity: 0.4,
              shadowOffset: { width: 0, height: 3 },
              backgroundColor: "#3E2C90",
              shadowRadius: 6,
            },
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 22,
            },
            headerTintColor: "#FAFAFA",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreens}
            options={{ title: "Receitas" }}
          />
          <Stack.Screen
            name="Receita"
            component={ReceitaScreens}
            options={({ route }) => ({
              title: route.params.receita.nome,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
