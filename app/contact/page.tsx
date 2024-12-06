"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'
import { Button } from '@/components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Her kan du legge til logikk for å håndtere skjemainnsending
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <LayoutWithCasinos
      title="Contact Support"
      description="Get in touch with our support team"
    >
      <div className="prose prose-invert max-w-none">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          
          <p className="text-gray-300 mb-8">
            Have a question or need assistance? Our support team is here to help. 
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <Input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="bg-black/20 border-white/10 min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Email Support</h3>
              <p className="text-gray-300">support@bonuskingdoms.com</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Response Time</h3>
              <p className="text-gray-300">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithCasinos>
  )
} 