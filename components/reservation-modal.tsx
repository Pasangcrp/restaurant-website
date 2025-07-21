"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Calendar, Clock, Users, Phone, Mail, User } from "lucide-react"

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  // Generate available time slots
  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ]

  const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0]

  // Get maximum date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateString = maxDate.toISOString().split("T")[0]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsConfirmed(true)
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      date: "",
      time: "",
      partySize: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequests: "",
    })
    setIsConfirmed(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl text-amber-600">
            {isConfirmed ? "Reservation Confirmed!" : "Reserve Your Table"}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={resetForm}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent>
          {isConfirmed ? (
            <div className="text-center space-y-6">
              <div className="text-green-600 text-6xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Thank you for your reservation!</h3>
                <p className="text-gray-600 mb-4">
                  We've received your booking request and will send a confirmation email shortly.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-left space-y-2">
                  <p>
                    <strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Time:</strong> {formData.time}
                  </p>
                  <p>
                    <strong>Party Size:</strong> {formData.partySize} {formData.partySize === "1" ? "person" : "people"}
                  </p>
                  <p>
                    <strong>Name:</strong> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <strong>Contact:</strong> {formData.email}
                  </p>
                </div>
              </div>
              <Button onClick={resetForm} className="bg-amber-600 hover:bg-amber-700">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Date, Time, Party Size */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Step 1 of 2: Select Date & Time
                    </Badge>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      max={maxDateString}
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleInputChange("time", time)}
                          className={`p-2 text-sm border rounded-md transition-colors ${
                            formData.time === time
                              ? "bg-amber-600 text-white border-amber-600"
                              : "border-gray-300 hover:border-amber-600 hover:text-amber-600"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Party Size */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      Party Size
                    </label>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                      {partySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleInputChange("partySize", size)}
                          className={`p-2 text-sm border rounded-md transition-colors ${
                            formData.partySize === size
                              ? "bg-amber-600 text-white border-amber-600"
                              : "border-gray-300 hover:border-amber-600 hover:text-amber-600"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.date || !formData.time || !formData.partySize}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Continue to Contact Information
                  </Button>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Step 2 of 2: Contact Information
                    </Badge>
                  </div>

                  {/* Reservation Summary */}
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Reservation Summary</h4>
                    <div className="text-sm text-amber-700 space-y-1">
                      <p>
                        <strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Time:</strong> {formData.time}
                      </p>
                      <p>
                        <strong>Party Size:</strong> {formData.partySize}{" "}
                        {formData.partySize === "1" ? "person" : "people"}
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <User className="h-4 w-4 mr-2" />
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <User className="h-4 w-4 mr-2" />
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      rows={3}
                      placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="flex-1 bg-amber-600 hover:bg-amber-700">
                      {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
