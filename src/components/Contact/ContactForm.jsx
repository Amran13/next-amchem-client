"use client"

import { useState } from "react"
import Image from "next/image"
import { Send, User, Mail, FileText, Building2, Phone, Globe, MessageSquare } from "lucide-react"

const tabs = [
  { id: "distribution", label: "Distribution", image: "/distribution.png", title: "Distribution Partnership" },
  { id: "product", label: "Product Usage", image: "/utilization.png", title: "Product Usage Inquiry" },
  { id: "career", label: "Careers", image: "/career.png", title: "Career Application" },
]

export default function WorkWithUs() {
  const [activeTab, setActiveTab] = useState("career")

  const activeTitle = tabs.find(t => t.id === activeTab)?.title

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-10 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-3 transition ${
                activeTab === tab.id ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className={`w-24 h-24 p-4  rounded-2xl overflow-hidden ${
                  activeTab === tab.id ? "bg-blue-100" : "border-transparent"
                }`}
              >
                <Image
                  src={tab.image}
                  alt={tab.label}
                  width={96}
                  height={96}
                  className="object-cover "
                />
              </div>
              <span className={`font-semibold ${
                activeTab === tab.id ? "text-[#212E84]" : ""
              }`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-3xl font-semibold text-center text-[#212E84] mb-10">
            {activeTitle}
          </h2>

          {activeTab === "distribution" && <DistributionForm />}
          {activeTab === "product" && <ProductUsageForm />}
          {activeTab === "career" && <CareerApplicationForm />}
        </div>
      </div>
    </section>
  )
}

function DistributionForm() {
  return (
    <form className="space-y-6 max-w-xl mx-auto">
      <Field icon={<User />} placeholder="Full Name" />
      <Field icon={<Mail />} placeholder="Email Address" />
      <Field icon={<Building2 />} placeholder="Company Name" />
      <Field icon={<Phone />} placeholder="Phone Number" />
      <Field icon={<Globe />} placeholder="Country" />
      <Textarea icon={<MessageSquare />} placeholder="Your Message" />
      <button className="btn bg-[#212E84] text-white w-full">
        Submit Inquiry
      </button>
    </form>
  )
}

function ProductUsageForm() {
  return (
    <form className="space-y-6 max-w-xl mx-auto">
      <Field icon={<User />} placeholder="Full Name" />
      <Field icon={<Mail />} placeholder="Email Address" />
      <Textarea icon={<MessageSquare />} placeholder="Your Message" />
      <button className="btn bg-[#212E84] text-white w-full">
        Submit Request
      </button>
    </form>
  )
}

function CareerApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm({ ...form, [name]: files ? files[0] : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="flex items-center gap-2 mb-1 font-medium">
          <User className="size-4" /> Full Name
        </label>
        <input name="name" className="input input-bordered w-full" onChange={handleChange} required />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1 font-medium">
          <Mail className="size-4" /> Email
        </label>
        <input name="email" type="email" className="input input-bordered w-full" onChange={handleChange} required />
      </div>

      <div>
        <label className="font-medium mb-1">Position Applying For</label>
        <select name="position" className="select select-bordered w-full" onChange={handleChange} required>
          <option value="">Select a position</option>
          <option>Veterinary Consultant</option>
          <option>Marketing Specialist</option>
          <option>R&D Scientist</option>
          <option>Production Officer</option>
        </select>
      </div>

      <div>
        <label className="font-medium mb-1">Resume (PDF/DOC)</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="file-input file-input-bordered w-full"
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn bg-[#212E84] text-white w-full flex items-center gap-2">
        <Send className="size-4" />
        Submit Application
      </button>
    </form>
  )
}

function Field({ icon, placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        placeholder={placeholder}
        className="input input-bordered w-full pl-10"
        required
      />
    </div>
  )
}

function Textarea({ icon, placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-4 text-gray-400">
        {icon}
      </span>
      <textarea
        placeholder={placeholder}
        className="textarea textarea-bordered w-full pl-10 min-h-[120px]"
        required
      />
    </div>
  )
}
