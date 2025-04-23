import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdminNav } from "@/components/admin-nav"
import { DollarSign, Users, Car, Calendar, MoreHorizontal, Plus } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Dashboard</h1>
            <p className="text-slate-500">Welcome back to your dealership management system</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" />
            Add New Vehicle
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Inventory</CardTitle>
              <Car className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-slate-500">+8 new vehicles this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$342,500</div>
              <p className="text-xs text-slate-500">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Customer Leads</CardTitle>
              <Users className="h-4 w-4 text-navy-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <p className="text-xs text-slate-500">+24 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Test Drives</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-slate-500">Scheduled this week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="mt-8">
          <TabsList>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="sales">Recent Sales</TabsTrigger>
            <TabsTrigger value="leads">Customer Leads</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Inventory</CardTitle>
                <CardDescription>Manage your dealership inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Stock #</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Added</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        title: "2023 Mercedes-Benz E-Class",
                        stock: "MB12345",
                        price: 62500,
                        status: "Available",
                        added: "Oct 15, 2023",
                      },
                      {
                        id: 2,
                        title: "2022 Tesla Model 3",
                        stock: "TS54321",
                        price: 45990,
                        status: "Available",
                        added: "Oct 12, 2023",
                      },
                      {
                        id: 3,
                        title: "2023 BMW X5",
                        stock: "BM67890",
                        price: 68900,
                        status: "Reserved",
                        added: "Oct 10, 2023",
                      },
                      {
                        id: 4,
                        title: "2021 Toyota RAV4",
                        stock: "TY24680",
                        price: 32500,
                        status: "Available",
                        added: "Oct 8, 2023",
                      },
                      {
                        id: 5,
                        title: "2023 Audi e-tron GT",
                        stock: "AU13579",
                        price: 104900,
                        status: "Available",
                        added: "Oct 5, 2023",
                      },
                    ].map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell className="font-medium">{vehicle.title}</TableCell>
                        <TableCell>{vehicle.stock}</TableCell>
                        <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              vehicle.status === "Available"
                                ? "border-green-200 bg-green-50 text-green-700"
                                : "border-yellow-200 bg-yellow-50 text-yellow-700"
                            }
                          >
                            {vehicle.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{vehicle.added}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>View your latest vehicle sales</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Sale Price</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Salesperson</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        vehicle: "2022 BMW 5 Series",
                        customer: "John Smith",
                        price: 58900,
                        date: "Oct 18, 2023",
                        salesperson: "Michael Johnson",
                      },
                      {
                        id: 2,
                        vehicle: "2021 Audi Q5",
                        customer: "Sarah Williams",
                        price: 47500,
                        date: "Oct 16, 2023",
                        salesperson: "Emily Davis",
                      },
                      {
                        id: 3,
                        vehicle: "2023 Tesla Model Y",
                        customer: "David Chen",
                        price: 62400,
                        date: "Oct 15, 2023",
                        salesperson: "Michael Johnson",
                      },
                      {
                        id: 4,
                        vehicle: "2020 Mercedes-Benz GLC",
                        customer: "Jessica Lee",
                        price: 41200,
                        date: "Oct 12, 2023",
                        salesperson: "Robert Wilson",
                      },
                      {
                        id: 5,
                        vehicle: "2022 Lexus RX",
                        customer: "Mark Thompson",
                        price: 52800,
                        date: "Oct 10, 2023",
                        salesperson: "Emily Davis",
                      },
                    ].map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.vehicle}</TableCell>
                        <TableCell>{sale.customer}</TableCell>
                        <TableCell>${sale.price.toLocaleString()}</TableCell>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>{sale.salesperson}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Leads</CardTitle>
                <CardDescription>Manage your potential customers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        name: "Robert Brown",
                        email: "robert@example.com",
                        phone: "(555) 123-4567",
                        interest: "2023 Mercedes-Benz E-Class",
                        status: "New",
                        created: "Oct 20, 2023",
                      },
                      {
                        id: 2,
                        name: "Amanda Garcia",
                        email: "amanda@example.com",
                        phone: "(555) 987-6543",
                        interest: "2022 Tesla Model 3",
                        status: "Contacted",
                        created: "Oct 19, 2023",
                      },
                      {
                        id: 3,
                        name: "James Wilson",
                        email: "james@example.com",
                        phone: "(555) 456-7890",
                        interest: "2023 BMW X5",
                        status: "Test Drive Scheduled",
                        created: "Oct 18, 2023",
                      },
                      {
                        id: 4,
                        name: "Sophia Martinez",
                        email: "sophia@example.com",
                        phone: "(555) 234-5678",
                        interest: "2021 Toyota RAV4",
                        status: "Negotiating",
                        created: "Oct 17, 2023",
                      },
                      {
                        id: 5,
                        name: "Daniel Johnson",
                        email: "daniel@example.com",
                        phone: "(555) 876-5432",
                        interest: "2023 Audi e-tron GT",
                        status: "New",
                        created: "Oct 16, 2023",
                      },
                    ].map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={lead.name} />
                              <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{lead.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{lead.email}</div>
                          <div className="text-sm text-slate-500">{lead.phone}</div>
                        </TableCell>
                        <TableCell>{lead.interest}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              lead.status === "New"
                                ? "border-blue-200 bg-blue-50 text-blue-700"
                                : lead.status === "Contacted"
                                  ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                  : lead.status === "Test Drive Scheduled"
                                    ? "border-purple-200 bg-purple-50 text-purple-700"
                                    : "border-green-200 bg-green-50 text-green-700"
                            }
                          >
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{lead.created}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
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
