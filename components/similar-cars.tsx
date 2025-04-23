import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Fuel, Gauge } from "lucide-react"

// Sample car data
const similarCars = [
  {
    id: 3,
    title: "2023 BMW X5",
    price: 68900,
    image: "/placeholder.svg?height=600&width=800",
    condition: "new",
    type: "luxury",
    mileage: 25,
    fuelType: "Hybrid",
    year: 2023,
    location: "Chicago, IL",
  },
  {
    id: 5,
    title: "2023 Audi e-tron GT",
    price: 104900,
    image: "/placeholder.svg?height=600&width=800",
    condition: "new",
    type: "electric",
    mileage: 10,
    fuelType: "Electric",
    year: 2023,
    location: "Miami, FL",
  },
  {
    id: 8,
    title: "2023 Porsche 911",
    price: 115000,
    image: "/placeholder.svg?height=600&width=800",
    condition: "new",
    type: "luxury",
    mileage: 5,
    fuelType: "Gasoline",
    year: 2023,
    location: "San Francisco, CA",
  },
]

export function SimilarCars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {similarCars.map((car) => (
        <Card key={car.id} className="overflow-hidden group">
          <div className="relative">
            <img
              src={car.image || "/placeholder.svg"}
              alt={car.title}
              className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            >
              <Heart className="h-4 w-4 text-slate-600" />
            </Button>
            <Badge className={`absolute top-2 left-2 ${car.condition === "new" ? "bg-green-500" : "bg-blue-500"}`}>
              {car.condition === "new" ? "New" : "Used"}
            </Badge>
          </div>
          <CardContent className="p-3">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-sm text-navy-900 line-clamp-1">{car.title}</h3>
              <span className="font-bold text-sm text-red-600">${car.price.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-2 gap-1 mb-2 text-xs">
              <div className="flex items-center text-slate-500">
                <Gauge className="h-3 w-3 mr-1" />
                {car.mileage.toLocaleString()} mi
              </div>
              <div className="flex items-center text-slate-500">
                <Fuel className="h-3 w-3 mr-1" />
                {car.fuelType}
              </div>
            </div>
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
