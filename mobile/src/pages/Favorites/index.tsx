import React from 'react'
import { View, ScrollView } from 'react-native'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites(){
 return (
  <View style={styles.container}>
   <PageHeader title="Meus Proffys favoritos" />

   <ScrollView
    style={styles.teacherList}
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingBottom: 16,
    }}
    >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
    </ScrollView>
  </View>
 )
}

export default Favorites;