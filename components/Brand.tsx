import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
interface BrandProps {
  item: string;
  selectedBrand: string;
  handleBrandChange: (brand: string) => void;
}
const Brand = ({ item, selectedBrand, handleBrandChange }: BrandProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleBrandChange(item)}
      style={styles.pressWrapper}
    >
      <Text
        style={[
          styles.categoryText,
          selectedBrand === item && {
            color: "#fff",
            backgroundColor: "#E96E6E"
          }
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Brand;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#938F8F",
    backgroundColor: "#DFDCDC",
    textAlign: "center",
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16
  },
  pressWrapper: {
    borderRadius: 16
  }
});
