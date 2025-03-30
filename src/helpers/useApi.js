export const fetchApiDummy = async (idDummyjson) => {
  const productos = await fetch(
    idDummyjson
      ? `https://dummyjson.com/products/${idDummyjson}`
      : "https://dummyjson.com/products"
  );
  const data = await productos.json();
  //console.log(data);
  return data;
};
