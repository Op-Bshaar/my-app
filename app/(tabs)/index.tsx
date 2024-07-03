import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';
import { useHeaderHeight } from '@react-navigation/elements';
import CategoriesButton from '@/components/categoriesButton';
import Listings from '@/components/listings'
import listingdata from '@/data/destination.json'; 
import GroupListings from '@/components/groupListings';
import GroupData from'@/data/group.json'
import { ScrollView } from 'react-native';


const Page = () => {
  const headerHeight = useHeaderHeight();
  const [update, setupdat] = useState('All');
  const updateCatgo = (category: string) => {
    setupdat(category);
  }
  return (
    <>
      <Stack.Screen 
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 10}}>
              <Image 
                source={require('@/assets/2.png')}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}} style={{
              marginRight: 20,
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 10
            }}>
              <Ionicons name="notifications" size={20} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingText}>Explore the beautiful world with us!</Text>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <TextInput placeholder='Search...' />
              <Ionicons name='search' size={20} />
            </View>
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Ionicons name='options' size={28} style={styles.optionsStyle} />
              </TouchableOpacity>
            </View>
          </View>
          <CategoriesButton updateCatgo={updateCatgo} />
          <Listings listings = {listingdata}/>
          <GroupListings List = {GroupData}/>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 10,
    color: colors.black,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.bgColor,
    padding: 16,
    borderRadius: 10,
  },
  optionsStyle: {
    padding: 12,
    marginRight: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    marginLeft: 20,
    color: colors.white,
  },
});
