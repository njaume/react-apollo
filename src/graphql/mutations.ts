import { gql } from '@apollo/client';

  
export const ADD_ITEM_TO_ORDER = gql`
fragment OrderParts on Order {
    id
    lines {
          id
          productVariant {
            id
            name
          }
          quantity
        }
        totalQuantity
        subTotal
        total
  }

  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...OrderParts
    }
  }
`;
