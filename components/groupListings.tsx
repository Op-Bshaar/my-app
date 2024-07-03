import { ListRenderItem, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import {GroupList} from '@/types/grouplType'
import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({ List }: { List: GroupList[] }) => {
    const renderItem: ListRenderItem<GroupList> = ({ item }) => {
        return (
            <View style={styles.wrapper}>
                <Image
                    source={require('@/assets/bali.jpg')}
                    style={styles.image}
                />
                <View>
                    <Text>{item.name}</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                      <Ionicons name="star" size={20} color={colors.primaryColor}/>
                      <Text style={styles.rating}>{item.rating}</Text>
                      <Text style = {styles.review}>{item.review}</Text>
                    </View>
                </View>
            </View>     
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top travel</Text>
            <FlatList
                data={List}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
export default GroupListings


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical:20,
        backgroundColor: "white"

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    wrapper: {
        flexDirection: 'row',
        padding: 2,
        marginRight: 20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    rating:{
      marginLeft:5,
      color:colors.black,
      fontSize:15,
      fontWeight:"500"
    },
    review:{
      fontSize:15,
      color:colors.black,
      marginLeft:5,
    }
})



