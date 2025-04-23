import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AdminNav } from "@/components/admin-nav"
import { Search, Filter, MoreHorizontal, Plus, Pencil, Trash2, Eye } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample inventory data
const vehicles = [
  {
    id: 1,
    title: "2023 Mercedes-Benz E-Class",
    stock: "MB12345",
    vin: "WDDZF4JB7LA123456",
    price: 62500,
    cost: 55000,
    status: "Available",
    condition: "New",
    mileage: 15,
    year: 2023,
    make: "Mercedes-Benz",
    model: "E-Class",
    added: "Oct 15, 2023",
    location: "Main Showroom",
  },
  {
    id: 2,
    title: "2022 Tesla Model 3",
    stock: "TS54321",
    vin: "5YJ3E1EA8NF123456",
    price: 45990,
    cost: 40000,
    status: "Available",
    condition: "Used",
    mileage: 12500,
    year: 2022,
    make: "Tesla",
    model: "Model 3",
    added: "Oct 12, 2023",
    location: "Main Showroom",
  },
  {
    id: 3,
    title: "2023 BMW X5",
    stock: "BM67890",
    vin: "5UXCR6C56N9123456",
    price: 68900,
    cost: 60000,
    status: "Reserved",
    condition: "New",
    mileage: 25,
    year: 2023,
    make: "BMW",
    model: "X5",
    added: "Oct 10, 2023",
    location: "North Branch",
  },
  {
    id: 4,
    title: "2021 Toyota RAV4",
    stock: "TY24680",
    vin: "JTMRJREV5MD123456",
    price: 32500,
    cost: 28000,
    status: "Available",
    condition: "Used",
    mileage: 28500,
    year: 2021,
    make: "Toyota",
    model: "RAV4",
    added: "Oct 8, 2023",
    location: "South Branch",
  },
  {
    id: 5,
    title: "2023 Audi e-tron GT",
    stock: "AU13579",
    vin: "WAUEAAF86PN123456",
    price: 104900,
    cost: 92000,
    status: "Available",
    condition: "New",
    mileage: 10,
    year: 2023,
    make: "Audi",
    model: "e-tron GT",
    added: "Oct 5, 2023",
    location: "Main Showroom",
  },
  {
    id: 6,
    title: "2020 Ford F-150",
    stock: "FD97531",
    vin: "1FTEW1EP5LFA12345",
    price: 38750,
    cost: 33000,
    status: "Sold",
    condition: "Used",
    mileage: 35000,
    year: 2020,
    make: "Ford",
    model: "F-150",
    added: "Oct 3, 2023",
    location: "North Branch",
  },
  {
    id: 7,
    title: "2022 Honda Civic",
    stock: "HC24680",
    vin: "2HGFE2F52NH123456",
    price: 25990,
    cost: 22000,
    status: "Available",
    condition: "Used",
    mileage: 18500,
    year: 2022,
    make: "Honda",
    model: "Civic",
    added: "Oct 1, 2023",
    location: "South Branch",
  },
  {
    id: 8,
    title: "2023 Porsche 911",
    stock: "PC13579",
    vin: "WP0AB2A92NS123456",
    price: 115000,
    cost: 100000,
    status: "Available",
    condition: "New",
    mileage: 5,
    year: 2023,
    make: "Porsche",
    model: "911",
    added: "Sep 28, 2023",
    location: "Main Showroom",
  },
]

export default function InventoryPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Inventory Management</h1>
            <p className="text-slate-500">Manage your vehicle inventory</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" />
            Add New Vehicle
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All Vehicles</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="used">Used</TabsTrigger>
              <TabsTrigger value="reserved">Reserved</TabsTrigger>
              <TabsTrigger value="sold">Sold</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search inventory..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>All Vehicles</CardTitle>
                <CardDescription>Showing {vehicles.length} vehicles in inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Stock #</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicles.map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{vehicle.title}</div>
                            <div className="text-sm text-slate-500">
                              {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{vehicle.stock}</TableCell>
                        <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                        <TableCell>${vehicle.cost.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              vehicle.status === "Available"
                                ? "border-green-200 bg-green-50 text-green-700"
                                : vehicle.status === "Reserved"
                                  ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                  : "border-blue-200 bg-blue-50 text-blue-700"
                            }
                          >
                            {vehicle.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{vehicle.location}</TableCell>
                        <TableCell>{vehicle.added}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Vehicle
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Vehicle
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>New Vehicles</CardTitle>
                <CardDescription>
                  Showing {vehicles.filter((v) => v.condition === "New").length} new vehicles in inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Stock #</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicles
                      .filter((vehicle) => vehicle.condition === "New")
                      .map((vehicle) => (
                        <TableRow key={vehicle.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{vehicle.title}</div>
                              <div className="text-sm text-slate-500">
                                {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{vehicle.stock}</TableCell>
                          <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                          <TableCell>${vehicle.cost.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                vehicle.status === "Available"
                                  ? "border-green-200 bg-green-50 text-green-700"
                                  : vehicle.status === "Reserved"
                                    ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                    : "border-blue-200 bg-blue-50 text-blue-700"
                              }
                            >
                              {vehicle.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{vehicle.location}</TableCell>
                          <TableCell>{vehicle.added}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit Vehicle
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete Vehicle
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="used">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Used Vehicles</CardTitle>
                <CardDescription>
                  Showing {vehicles.filter((v) => v.condition === "Used").length} used vehicles in inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Stock #</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicles
                      .filter((vehicle) => vehicle.condition === "Used")
                      .map((vehicle) => (
                        <TableRow key={vehicle.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{vehicle.title}</div>
                              <div className="text-sm text-slate-500">
                                {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{vehicle.stock}</TableCell>
                          <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                          <TableCell>${vehicle.cost.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                vehicle.status === "Available"
                                  ? "border-green-200 bg-green-50 text-green-700"
                                  : vehicle.status === "Reserved"
                                    ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                    : "border-blue-200 bg-blue-50 text-blue-700"
                              }
                            >
                              {vehicle.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{vehicle.location}</TableCell>
                          <TableCell>{vehicle.added}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit Vehicle
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete Vehicle
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reserved">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Reserved Vehicles</CardTitle>
                <CardDescription>
                  Showing {vehicles.filter((v) => v.status === "Reserved").length} reserved vehicles in inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Stock #</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicles
                      .filter((vehicle) => vehicle.status === "Reserved")
                      .map((vehicle) => (
                        <TableRow key={vehicle.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{vehicle.title}</div>
                              <div className="text-sm text-slate-500">
                                {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{vehicle.stock}</TableCell>
                          <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                          <TableCell>${vehicle.cost.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
                              {vehicle.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{vehicle.location}</TableCell>
                          <TableCell>{vehicle.added}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit Vehicle
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete Vehicle
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sold">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Sold Vehicles</CardTitle>
                <CardDescription>
                  Showing {vehicles.filter((v) => v.status === "Sold").length} sold vehicles in inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Stock #</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicles
                      .filter((vehicle) => vehicle.status === "Sold")
                      .map((vehicle) => (
                        <TableRow key={vehicle.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{vehicle.title}</div>
                              <div className="text-sm text-slate-500">
                                {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{vehicle.stock}</TableCell>
                          <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                          <TableCell>${vehicle.cost.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                              {vehicle.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{vehicle.location}</TableCell>
                          <TableCell>{vehicle.added}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit Vehicle
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete Vehicle
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
