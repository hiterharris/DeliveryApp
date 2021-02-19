import { useQuery } from '@apollo/client';
import { GET_USERS, GET_PRODUCTS } from '../apollo/queries';

export const useData = () => {
  const { data: users } = useQuery(GET_USERS);
  const { data: productsList } = useQuery(GET_PRODUCTS);
  return { users, productsList };
}
