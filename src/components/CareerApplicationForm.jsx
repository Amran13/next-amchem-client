"use client"

import { useState } from "react"
import { Send, User, Mail, FileText } from "lucide-react"

export default function CareerApplicationForm() {
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
    <div className="max-w-xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <FileText className="size-6 text-blue-600" />
        Career Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium flex items-center gap-2 mb-1">
            <User className="size-4 text-gray-500" /> Full Name
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-medium flex items-center gap-2 mb-1">
            <Mail className="size-4 text-gray-500" /> Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1">
            Position Applying For
          </label>
          <select
            name="position"
            className="select select-bordered w-full"
            value={form.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a position</option>
            <option>Veterinary Consultant</option>
            <option>Marketing Specialist</option>
            <option>R&D Scientist</option>
            <option>Production Officer</option>
          </select>
        </div>

        

        <button className="btn btn-primary w-full flex items-center gap-2">
          <Send className="size-4" />
          Submit Application
        </button>
      </form>
    </div>
  )
}
