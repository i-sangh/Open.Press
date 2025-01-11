import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
                        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                        <p className="text-gray-600">Last updated: January 10, 2025</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-700">By accessing our website, you agree to be bound by these Terms and Conditions and comply with all applicable laws and regulations. If you disagree with any part of these terms, you are prohibited from accessing this site.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Other than the content you own, under these Terms, our Company and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
                                <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>You are specifically restricted from:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Publishing any Website material in any other media</li>
                                    <li>Selling, sublicensing and/or otherwise commercializing any Website material</li>
                                    <li>Publicly performing and/or showing any Website material</li>
                                    <li>Using this Website in any way that impacts user access to this Website</li>
                                    <li>Using this Website contrary to applicable laws and regulations</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>In these Website Standard Terms and Conditions, "User Content" means material that you submit to this Website, for whatever purpose.</p>
                                <p>You grant to our Company a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your User Content in any existing or future media.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                            <p className="text-gray-700">In no event shall our Company be liable for any damages arising out of the use or inability to use the materials on our Website.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Governing Law & Jurisdiction</h2>
                            <p className="text-gray-700">These Terms will be governed by and interpreted in accordance with the laws of the country, and you submit to the non-exclusive jurisdiction of the state and federal courts for the resolution of any disputes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
                            <p className="text-gray-700">
                                For any questions about these Terms, please contact us at{' '}
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