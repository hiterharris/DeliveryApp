import { useQuery } from '@apollo/client';
import {
  GET_PRODUCTS,
  GET_BEER_LIST,
  GET_WINE_LIST,
  GET_TOBACCO_LIST,
  GET_VAPE_LIST
} from '../apollo/queries';

const getData = () => {
  const { data: productsList } = useQuery(GET_PRODUCTS);
  const { data: beerList } = useQuery(GET_BEER_LIST);
  const { data: wineList } = useQuery(GET_WINE_LIST);
  const { data: tobaccoList } = useQuery(GET_TOBACCO_LIST);
  const { data: vapeList } = useQuery(GET_VAPE_LIST);
  return { productsList, beerList, wineList, tobaccoList, vapeList };
}

export const useData = () => {
  const { productsList, beerList, wineList, tobaccoList, vapeList } = getData();
  const products = productsList.products;
  const beer = beerList.beer;
  const wine = wineList.wine;
  const tobacco = tobaccoList.tobacco;
  const vape = vapeList.vape;
  return { products, beer, wine, tobacco, vape };
}
