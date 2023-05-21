import {Product} from "@/components/Product";
import {useQuery} from "react-query";

export interface ProductApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

const ProductCSRPage = () => {
  const {isLoading, error, data} = useQuery('products', getProducts);
  data
  isLoading
  error

  if (isLoading) {
    return <div>loading...</div>
  }

  if (!data || error) {
    return <div>Coś poszło nie tak...</div>
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {
        data.map((product: ProductApiResponse) => {
          return (
            <li key={product.id} className='shadow-xl border-2'>
              <Product data={{
                title: product.title,
                description: product.description,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
                rating: product.rating.rate,
              }}/>
            </li>
          );
        })
      }
    </ul>
  )
}
export default ProductCSRPage;

