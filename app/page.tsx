"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Star, ChefHat, Users, Award } from "lucide-react"
import { ReservationModal } from "@/components/reservation-modal"
import { useState } from "react"

export default function RestaurantWebsite() {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Truffle Arancini", description: "Crispy risotto balls with truffle oil and parmesan", price: "$14" },
        { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil", price: "$16" },
        { name: "Tuna Tartare", description: "Yellowfin tuna with avocado and citrus vinaigrette", price: "$18" },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Grilled Salmon",
          description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
          price: "$28",
        },
        { name: "Ribeye Steak", description: "12oz prime ribeye with garlic mashed potatoes", price: "$42" },
        { name: "Lobster Ravioli", description: "House-made pasta with lobster in cream sauce", price: "$32" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with vanilla ice cream", price: "$12" },
        { name: "Tiramisu", description: "Classic Italian dessert with espresso and mascarpone", price: "$10" },
        { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$11" },
      ],
    },
  ]

  const [isReservationOpen, setIsReservationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-600">Bella Vista</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">
              Menu
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => setIsReservationOpen(true)}>
            Reserve Table
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Bella Vista</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience culinary excellence in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-3"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              onClick={() => setIsReservationOpen(true)}
            >
              Make Reservation
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over two decades, Bella Vista has been serving exceptional cuisine crafted from the finest
                ingredients. Our passion for culinary excellence and warm hospitality creates an unforgettable dining
                experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Led by Chef Marco Rossi, our kitchen combines traditional techniques with modern innovation, creating
                dishes that celebrate both flavor and artistry.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <ChefHat className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold">Expert Chefs</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold">20+ Years</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold">Award Winning</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Chef cooking"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Menu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of dishes, each prepared with the finest ingredients and
              attention to detail.
            </p>
          </div>

          <div className="space-y-12">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-8 text-center text-amber-600">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {item.price}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review:
                  "Absolutely incredible dining experience! The food was exceptional and the service was impeccable.",
              },
              {
                name: "Michael Chen",
                rating: 5,
                review:
                  "Best restaurant in the city. The ambiance is perfect for special occasions and the menu is outstanding.",
              },
              {
                name: "Emily Rodriguez",
                rating: 5,
                review:
                  "Chef Marco's creativity shines through every dish. A true culinary masterpiece every time we visit.",
              },
            ].map((review, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Visit Us</h2>
            <p className="text-lg text-gray-600">We'd love to welcome you to Bella Vista</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Culinary Street
                      <br />
                      Downtown District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 w-full md:w-auto"
                  onClick={() => setIsReservationOpen(true)}
                >
                  Make a Reservation
                </Button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
                <Button type="submit" className="bg-amber-600 hover:bg-amber-700 w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Bella Vista</h3>
              <p className="text-gray-300">
                Experience culinary excellence in the heart of the city. Join us for an unforgettable dining experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  Home
                </a>
                <a href="#about" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  About
                </a>
                <a href="#menu" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  Menu
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  Facebook
                </a>
                <a href="#" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-gray-300 hover:text-amber-600 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  )
}
