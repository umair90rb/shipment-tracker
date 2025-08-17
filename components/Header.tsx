import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="md:flex bg-red-600 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image alt='tcstracking.xyz logo' src='/icon.png' width={50} height={50} />
            </div>
            <span className="text-xl font-bold text-white">TCS Tracking</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/tcs-tracking" 
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              TCS Tracking
            </Link>
            <Link 
              href="/tcs-branches" 
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              TCS Branches
            </Link>
            <Link 
              href="/tcs-helpline-numbers" 
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              TCS Helpline Number
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-white hover:text-yellow-400 transition-colors font-medium"
            >
              Privacy
            </Link>
          </nav>
          
        </div>
      </div>
    </header>
  )
} 