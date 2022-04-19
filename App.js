import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Loader from './Loader';
import AnimatedLoader from './AnimatedLoader';

export default function App() {
    return (
        <View style={styles.container}>
            <AnimatedLoader />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
