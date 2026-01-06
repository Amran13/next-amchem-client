import Image from "next/image";
import Link from "next/link";



export default function SpeciesCard({ name }) {

  return (
    <Link
      href={`/products/species/${name}`}
      className="group  rounded-xl   gap-6 px-6 transition-all duration-300 hover:scale-105 hover:border-[#663C2B] hover:border-3"
    >
      <Image src={`/${name}.png`} width="220" height="220" alt="species"></Image>
{
  // console.log(name)
}
      {/* <h2 className="font-semibold text-lg capitalize text-[#212E84] text-center">
        {name.replace(/-/g, " ")}
      </h2> */}
    </Link>
  );
}
