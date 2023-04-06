import { useQuery } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { GET_ACTIVE_ORDER, GET_PRODUCTS } from './graphql/queries';

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { loading: l, error: e, data : order } = useQuery(GET_ACTIVE_ORDER);
console.log('order', order)
  return (
    <>
      <Header order={order?.activeOrder}></Header>
      <div>
        <ProductList products={data?.products?.items}></ProductList>
      </div>
    </>
  );
}

export default App;
