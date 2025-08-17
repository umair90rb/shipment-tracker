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
                    Terms and Conditions
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Please read our terms and conditions before using our service.
                </p>
                <p className="text-sm text-gray-500 mt-2">Last updated: August 9, 2024</p>
            </header>

            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">

                <h3>Acceptance</h3>
                <p>By using this website you agree to these Terms &amp; Conditions. If you do not agree, please do not use the service.</p>

                <h3>Service description</h3>
                <p>This website provides an independent parcel tracking interface for courier services in Pakistan. We fetch tracking status and display it for users' convenience.</p>

                <h3>User obligations</h3>
                <p>Users must not use the service for unlawful purposes, nor attempt to interfere with the site or any connected systems.</p>

                <h3>Accuracy and liability</h3>
                <p>We try to display accurate tracking information but cannot guarantee real-time updates. We are not liable for any delays, errors, or losses related to courier services. For delivery disputes, contact the courier directly.</p>

                <h3>Governing law</h3>
                <p>These Terms are governed by the laws of Pakistan.</p>
            </div>
        </main>
    )
} 