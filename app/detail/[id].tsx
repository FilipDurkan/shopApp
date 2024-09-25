import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import products from "../../products.json";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductDetail = () => {
  const { id } = useGlobalSearchParams();
  const product = products.find((p) => p.productId === (id as string));
  const [selectedSize, setSelectedSize] = useState("");
  const router = useRouter();
  if (!product) {
    return (
      <View style={styles.container}>
        <View style={styles.backWrapper}>
          <Ionicons name="arrow-back" size={20} />
          <Text style={styles.backText}>Back to All Products</Text>
        </View>
        <Text style={styles.name}>Product not found</Text>
      </View>
    );
  }

  const back = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.backWrapper} onPress={back}>
        <Ionicons name="arrow-back" size={20} />
        <Text style={styles.backText}>Back to All Products</Text>
      </Pressable>
      <Image source={{ uri: product.mainImageUrl }} style={styles.coverImage} />
      <View style={styles.infoWrapper}>
        <Text style={styles.brand}>{product.brandName}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.price / 1000} €</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </View>
      <Text style={styles.sizeText}>Size</Text>
      <View style={styles.sizesWrapper}>
        {product.sizes.map((size) => (
          <TouchableOpacity
            key={size.id}
            style={[
              styles.sizeValueContainer,
              {
                backgroundColor: selectedSize === size.name ? "#E96E6E" : "#fff"
              }
            ]}
            onPress={() => setSelectedSize(size.name)}
          >
            <Text
              style={{ color: selectedSize === size.name ? "#fff" : "#000" }}
            >
              {size.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 100,
    backgroundColor: "#fff1f3",
    flex: 1
  },
  backWrapper: {
    display: "flex",
    flexDirection: "row",
    columnGap: 4,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 24
  },
  backText: {
    fontSize: 18
  },
  coverImage: {
    width: "100%",
    height: 300,
    marginBottom: 16,
    objectFit: "contain"
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8
  },
  name: {
    fontSize: 28,
    color: "#000000",
    fontWeight: "600"
  },
  brand: {
    fontSize: 20,
    color: "#9c9c9c"
  },
  desc: {
    fontSize: 18,
    fontWeight: "300",
    color: "#9c9c9c"
  },
  sizeText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "600",
    marginVertical: 12
  },
  sizesWrapper: {
    display: "flex",
    flexDirection: "row",
    columnGap: 8
  },
  sizeValueContainer: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 99
  }
});
