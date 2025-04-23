import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Fuel, Gauge, MapPin, Shield, Star, ThumbsUp, Zap } from "lucide-react"
import { SimilarCars } from "@/components/similar-cars"
import { FinanceCalculator } from "@/components/finance-calculator"

// Sample car data
const car = {
  id: 1,
  title: "2023 Mercedes-Benz E-Class",
  subtitle: "E 350 4MATIC Sedan",
  price: 62500,
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  condition: "new",
  type: "luxury",
  mileage: 15,
  fuelType: "Gasoline",
  year: 2023,
  location: "New York, NY",
  exteriorColor: "Obsidian Black Metallic",
  interiorColor: "Black/Nut Brown",
  transmission: "9-Speed Automatic",
  drivetrain: "All-Wheel Drive",
  engine: "2.0L Inline-4 Turbo",
  fuelEconomy: "23 City / 30 Hwy",
  vin: "WDDZF4JB7LA123456",
  stockNumber: "MB12345",
  features: [
    "Premium Package",
    "Driver Assistance Package",
    "Parking Assistance Package",
    "Burmester Surround Sound System",
    "Panoramic Sunroof",
    "Heated Front Seats",
    "Wireless Charging",
    "Apple CarPlay & Android Auto",
    "Navigation System",
    "Blind Spot Assist",
    "Lane Keeping Assist",
    "Active Brake Assist",
  ],
  description:
    "Experience the pinnacle of luxury and performance with this 2023 Mercedes-Benz E-Class. This stunning E 350 4MATIC Sedan combines elegant design, cutting-edge technology, and exhilarating performance. With its premium features and impeccable craftsmanship, this vehicle offers an unparalleled driving experience. The Obsidian Black Metallic exterior paired with the Black/Nut Brown interior creates a sophisticated aesthetic that turns heads wherever you go. Powered by a responsive 2.0L Inline-4 Turbo engine and equipped with 4MATIC all-wheel drive, this E-Class delivers confident handling and performance in all conditions.",
}

export default function CarDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
            <div>
              <h1 className="text-3xl font-bold text-navy-900">{car.title}</h1>
              <p className="text-slate-600">{car.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500">New</Badge>
              <Badge className="bg-blue-600">Featured</Badge>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden mb-2">
              <img src={car.images[0] || "/placeholder.svg"} alt={car.title} className="w-full h-96 object-cover" />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {car.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${car.title} - View ${index + 2}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <Gauge className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm text-slate-500">Mileage</span>
              <span className="font-bold text-navy-900">{car.mileage} miles</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <Fuel className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm text-slate-500">Fuel Type</span>
              <span className="font-bold text-navy-900">{car.fuelType}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm text-slate-500">Year</span>
              <span className="font-bold text-navy-900">{car.year}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm text-slate-500">Location</span>
              <span className="font-bold text-navy-900">{car.location}</span>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Overview</CardTitle>
                  <CardDescription>Key information about this vehicle</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{car.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="text-navy-900">Factory Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-blue-600" />
                      <span className="text-navy-900">Premium Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-5 w-5 text-blue-600" />
                      <span className="text-navy-900">Excellent Condition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <span className="text-navy-900">High Performance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Features & Options</CardTitle>
                  <CardDescription>This vehicle comes equipped with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specs" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Detailed specifications of this vehicle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Exterior Color</span>
                        <span className="font-medium text-navy-900">{car.exteriorColor}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-slate-500">Interior Color</span>
                        <span className="font-medium text-navy-900">{car.interiorColor}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-slate-500">Transmission</span>
                        <span className="font-medium text-navy-900">{car.transmission}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-slate-500">Drivetrain</span>
                        <span className="font-medium text-navy-900">{car.drivetrain}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Engine</span>
                        <span className="font-medium text-navy-900">{car.engine}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-slate-500">Fuel Economy</span>
                        <span className="font-medium text-navy-900">{car.fuelEconomy}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-slate-500">VIN</span>
                        <span className="font-medium text-navy-900">{car.vin}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-slate-500">Stock #</span>
                        <span className="font-medium text-navy-900">{car.stockNumber}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Similar Cars */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-navy-900">Similar Vehicles</h2>
            <SimilarCars />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600">${car.price.toLocaleString()}</CardTitle>
              <CardDescription>Plus taxes & licensing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button className="w-full bg-red-600 hover:bg-red-700">Contact Seller</Button>
                <Button variant="outline" className="flex-shrink-0">
                  Test Drive
                </Button>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold text-navy-900 mb-2">Interested in financing?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Use our finance calculator to estimate your monthly payments.
                </p>
                <FinanceCalculator price={car.price} />
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-bold text-navy-900 mb-2">Vehicle Location</h3>
                <p className="text-sm text-slate-600 mb-2">
                  123 Auto Drive
                  <br />
                  {car.location}
                </p>
                <div className="h-40 bg-slate-200 rounded-lg mb-2"></div>
                <Button variant="outline" size="sm" className="w-full">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
