import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
	products {
        id
        title
        image
        data {
          id
          title
          price
          image
        }
      }
  }
`;
