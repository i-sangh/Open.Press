import React, { useState } from 'react';
import { Search, CreditCard, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Subscribe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscription form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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

            {/* Subscribe Content */}
            <section className="flex-grow">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12 flex flex-col items-center">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold mb-4">Subscribe Today</h1>
                        <p className="text-gray-600">
                            Get access to exclusive content and features for just $6.99/month
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                        {/* Subscription Benefits */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Membership Benefits</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium">Premium Access</p>
                                        <p className="text-gray-600">Unlock all premium features and content</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium">Early Access</p>
                                        <p className="text-gray-600">Be the first to access new features</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium">Flexible Billing</p>
                                        <p className="text-gray-600">Cancel anytime, no commitments</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subscription Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <span>Subscribe Now - $6.99/month</span>
                                    </button>
                                    <p className="text-xs text-gray-500 mt-2 text-center">
                                        By subscribing, you agree to our Terms of Service and Privacy Policy
                                    </p>
                                </div>
                            </form>
                        </div>
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