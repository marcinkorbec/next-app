import {InferGetStaticPropsType} from "next";
import {ProductListItem} from "@/components/ProductListItem";

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
                <ProductListItem data={{
                  id: product.id,
                  title: product.title,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                  description: product.description,
                  rating: {
                    rate: product.rating.rate,
                  },
                }}/>
              </li>
            );
          })
        }
    </ul>
  )
}
export default ProductPage;

