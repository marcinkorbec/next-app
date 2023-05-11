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

const ProductPage = () => {
  return <div>Siemka</div>;
}
export default ProductPage;

export const getStaticProps = async () => {};