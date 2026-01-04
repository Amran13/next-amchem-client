import Link from "next/link";



export default function SpeciesCard({ name }) {

  return (
    <Link
      href={`/products/species/${name}`}
      className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-md"
    >
      

      <h2 className="font-semibold text-lg capitalize text-[#212E84] text-center">
        {name.replace(/-/g, " ")}
      </h2>
    </Link>
  );
}
