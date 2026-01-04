"use client"

import { MapPin, Mail, Phone, Globe, Building2 } from "lucide-react"

export default function HeadQuarters() {
  return (
    <div className="space-y-12 p-8 max-w-[1280px] mx-auto">

      {/* Headquarters */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Building2 className="w-8 h-8 text-primary" />
          Corporate Headquarters
        </h2>

        <div className="
          bg-white/80 backdrop-blur-xl 
          rounded-xl p-6 shadow-lg border-l-4 border-primary
          transition hover:shadow-2xl
        ">
          <h3 className="font-semibold text-xl mb-2">Amchem B.V. Holland</h3>

          <div className="text-gray-700 space-y-1">
            <p>[Address Line 1]</p>
            <p>[Address Line 2]</p>
            <p>[City, Postal Code]</p>
            <p>Netherlands</p>
          </div>

          <div className="mt-4 space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" /> +31 [Number]
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:info@amchem-bv.com" className="text-primary underline">
                info@amchem-bv.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <a href="https://www.amchem-bv.com" className="text-primary underline">
                www.amchem-bv.com
              </a>
            </p>
          </div>

          <button className="mt-4 flex items-center gap-2 text-primary font-medium hover:underline">
            <MapPin className="w-5 h-5" /> View on Map
          </button>

          <p className="text-sm mt-4">
            <span className="font-semibold">Business Hours:</span> Monday–Friday 08:00–17:00 CET
          </p>
        </div>
      </div>

      {/* Regional Offices */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Building2 className="w-8 h-8 text-primary" />
          Regional Offices
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* China Office */}
          <div className="
            bg-white/80 backdrop-blur-xl 
            rounded-xl p-6 shadow-lg border-l-4 border-blue-500
            transition hover:shadow-2xl
          ">
            <h3 className="font-semibold text-xl mb-2">China Office</h3>

            <div className="text-gray-700 space-y-1">
              <p>[Address]</p>
              <p>[City, China]</p>
            </div>

            <p className="flex items-center gap-2 mt-3 text-gray-700">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:china@amchem-bv.com" className="text-blue-600 underline">
                china@amchem-bv.com
              </a>
            </p>

            <button className="mt-4 flex items-center gap-2 text-blue-600 font-medium hover:underline">
              <MapPin className="w-5 h-5" /> View on Map
            </button>
          </div>

          {/* Singapore Office */}
          <div className="
            bg-white/80 backdrop-blur-xl 
            rounded-xl p-6 shadow-lg border-l-4 border-green-500
            transition hover:shadow-2xl
          ">
            <h3 className="font-semibold text-xl mb-2">Singapore Office</h3>

            <div className="text-gray-700 space-y-1">
              <p>[Address]</p>
              <p>[City, Singapore]</p>
            </div>

            <p className="flex items-center gap-2 mt-3 text-gray-700">
              <Mail className="w-5 h-5 text-green-600" />
              <a href="mailto:singapore@amchem-bv.com" className="text-green-700 underline">
                singapore@amchem-bv.com
              </a>
            </p>

            <button className="mt-4 flex items-center gap-2 text-green-700 font-medium hover:underline">
              <MapPin className="w-5 h-5" /> View on Map
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}
