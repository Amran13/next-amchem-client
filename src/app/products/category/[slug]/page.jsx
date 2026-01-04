import { productsData } from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default async function Page({ params }) {
  const { slug } = await params

  const category = productsData.categories.find(
    c => c.slug === slug
  )

  if (!category) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-red-600">
          Category not found
        </h1>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <h1 className="text-4xl text-[#212E84] font-bold">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.items.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
