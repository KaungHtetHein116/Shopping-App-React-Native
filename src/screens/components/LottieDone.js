import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const LottieDone = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <LottieView
            source={require('../../assets/done.json')}
            autoPlay
            loop={false}
            resizeMode="cover"
            onAnimationFinish={() => navigation.navigate('HomeScreen')}
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

export default LottieDone;
