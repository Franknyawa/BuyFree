import { Stack } from 'expo-router';

export default function ScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          
        },
        
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Login" />
      <Stack.Screen name="Register" />
    </Stack>
  );
}