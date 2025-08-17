import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - tcstracking.xyz',
  description: 'Read our privacy policy to understand how TCS Tracking collects, uses, and protects your personal information.',
  keywords: 'privacy policy, TCS tracker privacy, data protection, personal information security',
}

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your privacy is important to us. Learn how we protect and handle your information.
        </p>
        <p className="text-sm text-gray-500 mt-2">Last updated: August 9, 2024</p>
      </header>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tracking Information</h3>
              <p className="text-gray-700">
                When you use our tracking service, we collect the consignment number (CN) you enter. This information is used solely to provide tracking results from the TCS API.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Usage Data</h3>
              <p className="text-gray-700">
                We may collect anonymous usage statistics to improve our service, including page views, tracking requests, and general user behavior patterns.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-700">
                If you contact us through our contact form, we collect your name, email address, and message content to respond to your inquiry.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-900 mb-2">Primary Uses</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• Provide parcel tracking services</li>
                <li>• Respond to customer inquiries and support requests</li>
                <li>• Improve our website functionality and user experience</li>
                <li>• Ensure service security and prevent abuse</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              We do not sell, rent, or trade your personal information to third parties. Your data is used exclusively for providing and improving our tracking service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-yellow-900 mb-2">Limited Sharing</h3>
              <p className="text-yellow-800">
                We only share your information in the following circumstances:
              </p>
              <ul className="text-yellow-800 mt-2 space-y-1">
                <li>• With TCS API for tracking requests (consignment numbers only)</li>
                <li>• When required by law or legal process</li>
                <li>• To protect our rights and prevent fraud</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-2">Security Measures</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• HTTPS encryption for all data transmission</li>
                  <li>• Secure server infrastructure</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls and monitoring</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-900 mb-2">Data Protection</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Limited data retention periods</li>
                  <li>• Anonymous analytics where possible</li>
                  <li>• Regular data cleanup</li>
                  <li>• User consent for data collection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              You have the right to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Access & Control</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Request access to your data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your personal data</li>
                  <li>• Withdraw consent</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Opt-out of communications</li>
                  <li>• Request data portability</li>
                  <li>• File privacy complaints</li>
                  <li>• Contact our privacy team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Our website uses essential cookies to provide basic functionality. We do not use tracking cookies or third-party analytics that could compromise your privacy.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Cookie Types</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li>• <strong>Session Cookies:</strong> Temporary cookies for user sessions</li>
                <li>• <strong>No Marketing Cookies:</strong> We do not use advertising or tracking cookies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We integrate with the following third-party services:
            </p>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-900 mb-2">TCS API Integration</h3>
              <p className="text-orange-800">
                Our tracking service connects to TCS's official API to retrieve parcel information. Only consignment numbers are shared with TCS, and their privacy policy applies to data they collect.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Retention Periods</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Tracking requests: 30 days</li>
                  <li>• Contact form submissions: 1 year</li>
                  <li>• Analytics data: 6 months</li>
                  <li>• Server logs: 90 days</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Data Disposal</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Automatic deletion after retention period</li>
                  <li>• Secure data destruction methods</li>
                  <li>• Regular cleanup procedures</li>
                  <li>• User request processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
          <p className="text-gray-700">
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-blue-800 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-blue-800">
              <p><strong>Email:</strong> query.tcstracking@gmail.com</p>
              <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 