import React from 'react'
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {
 return (
  <View style={styles.container}>
   <View style={styles.profile}>
    <Image 
     style={styles.avatar}
     source={{ uri: 'https://github.com/Vinidevsantos.png' }}
    />  

    <View style={styles.profileInfo}>
      <Text style={styles.name}>Vinicius Santos</Text>
      <Text style={styles.subject}>Fotografia</Text>
    </View>
   </View>

   <Text style={styles.bio}>
     My name is Vinicius Santos from Brazil ( 🇧🇷 ).
     {'\n'}I've been working as Front-End Developer since 2019 .
     {'\n'}I'm passionate about open source projects.
   </Text>

   <View style={styles.footer}>
    <Text style={styles.price}>
      Preco/hora {'   '}
      <Text style={styles.priceValue}>R$20.00</Text>
     </Text> 

     <View style={styles.buttonsContainer}>

      <RectButton style={[ styles.favoriteButton, styles.favorited ]}>
       {/* <Image source={heartOutlineIcon} /> */}
       <Image source={unfavoriteIcon} />
      </RectButton>

      <RectButton style={styles.contactButton}>
       <Image source={whatsappIcon} />
       <Text style={styles.contactButtonText}>Entrar em contato</Text>
      </RectButton>

     </View>
   </View>
  </View>
 )

}

export default TeacherItem;