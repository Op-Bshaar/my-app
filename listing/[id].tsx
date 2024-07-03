import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ListingTypes } from '@/types/listyType';
import listData from '@/data/destination.json'; 

const ListingDeatilse = () => {
  const { id } = useLocalSearchParams();
  

  const listingId = Number(id);
  
  const listing: ListingTypes | undefined = (listData as ListingTypes[]).find(
    (item) => item.id === listingId
  );

  if (!listing) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Listing not found</Text>
      </View>
    );
  }

  return (

    <>
     <Stack.Screen options={{
      headerTransparent:true,
      headerTitle:"",
     }}/>
      <View style={styles.container}>
        <Text style={styles.title}>{listing.name}</Text>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <Text style={styles.description}>{listing.description}</Text>
        <Text style={styles.details}>Location: {listing.location}</Text>
        <Text style={styles.details}>Price: ${listing.price}</Text>
        <Text style={styles.details}>Rating: {listing.rating}</Text>
        <Text style={styles.details}>Duration: {listing.duration}</Text>
      </View>

      <View style={styles.footer}>
          <TouchableOpacity>
              <Text>Book now</Text>       
          </TouchableOpacity>

          <TouchableOpacity>
              <Text>${listing.price}</Text>       
          </TouchableOpacity>
      </View>
    </>
  );
};

export default ListingDeatilse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },

  footer:{

  }
});
