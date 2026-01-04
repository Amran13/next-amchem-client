import {
  ScaleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const LegalCompliance = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 text-base-content">
        <div className="flex items-center gap-4 mb-12">
          {/* <ScaleIcon className="w-10 h-10 text-[#212E84]" /> */}
          <h2 className="text-4xl font-bold text-[#212E84]">Legal & Compliance</h2>
        </div>

        <div className="space-y-12 leading-relaxed">
          <div className="flex gap-4">
            <DocumentTextIcon className="w-8 h-8 text-[#212E84] mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Terms & Conditions
              </h3>

              <p className="mb-4">
                <span className="font-semibold">General Terms of Sale:</span>{" "}
                Standard commercial terms governing product sale, delivery,
                payment, liability, and dispute resolution. Available at{" "}
                <span className="text-[#212E84] underline">
                  www.amchem-bv.com/terms
                </span>{" "}
                or upon request.
              </p>

              <p>
                <span className="font-semibold">Website Terms of Use:</span>{" "}
                Conditions for website access and information use.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <ShieldCheckIcon className="w-8 h-8 text-[#212E84] mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Privacy Policy
              </h3>

              <p>
                Data collection, processing, and protection practices compliant
                with GDPR and applicable privacy regulations. Personal
                information handling, cookies policy, user rights. Full policy:{" "}
                <span className="text-[#212E84] underline">
                  www.amchem-bv.com/privacy
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#212E84] mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Regulatory Information
              </h3>

              <p>
                Product registration status by country, maximum residue limits,
                withdrawal periods, regulatory updates available through
                customer portal or{" "}
                <span className="text-[#212E84] underline">
                  regulatory@amchem-bv.com
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <ExclamationTriangleIcon className="w-8 h-8 text-[#212E84] mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Disclaimer
              </h3>

              <p>
                Product information provided for guidance; professional
                veterinary/nutritional consultation recommended for specific
                applications. Company liability limitations and user
                responsibility outlined in product documentation and terms of
                sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance;
