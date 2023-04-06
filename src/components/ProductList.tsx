import { useMutation } from '@apollo/client';
import {
  Button,
  ProductCard,
  ProductCardGrid,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from '../styles';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';

export function ProductList({ products }: { products: any }) {
  const [addItemToOrder, { loading, error, data }] = useMutation(ADD_ITEM_TO_ORDER);

  const handleAddItem = (productVariantId : number) => {
  //  event.preventDefault();
    addItemToOrder({
      variables: {
        productVariantId: productVariantId,
        quantity: 1,
      },
    });
  };

  return (
    <ProductCardGrid>
      {products?.map((product: any) => (
        <ProductCard key={product.id}>
          <ProductImage src={product?.assets[0]?.source} alt={product.title} />
          <ProductTitle>{product.name}</ProductTitle>
          <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'} }>
          <ProductPrice>${product?.variants[0]?.price}</ProductPrice>
          <Button onClick={() => handleAddItem(product?.variants[0]?.id)}>Add</Button>
          </div>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductCard>
      ))}
    </ProductCardGrid>
  );
}
