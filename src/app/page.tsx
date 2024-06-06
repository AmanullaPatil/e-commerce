
import ProductCard from '../components/ProductCard'
import Link from "next/link";
import { getProducts } from '../services/productServices'


const Home = async () => {
  const products = await getProducts(5)
  // console.log('home page returned')
  return (
    <div>
      <div className='bg-gray-800 h-72'>
        <h1 className="text-white font-bold text-5xl text-center py-20">India's most beloved <span className="text-orange-500">fashion</span> platform for <span className="text-rose-500">coders</span></h1>
      </div>
      <div className="flex flex-wrap m-4 gap-2">
        {products.data.map((item, index) => <ProductCard key={item.id} item={item} index={index} />
        )}

      </div>
      <Link href='/products' className="font-bold text-orange-500 hover:underline inline-block p-4">View All {'>'}</Link>
    </div>


  )
}
export default Home