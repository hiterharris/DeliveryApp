import { useQuery } from '@apollo/client';
import {
  GET_PRODUCTS,
  GET_BEER_LIST,
  GET_WINE_LIST,
  GET_TOBACCO_LIST,
  GET_VAPE_LIST
} from '../apollo/queries';

const getData = () => {
  const { data: productsData } = useQuery(GET_PRODUCTS);
  const { data: beerData } = useQuery(GET_BEER_LIST);
  const { data: wineData } = useQuery(GET_WINE_LIST);
  const { data: tobaccoData } = useQuery(GET_TOBACCO_LIST);
  const { data: vapeData } = useQuery(GET_VAPE_LIST);
  return { productsData, beerData, wineData, tobaccoData, vapeData };
}

export const useData = () => {
  const { productsData, beerData, wineData, tobaccoData, vapeData } = getData();
  const products = productsData.products;
  const beer = beerData.beer;
  const wine = wineData.wine;
  const tobacco = tobaccoData.tobacco;
  const vape = vapeData.vape;
  return {  products, beer, wine, tobacco, vape };
}
