import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    // TODO: set auth state in context or AsyncStorage
    router.replace('/(tabs)');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Page</Text>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
