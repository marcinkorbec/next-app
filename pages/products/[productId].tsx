import {useRouter} from "next/router";

const ProductIdPage = () => {
  const router = useRouter()

  console.log(router)
  return (
    <div>{router.query.productId}</div>
  )
}

export default ProductIdPage;