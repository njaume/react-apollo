import {
  Button,
  ProductCard as ProductCardContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from '../styles';

export function ProductCard({ product, handleAddItem }: { product: any, handleAddItem: Function }) {

  return (
        <ProductCardContainer key={product.id}>
          <ProductImage src={product?.assets[0]?.source} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'} }>
          <ProductPrice>${product?.variants[0]?.price}</ProductPrice>
          <Button onClick={() => handleAddItem(product?.variants[0]?.id)}>Add</Button>
          </div>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductCardContainer>
  );
}
