export const trimProduct = product => ({
  productName: product.productName.trim(),
  price: product.price,
  id: product.id
});