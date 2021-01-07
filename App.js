import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <LottieView
            source={require('./src/assets/done.json')}
            autoPlay
            loop={false}
            resizeMode="cover"
            onAnimationFinish={() => alert('done')}
            style={{
              height: 400,
            }}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default App;
