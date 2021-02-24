import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
          id
          title
          image
        }
    }
`;

export const GET_BEER_LIST = gql`
  query GetBeer {
    beer {
          id
          title
          price
          image
        }
    }
`;

export const GET_WINE_LIST = gql`
  query GetWine {
    wine {
          id
          title
          price
          image
        }
    }
`;

export const GET_TOBACCO_LIST = gql`
  query GetTobacco {
    tobacco {
          id
          title
          price
          image
        }
    }
`;

export const GET_VAPE_LIST = gql`
  query GetVape {
    vape {
          id
          title
          price
          image
        }
    }
`;
