"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  Menu,
  X,
  Users,
  Baby,
  Crown, 
  Utensils,
  Calendar,
  Shield,
  ChefHat,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FoodiesArenaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const facilities = [
    {
      icon: Users,
      title: "Private Meeting Rooms",
      description:
        "Professional spaces for business meetings and private dining with complete privacy and comfort.",
      features: [
        "Air Conditioning",
        "WiFi",
        "Projector Available",
        "Catering Service",
      ],
    },
    {
      icon: Baby,
      title: "Children's Playground",
      description:
        "Safe and fun playground area where kids can enjoy while parents dine in peace.",
      features: [
        "Safe Equipment",
        "Supervised Area",
        "Age-Appropriate Toys",
        "Clean Environment",
      ],
    },
    {
      icon: Crown,
      title: "VIP Lounge",
      description:
        "Exclusive premium dining experience with personalized service and luxury ambiance.",
      features: [
        "Premium Seating",
        "Dedicated Service",
        "Exclusive Menu",
        "Private Entrance",
      ],
    },
    {
      icon: Utensils,
      title: "Main Dining Area",
      description:
        "Spacious and comfortable dining area serving both local Nigerian and international cuisine.",
      features: [
        "200+ Capacity",
        "Climate Controlled",
        "Live Music",
        "Family Friendly",
      ],
    },
  ];

  const menuCategories = [
    {
      name: "Nigerian Classics",
      icon: "🇳🇬",
      dishes: [
        {
          name: "Snacking Specials",
          description: "Perfectly spiced snack varieties with unique flavors",
          price: "₦2,500",
          image: "/images/meals/snacks.jpg?height=200&width=300",
          popular: true,
        },
        {
          name: "Pepper Soup Deluxe",
          description:
            "Spicy traditional pepper soup with assorted meat and fish",
          price: "₦3,000",
          image: "/images/meals/peper deluxe.webp?height=200&width=300",
        },
      ],
    },
    {
      name: "International Cuisine",
      icon: "🌍",
      dishes: [
        {
          name: "Grilled Salmon",
          description:
            "Fresh Atlantic salmon with herbs and seasonal vegetables",
          price: "₦4,500",
          image: "/images/meals/grilled salmon.webp?height=200&width=300",
        },
        {
          name: "Beef Steak",
          description: "Tender beef steak with mashed potatoes and gravy",
          price: "₦5,000",
          image: "/images/meals/beef steak.webp?height=200&width=300",
          popular: true,
        },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Business Executive",
      text: "The meeting rooms are perfect for our corporate events. Professional setup with excellent catering service. Highly recommended!",
      avatar: "/images/potrait.webp?height=60&width=60",
      rating: 5,
    },
    {
      name: "David Okoro",
      role: "Family Man",
      text: "My kids love the playground while we enjoy our meals. The family-friendly atmosphere and delicious food make it our go-to spot.",
      avatar: "/images/potrait.webp?height=60&width=60",
      rating: 5,
    },
    {
      name: "Fatima Abdullahi",
      role: "Food Enthusiast",
      text: "The VIP lounge experience is exceptional! Premium service, exclusive menu, and the ambiance is just perfect for special occasions.",
      avatar: "/images/potrait.webp?height=60&width=60",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers Daily" },
    { number: "50+", label: "Menu Items" },
    { number: "7", label: "Years of Excellence" },
    { number: "24/7", label: "Customer Support" },
  ];

  const galleryImages = [
    "/images/inview1.jpg?height=300&width=300",
    "/images/inview2.jpg?height=300&width=300",
    "/images/inview3.jpg?height=300&width=300",
    "/images/inview4.jpg?height=300&width=300",
    "/images/inview5.jpg?height=300&width=300",
    "/images/inview1.jpg?height=300&width=300",
    "/images/inview2.jpg?height=300&width=300",
    "/images/inview3.jpg?height=300&width=300",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:h-28 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/foodies-arena-logo.jpg"
                alt="Foodies Arena Logo"
                width={120}
                height={50}
                className="md:h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Order Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/outsideview.jpg?height=1080&width=1920"
            alt="Delicious Nigerian food spread"
            fill
            className="object-cover object-left"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-20">
          <div className="mb-8">
            <Badge className="bg-yellow-500 text-black px-4 py-2 text-sm font-semibold mb-4">
              ⭐ Kaduna's Premier Dining Destination
            </Badge>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Bringing <span className="text-yellow-400">Flavor</span> to Your
            <br />
            <span className="text-green-400">Neighborhood</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience authentic Nigerian cuisine and international dishes in
            our premium facilities - from family dining to VIP lounges, meeting
            rooms to children's playground.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Utensils className="mr-2 h-5 w-5" />
              Explore Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 bg-yellow-400 text-black px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">
                <Award className="mr-2 h-4 w-4" />
                About Foodies Arena
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Where <span className="text-green-600">Tradition</span> Meets{" "}
                <span className="text-yellow-600">Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the vibrant heart of Gonin Gora, Kaduna, Foodies
                Arena stands as the premier dining destination that brings
                together authentic Nigerian flavors and international cuisine
                under one roof.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art facility features private meeting rooms for
                business gatherings, a safe children's playground for family
                dining, an exclusive VIP lounge for special occasions, and a
                spacious main dining area that accommodates over 200 guests.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <ChefHat className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Expert Chefs
                    </div>
                    <div className="text-sm text-gray-600">
                      Professional culinary team
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Quality Assured
                    </div>
                    <div className="text-sm text-gray-600">
                      Fresh ingredients daily
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-green-600 bg-green-50 p-4 rounded-lg">
                <MapPin className="mr-3 h-6 w-6" />
                <div>
                  <div className="font-semibold">Visit Us Today</div>
                  <div className="text-sm">
                    Gonin Gora, Kaduna State, Nigeria
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/inview1.jpg?height=300&width=250"
                  alt="Restaurant interior"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg"
                />
                <Image
                  src="/images/inview2.jpg?height=200&width=250"
                  alt="Delicious food"
                  width={250}
                  height={200}
                  className="rounded-2xl shadow-lg mt-8"
                />
                <Image
                  src="/images/inview3.jpg?height=200&width=250"
                  alt="VIP lounge"
                  width={250}
                  height={200}
                  className="rounded-2xl shadow-lg -mt-8"
                />
                <Image
                  src="/images/inview4.jpg?height=300&width=250"
                  alt="Meeting room"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 mb-6">
              <Crown className="mr-2 h-4 w-4" />
              Premium Facilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              More Than Just a{" "}
              <span className="text-green-600">Restaurant</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our world-class facilities designed to cater to every
              occasion and need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-green-100 p-4 rounded-2xl mr-6 group-hover:bg-green-200 transition-colors">
                      <facility.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section
        id="menu"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">
              <Utensils className="mr-2 h-4 w-4" />
              Our Menu
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Culinary <span className="text-green-600">Excellence</span> Awaits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From authentic Nigerian classics to international favorites, every
              dish is crafted with passion
            </p>
          </div>

          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                  <span className="text-4xl mr-3">{category.icon}</span>
                  {category.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.dishes.map((dish, dishIndex) => (
                  <Card
                    key={dishIndex}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
                  >
                    <div className="relative">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {dish.popular && (
                        <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                          <Star className="mr-1 h-3 w-3" />
                          Popular
                        </Badge>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="font-bold text-green-600">
                          {dish.price}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {dish.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{dish.description}</p>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Add to Order
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 mb-6">
              <Star className="mr-2 h-4 w-4" />
              Customer Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our <span className="text-green-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our valued guests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 border-2 border-green-100"
                    />
                    <div>
                      <p className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">
              📸 Gallery
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visual <span className="text-green-600">Feast</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experience our ambiance and culinary artistry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 mb-6">
              <Phone className="mr-2 h-4 w-4" />
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visit Us <span className="text-green-600">Today</span>
            </h2>
            <p className="text-xl text-gray-600">
              We're here to serve you exceptional dining experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl">
                  <div className="bg-green-100 p-4 rounded-2xl mr-6">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Gonin Gora, Kaduna State, Nigeria
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      Easy parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl">
                  <div className="bg-green-100 p-4 rounded-2xl mr-6">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-gray-600">+234 803 123 4567</p>
                    <p className="text-sm text-green-600 mt-1">
                      Available 24/7 for orders
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl">
                  <div className="bg-green-100 p-4 rounded-2xl mr-6">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      Opening Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 8:00 AM - 11:00 PM
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      Extended hours on weekends
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white flex-1 py-3"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white flex-1 py-3"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Table
                </Button>
              </div>
            </div>

            <div className="h-96 lg:h-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.9500440690267!2d7.39988931147876!3d10.425539065523122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d37c377043e29%3A0xc0ee3ed7d66f002f!2sFoodies%20Arena!5e0!3m2!1sen!2sng!4v1750185644716!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-green-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/images/foodies-arena-logo.jpg"
                  alt="Foodies Arena Logo"
                  width={60}
                  height={40}
                  className="mr-3"
                />
                <h3 className="text-2xl font-bold">Foodies Arena</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Kaduna's premier dining destination offering authentic Nigerian
                cuisine, international dishes, and world-class facilities for
                every occasion.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://web.facebook.com/foodiesarenang/?_rdc=1&_rdr"
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Dine-in Restaurant</li>
                <li>Private Meeting Rooms</li>
                <li>VIP Lounge Experience</li>
                <li>Children's Playground</li>
                <li>Catering Services</li>
                <li>Event Hosting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-yellow-400" />
                  Gonin Gora, Kaduna
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-yellow-400" />
                  +234 803 123 4567
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-3 text-yellow-400" />
                  8:00 AM - 11:00 PM
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Foodies Arena. All rights
              reserved. | Designed with ❤️ for Kaduna
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
