

import { productsData } from "@/data/products"
import ProductDetails from "@/components/ProductDetails";


export function generateStaticParams() {
  return [
    { id: "amchem-flavomycin" },
    { id: "amchem-bmd-premix" },
    { id: "amchem-lincomycin-premix" },
    { id: "amchem-citimix" },
    { id: "amchem-tylan-mix-premix" },
    { id: "amchem-enramycin-premix" },
    { id: "amchem-oladox-premix" },
    { id: "amchem-zinc-bacitracin-premix" },
    { id: "amchem-nosimix-premix" },
    { id: "amchem-avilamix-premix" },
    { id: "amchem-virginiamycin-premix" },
    { id: "amchem-quinocetone-premix" },
    { id: "amchem-colistin-premix" },
    { id: "amchem-tylvalosin-premix" },
    { id: "amchem-cyro-mix" },

    { id: "amchem-salinicox" },
    { id: "amchem-madunicar-plus" },
    { id: "amchem-naramix-plus" },
    { id: "amchem-ethonicar-mix" },
    { id: "amchem-decobate-premix" },
    { id: "amchem-diclamycin-premix" },
    { id: "amchem-diclamix-plus" },
    { id: "amchem-decosal-premix" },
    { id: "amchem-moniracox-premix" },
    { id: "amchem-clopimix-premix" },
    { id: "amchem-halocox" },
    { id: "amchem-decomix-premix" },
    { id: "amchem-robenidine-premix" },
    { id: "amchem-zoalene-premix" },

    { id: "amvit-c-stable" },
    { id: "amchem-growing-premix" },
    { id: "amchem-egg-shell-promoter" },
    { id: "amchem-ormin-g-organic-trace-minerals" },
    { id: "amchem-trace-min-inorganic-trace-minerals" },
    { id: "amchem-dcp-dicalcium-phosphate" },
    { id: "amchem-mcp-monocalcium-phosphate" },

    { id: "amchem-adsorvent" },
    { id: "amchem-avsorb-plus" },
    { id: "amchem-toxisorb" },
    { id: "amchem-toxin-bind" },
    { id: "amchem-mos" },

    { id: "amchem-antimold" },
    { id: "amchem-moldguard" },
    { id: "amchem-antimold-liq" },

    { id: "amchem-acid" },
    { id: "amchem-salguard" },
    { id: "amchem-acid-liq" },
    
    { id: "amchem-flavour" },

    { id: "amchem-allicin" },
    { id: "amchem-tributyrate" },
    { id: "amchem-g-amino" },
    { id: "amchem-gaa-acid" },
    { id: "amchem-monolaurin" },
    { id: "amchem-c-butyrate" },
    { id: "amchem-s-butyrate" },
  ];
}

export default async function Page({ params }) {
  const { id } = await params


  const allItems = productsData.categories.flatMap(c => c.items)
  const product = allItems.find(p => p.id === id)

  console.log(id, allItems, product)

  if (!product) {
    return <div className="p-6 text-xl">Product not found</div>
  }

  

  return <ProductDetails product={product}></ProductDetails>
}
