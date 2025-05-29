"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // SVG Icons as components
  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  const MapPinIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )

  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )

  const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )

  const YoutubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                FYNÉA
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                Pages
              </a>
              <a href="#" className="text-pink-500 font-medium border-b-2 border-pink-300">
                Contact Us
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
                <FacebookIcon />
              </div>
              <div className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
                <TwitterIcon />
              </div>
              <div className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
                <YoutubeIcon />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="/bgcontact.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/60 via-pink-300/50 to-pink-400/60"></div>
        <div className="absolute inset-0 bg-pink-500/20"></div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="inline-block px-4 py-2 bg-white/30  rounded-full mb-6 border border-white/5">
            <span className="text-pink-900 font-medium">A Scented Connection</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">Wewangian Dimulai dari Percakapan</h1>
          <p className="text-pink-50 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-lg">
            Setiap harum memiliki cerita.
                  Kirimkan pesanmu, dan biarkan kami bantu menghadirkan aroma yang menyentuh hati dan memperindah ruangmu.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white via-pink-25 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Column - Contact Info */}
            <div className="space-y-2">
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-pink-100 rounded-full mb-4">
                  <span className="text-pink-600 font-medium text-sm">💌 Say It with Scent</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-4 p-4 bg-pink-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">0123-4567-8910</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-pink-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">fynea@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-pink-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">Jl.Sungai Sahang, Palembang.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-pink-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                    <InstagramIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Instagram</h3>
                    <p className="text-gray-600">@FYNÉA.OFFICIAL</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-100 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">✨</span>
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  <div className="p-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full hover:from-pink-200 hover:to-pink-300 transition-all cursor-pointer text-pink-600">
                    <FacebookIcon />
                  </div>
                  <div className="p-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full hover:from-pink-200 hover:to-pink-300 transition-all cursor-pointer text-pink-600">
                    <TwitterIcon />
                  </div>
                  <div className="p-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full hover:from-pink-200 hover:to-pink-300 transition-all cursor-pointer text-pink-600">
                    <YoutubeIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full mb-4">
                  <span className="text-pink-600 font-medium text-sm">📝 Send Message</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-pink-500">Let's Start Conversation</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pink-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all bg-pink-25"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pink-500 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all bg-pink-25"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-pink-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all bg-pink-25"
                    placeholder="(+62)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pink-500 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all bg-pink-25 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                Send Your Love 💕
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="h-[450px] overflow-hidden rounded-2xl border border-pink-200 shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1512420138496!2d104.7311315!3d-2.9795624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75eb0503a7c3%3A0x28ea9ddd3efd54fd!2sManajemen%20informatika%20D4%20POLITEKNIK%20NEGERI%20SRIWIJAYA!5e0!3m2!1sid!2sid!4v1717063854782!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>


      
    </div>
  )
}

export default ContactSection;