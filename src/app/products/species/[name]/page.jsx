import { productsData } from "@/data/products"
import ProductCard from "@/components/ProductCard"

export function generateStaticParams() {
  return [
    { name: "broiler" },
    { name: "layer" },
    { name: "aquaculture" },
    { name: "swine" },
    { name: "cattle" },
    { name: "turkey" },
    { name: "goats-and-sheep" },
    { name: "rabbit" },
  ];
}

export default async function Page({ params }) {
  const {name} = await params
  // console.log(name)
  const allItems = productsData.categories.flatMap(c => c.items)
  const filtered = allItems.filter(p => p.species.includes(name))


  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold capitalize text-[#212E84]">{params.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
