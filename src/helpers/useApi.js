export const useApiDummy = async () => {
  const productos = await fetch("https://dummyjson.com/products?limit=20");
  const data = await productos.json();
  return data;
};
