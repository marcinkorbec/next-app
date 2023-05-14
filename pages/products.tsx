import {InferGetStaticPropsType} from "next";
import {Product} from "@/components/Product";

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

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: ProductApiResponse[] = await res.json()
  console.log(data)

  return {
    props: {
      data,
    }
  }
};

const ProductPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          data.map((product) => {
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
export default ProductPage;

