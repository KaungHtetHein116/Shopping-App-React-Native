import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as theme from '../../util/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {onEditAddress} from '../../redux/actions/UserAction';
import * as yup from 'yup';

const reviewSchema = yup.object({
  addressType: yup.string().required('Required Field').min(3),
  streetAddress: yup.string().required('Required Field').min(5),
  streetAddress2: yup.string().required('Required Field').min(5),
  city: yup.string().required('Required Field').min(5),
  state: yup.string().required('Required Field').min(5),
  postalCode: yup.number().required('Required Field').min(4),
  country: yup.string().required('Required Field').min(5),
});

export default function AddAddressComponent({onClose, item}) {
  const dispatch = useDispatch();
  return (
    <View behavior="position" style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => onClose()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome5
            name="address-book"
            color={'dodgerblue'}
            size={30}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: theme.sizes.h1, color: 'dodgerblue'}}>
            Address Form
          </Text>
        </View>
        <View style={{height: 30, width: 30}} />
      </View>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{
            id: item.id,
            addressType: item.addressType,
            streetAddress: item.streetAddress,
            streetAddress2: item.streetAddress2,
            city: item.city,
            state: item.state,
            postalCode: item.postalCode,
            country: item.country,
          }}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            dispatch(onEditAddress(values));
            onClose();
          }}>
          {(props) => {
            return (
              <View>
                <Text style={styles.text}>Address Name</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Example: Home Address"
                  onChangeText={props.handleChange('addressType')}
                  value={props.values.addressType}
                />
                {props.errors.addressType && (
                  <View style={{marginBottom: 15, marginTop: -5}}>
                    <Text style={{color: 'red'}}>
                      {props.errors.addressType}
                    </Text>
                  </View>
                )}
                <Text style={styles.text}>Street Address</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Example: Bundula Street"
                  onChangeText={props.handleChange('streetAddress')}
                  value={props.values.streetAddress}
                />
                {props.errors.streetAddress && (
                  <View style={{marginBottom: 15, marginTop: -5}}>
                    <Text style={{color: 'red'}}>
                      {props.errors.streetAddress}
                    </Text>
                  </View>
                )}
                <Text style={styles.text}>Street Address Line 2</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Example: Bundula Street 2"
                  onChangeText={props.handleChange('streetAddress2')}
                  value={props.values.streetAddress2}
                />
                {props.errors.streetAddress2 && (
                  <View style={{marginBottom: 15, marginTop: -5}}>
                    <Text style={{color: 'red'}}>
                      {props.errors.streetAddress2}
                    </Text>
                  </View>
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '40%'}}>
                    <Text style={styles.text}>City</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Example: Dagon"
                      onChangeText={props.handleChange('city')}
                      value={props.values.city}
                    />
                    {props.errors.city && (
                      <View style={{marginBottom: 15, marginTop: -5}}>
                        <Text style={{color: 'red'}}>{props.errors.city}</Text>
                      </View>
                    )}
                  </View>
                  <View style={{width: '50%'}}>
                    <Text style={styles.text}>State/Province</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Example: Yangon"
                      onChangeText={props.handleChange('state')}
                      value={props.values.state}
                    />
                    {props.errors.state && (
                      <View style={{marginBottom: 15, marginTop: -5}}>
                        <Text style={{color: 'red'}}>{props.errors.state}</Text>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '40%'}}>
                    <Text style={styles.text}>Postal / Zip Code</Text>
                    <TextInput
                      style={styles.textInput}
                      keyboardType="number-pad"
                      placeholder="Example: 7966"
                      onChangeText={props.handleChange('postalCode')}
                      value={props.values.postalCode}
                    />
                    {props.errors.postalCode && (
                      <View style={{marginBottom: 15, marginTop: -5}}>
                        <Text style={{color: 'red'}}>
                          {props.errors.postalCode}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={{width: '50%'}}>
                    <Text style={styles.text}>Country</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Example: Myanmar"
                      onChangeText={props.handleChange('country')}
                      value={props.values.country}
                    />
                    {props.errors.country && (
                      <View style={{marginBottom: 15, marginTop: -5}}>
                        <Text style={{color: 'red'}}>
                          {props.errors.country}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.submitBtn}
                    activeOpacity={0.8}
                    onPress={() => {
                      props.handleSubmit();
                    }}>
                    <Text style={{color: 'white'}}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  submitBtn: {
    width: '50%',
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'grey',
  },
  text: {},
  textInput: {
    backgroundColor: '#F4F4FA',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import * as theme from '../../util/theme';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {Formik} from 'formik';
// import {useDispatch} from 'react-redux';
// import {onEditAddress} from '../../redux/actions/UserAction';

// export default function EditAddressComponent({onClose, item}) {
//   const dispatch = useDispatch();
//   return (
//     <KeyboardAwareScrollView behavior="position" style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => onClose()}>
//           <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'} />
//         </TouchableOpacity>
//         <View style={{flexDirection: 'row'}}>
//           <FontAwesome5
//             name="address-book"
//             color={'dodgerblue'}
//             size={30}
//             style={{marginRight: 10}}
//           />
//           <Text style={{fontSize: theme.sizes.h1, color: 'dodgerblue'}}>
//             Address Form
//           </Text>
//         </View>
//         <View style={{height: 30, width: 30}} />
//       </View>
//       <Formik
//         initialValues={{
//           id: item.id,
//           addressType: item.addressType,
//           streetAddress: item.streetAddress,
//           streetAddress2: item.streetAddress2,
//           city: item.city,
//           state: item.state,
//           postalCode: item.postalCode,
//           country: item.country,
//         }}
//         onSubmit={(values) => {
//           dispatch(onEditAddress(values));
//         }}>
//         {(props) => {
//           return (
//             <View>
//               <Text style={styles.text}>Address Type</Text>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Example: Home Address"
//                 onChangeText={props.handleChange('addressType')}
//                 value={props.values.addressType}
//               />
//               <Text style={styles.text}>Street Address</Text>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Example: Bundula Street"
//                 onChangeText={props.handleChange('streetAddress')}
//                 value={props.values.streetAddress}
//               />
//               <Text style={styles.text}>Street Address Line 2</Text>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Example: Bundula Street 2"
//                 onChangeText={props.handleChange('streetAddress2')}
//                 value={props.values.streetAddress2}
//               />
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <View style={{width: '40%'}}>
//                   <Text style={styles.text}>City</Text>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="Example: Dagon"
//                     onChangeText={props.handleChange('city')}
//                     value={props.values.city}
//                   />
//                 </View>
//                 <View style={{width: '50%'}}>
//                   <Text style={styles.text}>State/Province</Text>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="Example: Yangon"
//                     onChangeText={props.handleChange('state')}
//                     value={props.values.state}
//                   />
//                 </View>
//               </View>
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <View style={{width: '40%'}}>
//                   <Text style={styles.text}>Postal / Zip Code</Text>
//                   <TextInput
//                     style={styles.textInput}
//                     keyboardType="number-pad"
//                     placeholder="Example: 7966"
//                     onChangeText={props.handleChange('postalCode')}
//                     value={props.values.postalCode}
//                   />
//                 </View>
//                 <View style={{width: '50%'}}>
//                   <Text style={styles.text}>Country</Text>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="Example: Myanmar"
//                     onChangeText={props.handleChange('country')}
//                     value={props.values.country}
//                   />
//                 </View>
//               </View>
//               <View style={{justifyContent: 'center', alignItems: 'center'}}>
//                 <TouchableOpacity
//                   style={styles.submitBtn}
//                   activeOpacity={0.8}
//                   onPress={() => {
//                     props.handleSubmit();
//                     onClose();
//                   }}>
//                   <Text style={{color: 'white'}}>Submit</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           );
//         }}
//       </Formik>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 10,
//     backgroundColor: 'white',
//   },
//   submitBtn: {
//     width: '50%',
//     backgroundColor: 'dodgerblue',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: 'grey',
//   },
//   text: {},
//   textInput: {
//     backgroundColor: '#F4F4FA',
//     borderRadius: 25,
//     flexDirection: 'row',
//     padding: 15,
//     marginVertical: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: 60,
//     marginHorizontal: 10,
//     marginBottom: 10,
//   },
// });
