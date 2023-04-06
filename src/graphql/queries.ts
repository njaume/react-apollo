// Here we put queries. Remove next line
import { gql } from '@apollo/client';

export const GET_ORDER = gql`
  query getOrder($id: ID!) {
    order(id: $id) {
      id
      code
      state
      total
      lines {
        id
        productVariant {
          id
          name
          priceWithTax
        }
        quantity
        totalPriceWithTax
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
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
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        id
        name
        description
        assets {
          source
        }
        variants {
          id
          price
        }
      }
    }
  }
`;
