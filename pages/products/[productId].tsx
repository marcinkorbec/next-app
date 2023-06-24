import {useRouter} from "next/router";
import {InferGetStaticPropsType} from "next";
import {ProductListItem} from "@/components/ProductListItem";
import {InferGetStaticPaths} from "@types/next";

const ProductIdPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {

  if (!data) {
    return <div>Coś poszło nie tak...</div>
  }
  const router = useRouter()

  console.log(router)
  return (
    <div>
      <ProductListItem data={{
        title: data.title,
        // description: data.description,
        thumbnailUrl: data.image,
        thumbnailAlt: data.title,
        // rating: data.rating.rate,
      }}/>
    </div>
  )
}

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: ProductApiResponse[] = await res.json()

  return {
    paths: data.map(item => {
      return {
        params: {
          productId: item.id.toString()
        }
      }
    }),
    fallback: true,
  }
}

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

export const getStaticProps = async ({params}: InferGetStaticPaths<typeof getStaticPaths>) => {

  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    }
  }
  const res = await fetch(`https://fakestoreapi.com/products/${params?.productId}`);
  const data: ProductApiResponse | null = await res.json()

  return {
    props: {
      data,
    }
  }
};