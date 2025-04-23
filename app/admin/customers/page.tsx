import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AdminNav } from "@/components/admin-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal, Plus, Mail, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample customers data
const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    status: "Active",
    type: "Buyer",
    lastPurchase: "2023 BMW 5 Series",
    purchaseDate: "Oct 18, 2023",
    totalSpent: 58900,
    notes: "Interested in luxury vehicles",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    phone: "(555) 987-6543",
    status: "Active",
    type: "Buyer",
    lastPurchase: "2021 Audi Q5",
    purchaseDate: "Oct 16, 2023",
    totalSpent: 47500,
    notes: "Prefers SUVs",
  },
  {
    id: 3,
    name: "David Chen",
    email: "david.chen@example.com",
    phone: "(555) 456-7890",
    status: "Active",
    type: "Buyer",
    lastPurchase: "2023 Tesla Model Y",
    purchaseDate: "Oct 15, 2023",
    totalSpent: 62400,
    notes: "Interested in electric vehicles",
  },
  {
    id: 4,
    name: "Jessica Lee",
    email: "jessica.lee@example.com",
    phone: "(555) 234-5678",
    status: "Active",
    type: "Buyer",
    lastPurchase: "2020 Mercedes-Benz GLC",
    purchaseDate: "Oct 12, 2023",
    totalSpent: 41200,
    notes: "Looking for family-friendly vehicles",
  },
  {
    id: 5,
    name: "Mark Thompson",
    email: "mark.thompson@example.com",
    phone: "(555) 876-5432",
    status: "Active",
    type: "Buyer",
    lastPurchase: "2022 Lexus RX",
    purchaseDate: "Oct 10, 2023",
    totalSpent: 52800,
    notes: "Repeat customer, prefers luxury brands",
  },
  {
    id: 6,
    name: "Amanda Garcia",
    email: "amanda.garcia@example.com",
    phone: "(555) 987-6543",
    status: "Lead",
    type: "Prospect",
    lastPurchase: "",
    purchaseDate: "",
    totalSpent: 0,
    notes: "Interested in 2022 Tesla Model 3",
  },
  {
    id: 7,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    phone: "(555) 123-4567",
    status: "Lead",
    type: "Prospect",
    lastPurchase: "",
    purchaseDate: "",
    totalSpent: 0,
    notes: "Interested in 2023 Mercedes-Benz E-Class",
  },
  {
    id: 8,
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "(555) 456-7890",
    status: "Lead",
    type: "Prospect",
    lastPurchase: "",
    purchaseDate: "",
    totalSpent: 0,
    notes: "Test drive scheduled for 2023 BMW X5",
  },
]

export default function CustomersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Customer Management</h1>
            <p className="text-slate-500">Manage your customers and leads</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" />
            Add New Customer
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All Customers</TabsTrigger>
              <TabsTrigger value="buyers">Buyers</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search customers..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>All Customers</CardTitle>
                <CardDescription>Showing {customers.length} customers and leads</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Purchase</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={customer.name} />
                              <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{customer.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="flex items-center text-sm">
                              <Mail className="h-3.5 w-3.5 mr-1 text-slate-500" />
                              {customer.email}
                            </div>
                            <div className="flex items-center text-sm text-slate-500">
                              <Phone className="h-3.5 w-3.5 mr-1" />
                              {customer.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              customer.status === "Active"
                                ? "border-green-200 bg-green-50 text-green-700"
                                : "border-blue-200 bg-blue-50 text-blue-700"
                            }
                          >
                            {customer.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {customer.lastPurchase ? (
                            <div>
                              <div>{customer.lastPurchase}</div>
                              <div className="text-sm text-slate-500">{customer.purchaseDate}</div>
                            </div>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {customer.totalSpent > 0 ? (
                            <span className="font-medium">${customer.totalSpent.toLocaleString()}</span>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-slate-500 line-clamp-1">{customer.notes}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                              <DropdownMenuItem>Contact History</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Delete Customer</DropdownMenuItem>
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

          <TabsContent value="buyers">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Buyers</CardTitle>
                <CardDescription>
                  Showing {customers.filter((c) => c.type === "Buyer").length} customers who have made purchases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Purchase</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers
                      .filter((customer) => customer.type === "Buyer")
                      .map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={customer.name} />
                                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="font-medium">{customer.name}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <div className="flex items-center text-sm">
                                <Mail className="h-3.5 w-3.5 mr-1 text-slate-500" />
                                {customer.email}
                              </div>
                              <div className="flex items-center text-sm text-slate-500">
                                <Phone className="h-3.5 w-3.5 mr-1" />
                                {customer.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                              {customer.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div>{customer.lastPurchase}</div>
                              <div className="text-sm text-slate-500">{customer.purchaseDate}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="font-medium">${customer.totalSpent.toLocaleString()}</span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm text-slate-500 line-clamp-1">{customer.notes}</span>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                                <DropdownMenuItem>Contact History</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete Customer</DropdownMenuItem>
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

          <TabsContent value="leads">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Leads</CardTitle>
                <CardDescription>
                  Showing {customers.filter((c) => c.type === "Prospect").length} potential customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers
                      .filter((customer) => customer.type === "Prospect")
                      .map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={customer.name} />
                                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="font-medium">{customer.name}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <div className="flex items-center text-sm">
                                <Mail className="h-3.5 w-3.5 mr-1 text-slate-500" />
                                {customer.email}
                              </div>
                              <div className="flex items-center text-sm text-slate-500">
                                <Phone className="h-3.5 w-3.5 mr-1" />
                                {customer.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                              {customer.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm">{customer.notes}</span>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                                <DropdownMenuItem>Convert to Customer</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete Lead</DropdownMenuItem>
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
