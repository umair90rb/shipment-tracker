import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - tcstracking.xyz',
  description: 'Learn about TCS Tracking, Pakistan\'s trusted courier tracking service. Discover our mission to provide reliable parcel tracking solutions.',
  keywords: 'about TCS tracker, TCS tracking service, Pakistan courier tracking, parcel tracking company',
}

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back to Home Link */}
      <div className="mb-6">
        <a 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>
      </div>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About TCS Tracking
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted partner for reliable parcel tracking across Pakistan and beyond.
        </p>
      </header>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At TCS Tracking, we're committed to providing a seamless, user-friendly tracking experience for all your courier needs. Our mission is to bridge the gap between senders and recipients by offering real-time, accurate tracking information that keeps you informed every step of the way.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Real-Time Tracking</h3>
              <p className="text-blue-800">
                Provide instant updates on your parcel's location and status using advanced tracking technology.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Nationwide Coverage</h3>
              <p className="text-green-800">
                Track parcels across Pakistan with comprehensive coverage of all major cities and regions.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Multiple Services</h3>
              <p className="text-purple-800">
                Support for regular parcels, bulk shipments, driving licenses, and international deliveries.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">24/7 Accessibility</h3>
              <p className="text-orange-800">
                Access tracking information anytime, anywhere through our user-friendly platform.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mt-1"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Reliability</h4>
                <p className="text-gray-600">Built on TCS's trusted courier infrastructure with years of experience.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Accuracy</h4>
                <p className="text-gray-600">Real-time updates directly from TCS tracking systems for precise information.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full mt-1"></div>
              <div>
                <h4 className="font-semibold text-gray-900">User Experience</h4>
                <p className="text-gray-600">Intuitive interface designed for ease of use across all devices.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full mt-1"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Security</h4>
                <p className="text-gray-600">Secure API integration ensuring your tracking data remains protected.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We understand that every parcel contains something valuable - whether it's important documents, business materials, or personal items. That's why we're committed to providing the most accurate, up-to-date tracking information possible. Our team continuously works to improve our service and ensure you have the best tracking experience available.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ready to track your parcel? Simply enter your TCS tracking number in our tracking form and get instant updates on your shipment's status.
          </p>
          <div className="text-center">
            <a 
              href="/" 
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Start Tracking Now
            </a>
          </div>
        </section>
      </div>
    </main>
  )
} 