export default function CategoryCard({ name, slug }) {
  return (
    <a href={`/products/category/${slug}`} className="card bg-base-100 border border-gray-100 p-6 hover:scale-105 transition">
      <h2 className="text-xl font-bold">{name}</h2>
    </a>
  )
}
