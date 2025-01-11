import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-gray-50">
            <header className="w-full bg-white shadow-md">
                <div className="max-w-7xl w-full mx-auto flex justify-between px-6 h-16">
                    <div className="flex-1"></div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">Website Name Here</h1>
                    <div className="flex-1 flex justify-end items-center">
                        {isSearchOpen && (
                            <input type="text" placeholder="Search..." className="mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        )}
                        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-gray-100 rounded-full">
                            <Search className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </header>

            <section className="flex-grow">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
                        <p className="text-gray-600">Last updated: January 10, 2025</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
                            <p className="text-gray-700">Cookies are small text files that are placed on your computer by websites that you visit. They are widely used to make websites work more efficiently and provide useful information to the website owners.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We use cookies for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To enable certain functions of the website</li>
                                    <li>To provide analytics</li>
                                    <li>To store your preferences</li>
                                    <li>To enable advertisement delivery</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-medium">3.1 Essential Cookies</h3>
                                <p>These are necessary for the website to function properly.</p>

                                <h3 className="text-xl font-medium">3.2 Analytics Cookies</h3>
                                <p>Help us understand how visitors interact with our website.</p>

                                <h3 className="text-xl font-medium">3.3 Functionality Cookies</h3>
                                <p>Enable enhanced functionality and personalization.</p>

                                <h3 className="text-xl font-medium">3.4 Advertising Cookies</h3>
                                <p>Used to deliver relevant advertisements and track campaign performance.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of the website.</p>
                                <p>To manage cookies:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access your browser settings</li>
                                    <li>Look for a section on cookies or privacy</li>
                                    <li>Choose your preferred cookie settings</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Your Consent</h2>
                            <p className="text-gray-700">By using our website, you consent to our use of cookies. You can withdraw your consent at any time by adjusting your browser settings.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                            <p className="text-gray-700">
                                If you have questions about our cookies policy, please contact us at{' '}
                                <a href="mailto:nextamit001@gmail.com" className="text-blue-600 hover:underline">
                                    nextamit001@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>

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