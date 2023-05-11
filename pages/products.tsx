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

const ProductPage = () => {
  return <div>Siemka</div>;
}
export default ProductPage;

