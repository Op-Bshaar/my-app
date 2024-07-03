import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import CatgoriesData from '@/data/catgories';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '@/constants/colors';

type Prop = {
  updateCatgo: (categore: string) => void;
}

const CategoriesButton = ({ updateCatgo }: Prop) => {
  const animationRef = useRef<ScrollView>(null);
  const refResult = useRef<(TouchableOpacity | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = (index: number) => {
    const selected = refResult.current[index];
    setActiveIndex(index);

    selected?.measureLayout(
      animationRef.current!,
      (x, y, width, height) => {
        animationRef.current?.scrollTo({ x: x - 20, y: 0, animated: true });
      },
      (error) => console.error(error)
    );
    updateCatgo(CatgoriesData[index].title);
  };

  return (
    <View style={{marginTop:0}}>
      <Text style={styles.text}>Categories</Text>
      <ScrollView
        ref={animationRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          gap: 10,
          marginTop: 10,
        }}
      >
        {CatgoriesData.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => { refResult.current[index] = el }}
            onPress={() => handlePress(index)}
            style={activeIndex == index ? styles.categorebtn : styles.categore}
          >
            <MaterialIcons
              name={item.iconName as any}
              size={28}
              style={activeIndex == index ? styles.textbtn : { color: colors.black }}
            />
            <Text style={activeIndex == index ? styles.textbtn : { color: colors.black }}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesButton;

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 30,
    color:'#778890', 
    marginTop:0
  },
  categore: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowColor: '#333333',
    shadowRadius: 3,
    elevation: 3,
  },
  categorebtn: {
    flexDirection: 'row',
    backgroundColor: colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowColor: '#333333',
    shadowRadius: 3,
    elevation: 3,
  },
  textbtn: {
    color: colors.white,
    marginRight: 3,
  },
});
