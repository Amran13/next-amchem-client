import {
  BeakerIcon,
  ListBulletIcon,
  ArchiveBoxIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  XCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  InboxStackIcon,
  CalendarDaysIcon,
  TagIcon
} from "@heroicons/react/24/solid"

import { productsData } from "@/data/products"

export default async function Page({ params }) {
  const { id } = await params

  const allItems = productsData.categories.flatMap(c => c.items)
  const product = allItems.find(p => p.id === id)

  if (!product) {
    return <div className="p-6 text-xl">Product not found</div>
  }

  const Section = ({ title, icon: Icon, children }) => (
    <div className="bg-base-100 rounded-xl p-2 space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" style={{ color: "#002b5c" }} />
        <h2 className="text-xl font-semibold" style={{ color: "#002b5c" }}>
          {title}
        </h2>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )

  const SmallCard = ({ title, children }) => (
    <div className="bg-base-200 p-4 rounded-lg space-y-1">
      <h3 className="font-semibold text-base" style={{ color: "#002b5c" }}>
        {title}
      </h3>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold" style={{ color: "#002b5c" }}>
          {product.product}
        </h1>
        <p className="text-sm opacity-70">{product.brand}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {product.active_substance && (
          <Section title="Active Substance" icon={BeakerIcon}>
            {product.active_substance}
          </Section>
        )}

        {product.composition?.length > 0 && (
          <Section title="Composition" icon={ListBulletIcon}>
            <ul className="list-disc pl-5 space-y-1">
              {product.composition.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {product.pack_size && (
        <Section title="Pack Size" icon={ArchiveBoxIcon}>
          {product.pack_size}
        </Section>
      )}

      {product.description && (
        <Section title="Description" icon={DocumentTextIcon}>
          {product.description}
        </Section>
      )}

      {product.pharmacological_properties && (
        <Section title="Pharmacological Properties" icon={LightBulbIcon}>
          <div className="grid lg:grid-cols-2 gap-6">
            {product.pharmacological_properties.mechanism_of_action && (
              <SmallCard title="Mechanism of Action">
                {product.pharmacological_properties.mechanism_of_action}
              </SmallCard>
            )}

            {product.pharmacological_properties.spectrum && (
              <SmallCard title="Spectrum">
                {product.pharmacological_properties.spectrum}
              </SmallCard>
            )}

            {product.pharmacological_properties.pharmacokinetics && (
              <SmallCard title="Pharmacokinetics">
                {product.pharmacological_properties.pharmacokinetics}
              </SmallCard>
            )}

            {product.pharmacological_properties.scientific_evidence && (
              <SmallCard title="Scientific Evidence">
                {product.pharmacological_properties.scientific_evidence}
              </SmallCard>
            )}
          </div>
        </Section>
      )}

      {product.indications?.length > 0 && (
        <Section title="Indications" icon={CheckCircleIcon}>
          <ul className="list-disc pl-5 space-y-1">
            {product.indications.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>
      )}

      {product.dosage_and_administration && (
        <Section title="Dosage & Administration" icon={ClipboardDocumentCheckIcon}>
          <div className="grid lg:grid-cols-3 gap-6">
            {product.dosage_and_administration.poultry?.length > 0 && (
              <SmallCard title="Poultry">
                <ul className="list-disc pl-4">
                  {product.dosage_and_administration.poultry.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </SmallCard>
            )}

            {product.dosage_and_administration.swine?.length > 0 && (
              <SmallCard title="Swine">
                <ul className="list-disc pl-4">
                  {product.dosage_and_administration.swine.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </SmallCard>
            )}

            {product.dosage_and_administration.cattle?.length > 0 && (
              <SmallCard title="Cattle">
                <ul className="list-disc pl-4">
                  {product.dosage_and_administration.cattle.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </SmallCard>
            )}
          </div>
        </Section>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {product.contraindications && (
          <Section title="Contraindications" icon={XCircleIcon}>
            {product.contraindications}
          </Section>
        )}

        {product.adverse_effects && (
          <Section title="Adverse Effects" icon={ExclamationTriangleIcon}>
            {product.adverse_effects}
          </Section>
        )}

        {product.precautions && (
          <Section title="Precautions" icon={ShieldCheckIcon}>
            {product.precautions}
          </Section>
        )}

        {product.drug_interactions && (
          <Section title="Drug Interactions" icon={ArrowsRightLeftIcon}>
            {product.drug_interactions}
          </Section>
        )}
      </div>

      {product.withdrawal_period && (
        <Section title="Withdrawal Period" icon={ClockIcon}>
          <div className="grid lg:grid-cols-3 gap-4">
            {product.withdrawal_period.poultry_meat && (
              <SmallCard title="Poultry (Meat)">
                {product.withdrawal_period.poultry_meat}
              </SmallCard>
            )}

            {product.withdrawal_period.swine_meat && (
              <SmallCard title="Swine (Meat)">
                {product.withdrawal_period.swine_meat}
              </SmallCard>
            )}

            {product.withdrawal_period.cattle_meat && (
              <SmallCard title="Cattle (Meat)">
                {product.withdrawal_period.cattle_meat}
              </SmallCard>
            )}

            {product.withdrawal_period.eggs && (
              <SmallCard title="Eggs">
                {product.withdrawal_period.eggs}
              </SmallCard>
            )}
          </div>
        </Section>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {product.storage && (
          <Section title="Storage" icon={InboxStackIcon}>
            {product.storage}
          </Section>
        )}

        {product.shelf_life && (
          <Section title="Shelf Life" icon={CalendarDaysIcon}>
            {product.shelf_life}
          </Section>
        )}
      </div>

      {product.species?.length > 0 && (
        <Section title="Species" icon={TagIcon}>
          <div className="flex flex-wrap gap-3">
            {product.species.map((sp, i) => (
              <span
                key={i}
                className="badge badge-outline badge-lg py-3 px-4 text-sm"
              >
                {sp}
              </span>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}
