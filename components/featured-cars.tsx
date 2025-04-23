import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Fuel, Gauge, Calendar } from "lucide-react"

// Sample car data
const cars = [
  {
    id: 1,
    title: "2023 Mercedes-Benz E-Class",
    price: 62500,
    image: "/placeholder.svg?height=600&width=800",
    condition: "new",
    type: "luxury",
    mileage: 15,
    fuelType: "Gasoline",
    year: 2023,
    location: "New York, NY",
  },
  {
    id: 2,
    title: "2022 Tesla Model 3",
    price: 45990,
    image: "/placeholder.svg?height=600&width=800",
    condition: "used",
    type: "electric",
    mileage: 12500,
    fuelType: "Electric",
    year: 2022,
    location: "Los Angeles, CA",
  },
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
    id: 4,
    title: "2021 Toyota RAV4",
    price: 32500,
    image: "/placeholder.svg?height=600&width=800",
    condition: "used",
    type: "suv",
    mileage: 28500,
    fuelType: "Gasoline",
    year: 2021,
    location: "Houston, TX",
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
    id: 6,
    title: "2020 Ford F-150",
    price: 38750,
    image: "/placeholder.svg?height=600&width=800",
    condition: "used",
    type: "truck",
    mileage: 35000,
    fuelType: "Gasoline",
    year: 2020,
    location: "Dallas, TX",
  },
]

interface FeaturedCarsProps {
  filter?: string
}

export function FeaturedCars({ filter }: FeaturedCarsProps) {
  const filteredCars = filter ? cars.filter((car) => car.condition === filter || car.type === filter) : cars

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <Card key={car.id} className="overflow-hidden group">
          <div className="relative">
            <img
              src={car.image || "/placeholder.svg"}
              alt={car.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            >
              <Heart className="h-5 w-5 text-slate-600" />
            </Button>
            <Badge className={`absolute top-2 left-2 ${car.condition === "new" ? "bg-green-500" : "bg-blue-500"}`}>
              {car.condition === "new" ? "New" : "Used"}
            </Badge>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-navy-900 line-clamp-1">{car.title}</h3>
              <span className="font-bold text-lg text-red-600">${car.price.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center text-sm text-slate-500">
                <Gauge className="h-4 w-4 mr-1" />
                {car.mileage.toLocaleString()} {car.condition === "new" ? "mi" : "miles"}
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <Fuel className="h-4 w-4 mr-1" />
                {car.fuelType}
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <Calendar className="h-4 w-4 mr-1" />
                {car.year}
              </div>
              <div className="flex items-center text-sm text-slate-500 truncate">{car.location}</div>
            </div>
            <div className="flex gap-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details</Button>
              <Button variant="outline" className="flex-shrink-0">
                Test Drive
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
