import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="w-full bg-white shadow-md">
                <div className="max-w-7xl w-full mx-auto flex justify-between px-6 h-16">
                    <div className="flex-1"></div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">Website Name Here</h1>
                    <div className="flex-1 flex justify-end items-center">
                        {isSearchOpen && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <Search className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Privacy Policy Content */}
            <section className="flex-grow">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: January 10, 2025</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We collect information that you provide directly to us, including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name and contact information</li>
                                    <li>Account credentials</li>
                                    <li>Payment information</li>
                                    <li>Communication preferences</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We use the collected information for various purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To provide and maintain our service</li>
                                    <li>To notify you about changes to our service</li>
                                    <li>To provide customer support</li>
                                    <li>To gather analysis or valuable information</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We may share your information with:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Service providers</li>
                                    <li>Business partners</li>
                                    <li>Law enforcement when required</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>You have the following rights:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Right to access your personal data</li>
                                    <li>Right to rectification</li>
                                    <li>Right to erasure</li>
                                    <li>Right to restrict processing</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                            <p className="text-gray-700">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:nextamit001@gmail.com" className="text-blue-600 hover:underline">
                                    nextamit001@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white py-4">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <ul className="space-y-1">
                            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                            <li><Link to="/advertise" className="hover:text-gray-300">Advertise with us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Privacy</h3>
                        <ul className="space-y-1">
                            <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                            <li><Link to="/cookies" className="hover:text-gray-300">Cookies Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-4 text-center mt-4">
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Website Name Here. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}