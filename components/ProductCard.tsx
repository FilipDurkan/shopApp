import { Href, Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface ProductCardProps {
  item: Product;
}
const getUrl = (id: string) => {
  const url = `/detail/${id}` as Href<string>;
  return url;
};
const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Link href={getUrl(item.productId)} style={styles.container}>
      <Image source={{ uri: item.mainImageUrl }} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.brandName}>{item.brandName}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.price}>{item.price / 1000} €</Text>
      </View>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  coverImage: {
    height: 150,
    width: 150,
    borderRadius: 20,
    objectFit: "cover",
    marginBottom: 16
  },
  content: {
    paddingLeft: 15,
    display: "flex",
    flexDirection: "column",
    rowGap: 4,
    marginVertical: 10
  },
  brandName: {
    fontSize: 14,
    color: "#9c9c9c",
    fontWeight: "600"
  },
  itemName: {
    fontSize: 18,
    color: "#444",
    fontWeight: "600"
  },
  price: {
    fontSize: 18,
    color: "#9c9c9c",
    fontWeight: "600"
  }
});
