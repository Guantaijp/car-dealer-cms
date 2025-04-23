import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Shield, Award, Clock, ChevronRight } from "lucide-react"
import { FeaturedCars } from "@/components/featured-cars"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { BrandSlider } from "@/components/brand-slider"
import { SearchForm } from "@/components/search-form"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
          ></div>
        </div>
        <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Find Your Perfect Drive</h1>
            <p className="mt-4 text-xl">
              Premium selection of quality vehicles at competitive prices. Your journey to the perfect car starts here.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Browse Inventory
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Book Test Drive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-16 relative z-10 bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-navy-900">Find Your Dream Car</h2>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a premium car buying experience with quality vehicles and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Car,
                title: "Wide Selection",
                description: "Browse through hundreds of quality vehicles to find your perfect match.",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "All our vehicles undergo a rigorous 150-point inspection process.",
              },
              {
                icon: Award,
                title: "Best Prices",
                description: "Competitive pricing and flexible financing options to fit your budget.",
              },
              {
                icon: Clock,
                title: "Fast & Easy",
                description: "Streamlined buying process to get you on the road quickly.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-navy-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900">Featured Vehicles</h2>
            <Link href="/inventory" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="used">Used</TabsTrigger>
              <TabsTrigger value="electric">Electric</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <FeaturedCars />
            </TabsContent>
            <TabsContent value="new" className="mt-6">
              <FeaturedCars filter="new" />
            </TabsContent>
            <TabsContent value="used" className="mt-6">
              <FeaturedCars filter="used" />
            </TabsContent>
            <TabsContent value="electric" className="mt-6">
              <FeaturedCars filter="electric" />
            </TabsContent>
            <TabsContent value="luxury" className="mt-6">
              <FeaturedCars filter="luxury" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Brands We Carry</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a wide selection of top automotive brands to choose from.
            </p>
          </div>
          <BrandSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-navy-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our inventory or schedule a test drive today. Our team is ready to help you find your dream car.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Browse Inventory
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
