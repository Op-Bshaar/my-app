import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import GroupListings from'@/components/groupListings'
type Props = {
  listings: any[];
  category: string;
};

const Listings = ({ listings, category }: Props) => {
  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => router.push('@/components/groupListings.tsx')}>
        <View style={styles.wrapperIamge}>
          <Image
            source={require('@/assets/Santorini-panorama.jpg')}
            style={styles.images}
          />
          <View style={styles.bookmark}>
            <Ionicons name="bookmark-outline" size={20} style={{ color: 'white' }} />
          </View>
          <Text style={styles.text}>{item.name}</Text>

          <View style={styles.price}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location" size={28} style={{ color: colors.primaryColor }} />
              <Text>{item.location}</Text>
            </View>
            <Text style={{ color: colors.primaryColor }}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  wrapperIamge: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    width: 220,
    marginRight: 20,
  },
  images: {
    width: 200,
    height: 200,
    borderRadius: 10,
    padding: 1,
    marginBottom: 20,
  },
  bookmark: {
    position: 'absolute',
    top: 185,
    right: 30,
    backgroundColor: colors.primaryColor,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
    color: colors.black,
  },
  price: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
