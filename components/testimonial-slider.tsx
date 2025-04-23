"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Owner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I was amazed by the selection and quality of vehicles. The staff was knowledgeable and helped me find the perfect car for my needs. The buying process was smooth and transparent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As a first-time car buyer, I was nervous about the process. The team made it easy and stress-free. They explained everything clearly and helped me get a great financing option.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I've bought several cars over the years, and this was by far the best experience. No pressure, fair prices, and excellent customer service. I'll definitely be back for my next vehicle.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Teacher",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The team went above and beyond to help me find a car that fit my budget. They were patient, attentive, and genuinely cared about my needs. Highly recommend!",
    rating: 4,
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex(Math.min(testimonials.length - 3, currentIndex + 1))
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-none shadow-md">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              <p className="text-slate-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - 3}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
