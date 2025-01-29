import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Our Methodology', href: '/methodology' },
      { name: 'For Professionals', href: '/for-professionals' },
      { name: 'Meet Our Experts', href: '/expert-intro' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  return (
    <footer className="bg-white mt-auto border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-sm text-gray-600">
              Empowering relationships through understanding and professional guidance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-600 hover:text-pink-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-600 hover:text-pink-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-600 hover:text-pink-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Connection Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}