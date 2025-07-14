import React, { useState } from 'react';
import { m } from 'framer-motion';
import { ChevronLeftIcon } from 'lucide-react';
import { Select, Option, Input } from "@material-tailwind/react";
import { BookingModalProps, BookingFormData } from '../../types/flight';

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, flight, selectedDate }) => {
    const initialState: BookingFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        seatClass: 'economy',
        seatNumber: ''
    };

    const [formData, setFormData] = useState<BookingFormData>(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSeatClassChange = (value: string | undefined) => {
        if (value) {
            setFormData(prev => ({
                ...prev,
                seatClass: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Booking submitted successfully!');
        setFormData(initialState);
        onClose();
    };

    if (!isOpen || !flight) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <m.div
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="p-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-base sm:text-xl font-bold text-gray-900">Complete Your Booking</h2>
                        <button
                            onClick={onClose}
                            className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Flight Summary */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Flight Summary</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Airline & Flight</p>
                                <p className="font-semibold text-gray-900">{flight.airline} {flight.flightNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Date</p>
                                <p className="font-semibold text-gray-900">
                                    {selectedDate.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Route</p>
                                <p className="font-semibold text-gray-900">{flight.departure} → {flight.arrival}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Time</p>
                                <p className="font-semibold text-gray-900">{flight.departureTime} - {flight.arrivalTime}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Duration</p>
                                <p className="font-semibold text-gray-900">{flight.duration}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Price</p>
                                <p className="font-bold text-2xl text-blue-600">{flight.price}</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    size="lg"
                                    className="!border-gray-300 focus:!border-blue-500 rounded-xl"
                                    labelProps={{
                                        className: "hidden"
                                    }}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    crossOrigin={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    size="lg"
                                    className="!border-gray-300 focus:!border-blue-500 rounded-xl"
                                    labelProps={{
                                        className: "hidden"
                                    }}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    crossOrigin={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    label="Email Address"
                                    placeholder="Enter your email"
                                    size="lg"
                                    className="!border-gray-300 focus:!border-blue-500 rounded-xl"
                                    labelProps={{
                                        className: "hidden"
                                    }}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    crossOrigin={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <Input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                    size="lg"
                                    className="!border-gray-300 focus:!border-blue-500 rounded-xl"
                                    labelProps={{
                                        className: "hidden"
                                    }}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    crossOrigin={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Seat Class
                                </label>
                                <Select
                                    value={formData.seatClass}
                                    onChange={handleSeatClassChange}
                                    size="lg"
                                    className="!border-gray-300 focus:!border-blue-500 rounded-xl"
                                    placeholder="Select seat class"
                                    labelProps={{
                                        className: "hidden"
                                    }}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                >
                                    <Option value="economy">Economy Class</Option>
                                    <Option value="premium">Premium Economy</Option>
                                    <Option value="business">Business Class</Option>
                                    <Option value="first">First Class</Option>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Seat
                                </label>
                                <Input
                                    type="text"
                                    name="seatNumber"
                                    value={formData.seatNumber}
                                    onChange={handleInputChange}
                                    label="Preferred Seat"
                                    placeholder="e.g., 12A (optional)"
                                    size="lg"
                                    className="!border-gray-300 focus:!border-blue-500 rounded-xl"
                                    labelProps={{
                                        className: "hidden"
                                    }}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    crossOrigin={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </m.div>
        </div>
    );
};

export default BookingModal;
