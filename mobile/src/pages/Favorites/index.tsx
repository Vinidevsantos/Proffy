import React from 'react'
import { View } from 'react-native'

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites(){
 return (
  <View style={styles.container}>
   <PageHeader title="Meus Proffys favoritos" />
  </View>
 )
}

export default Favorites;