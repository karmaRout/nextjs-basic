
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div>HELLO WORLD</div>
      <Link href="/users">USERS1</Link>
      <ProductCard />
    </main>
  )
}
