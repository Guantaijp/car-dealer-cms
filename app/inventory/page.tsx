import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Fuel, Gauge, Calendar, Search, Filter } from "lucide-react"
import { Pagination } from "@/components/pagination"

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
  {
    id: 7,
    title: "2022 Honda Civic",
    price: 25990,
    image: "/placeholder.svg?height=600&width=800",
    condition: "used",
    type: "sedan",
    mileage: 18500,
    fuelType: "Gasoline",
    year: 2022,
    location: "Phoenix, AZ",
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
  {
    id: 9,
    title: "2021 Chevrolet Bolt EV",
    price: 32500,
    image: "/placeholder.svg?height=600&width=800",
    condition: "used",
    type: "electric",
    mileage: 22000,
    fuelType: "Electric",
    year: 2021,
    location: "Seattle, WA",
  },
]

export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-navy-900">Our Inventory</h1>
      <p className="text-slate-600 mb-8">Browse our selection of quality vehicles</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-navy-900">Filters</h2>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-base">Price Range</Label>
                  <div className="pt-4 px-2">
                    <Slider defaultValue={[0, 100000]} max={200000} step={5000} />
                    <div className="flex justify-between mt-2 text-sm text-slate-500">
                      <span>$0</span>
                      <span>$200,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base">Make</Label>
                  <div className="space-y-2 mt-2">
                    {["Audi", "BMW", "Ford", "Honda", "Mercedes-Benz", "Toyota", "Tesla"].map((make) => (
                      <div key={make} className="flex items-center space-x-2">
                        <Checkbox id={`make-${make}`} />
                        <label
                          htmlFor={`make-${make}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {make}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base">Year</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <Label htmlFor="year-min" className="text-xs">
                        Min
                      </Label>
                      <Select>
                        <SelectTrigger id="year-min">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 9 + i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="year-max" className="text-xs">
                        Max
                      </Label>
                      <Select>
                        <SelectTrigger id="year-max">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 9 + i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base">Condition</Label>
                  <div className="space-y-2 mt-2">
                    {["New", "Used", "Certified Pre-Owned"].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox id={`condition-${condition}`} />
                        <label
                          htmlFor={`condition-${condition}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base">Fuel Type</Label>
                  <div className="space-y-2 mt-2">
                    {["Gasoline", "Diesel", "Electric", "Hybrid"].map((fuel) => (
                      <div key={fuel} className="flex items-center space-x-2">
                        <Checkbox id={`fuel-${fuel}`} />
                        <label
                          htmlFor={`fuel-${fuel}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {fuel}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input type="search" placeholder="Search inventory..." className="pl-8" />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by: Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
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
                  <Badge
                    className={`absolute top-2 left-2 ${car.condition === "new" ? "bg-green-500" : "bg-blue-500"}`}
                  >
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

          <Pagination className="mt-8" />
        </div>
      </div>
    </div>
  )
}
