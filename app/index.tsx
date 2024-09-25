import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from "react-native";
import products from "@/products.json";
import Fontisto from "react-native-vector-icons/Fontisto";
import ProductCard from "@/components/ProductCard";
import { brands } from "@/constants/brands";
import Brand from "@/components/Brand";

export default function Index() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    filterProducts();
  }, [selectedBrand, searchTerm]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedBrand !== "All") {
      filtered = filtered.filter(
        (product) => product.brandName === selectedBrand
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.shopTitle}>Shop our Products</Text>

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.productList}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color={"#c0c0c0"} />
              </View>

              <TextInput
                style={styles.textInput}
                placeholder="Search products..."
                placeholderTextColor={"#c0c0c0"}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
            <Text style={styles.brandHeader}>Choose brand:</Text>
            <FlatList
              data={brands}
              renderItem={({ item }) => (
                <Brand
                  item={item}
                  selectedBrand={selectedBrand}
                  handleBrandChange={handleBrandChange}
                />
              )}
              keyExtractor={(item: string, index: number) => `${item}-${index}`}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
    backgroundColor: "#fff1f3"
  },
  shopTitle: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    marginVertical: 10
  },
  iconContainer: {
    marginHorizontal: 20
  },
  textInput: {
    flex: 1,
    height: "100%",
    color: "#000"
  },
  listHeader: {
    marginBottom: 24
  },
  brandHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10
  },
  productList: {
    paddingBottom: 100
  }
});
