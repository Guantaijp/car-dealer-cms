import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AdminNav } from "@/components/admin-nav"
import { Search, Filter, MoreHorizontal, Plus, Download, Calendar, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample sales data
const sales = [
  {
    id: "S001",
    vehicle: "2022 BMW 5 Series",
    customer: "John Smith",
    salesperson: "Michael Johnson",
    price: 58900,
    cost: 51000,
    profit: 7900,
    date: "Oct 18, 2023",
    status: "Completed",
    paymentMethod: "Financing",
    financingDetails: "60 months @ 3.9% APR",
    commission: 1767,
  },
  {
    id: "S002",
    vehicle: "2021 Audi Q5",
    customer: "Sarah Williams",
    salesperson: "Emily Davis",
    price: 47500,
    cost: 41200,
    profit: 6300,
    date: "Oct 16, 2023",
    status: "Completed",
    paymentMethod: "Cash",
    financingDetails: "",
    commission: 1425,
  },
  {
    id: "S003",
    vehicle: "2023 Tesla Model Y",
    customer: "David Chen",
    salesperson: "Michael Johnson",
    price: 62400,
    cost: 55800,
    profit: 6600,
    date: "Oct 15, 2023",
    status: "Completed",
    paymentMethod: "Financing",
    financingDetails: "72 months @ 4.2% APR",
    commission: 1872,
  },
  {
    id: "S004",
    vehicle: "2020 Mercedes-Benz GLC",
    customer: "Jessica Lee",
    salesperson: "Robert Wilson",
    price: 41200,
    cost: 36500,
    profit: 4700,
    date: "Oct 12, 2023",
    status: "Completed",
    paymentMethod: "Financing",
    financingDetails: "60 months @ 3.5% APR",
    commission: 1236,
  },
  {
    id: "S005",
    vehicle: "2022 Lexus RX",
    customer: "Mark Thompson",
    salesperson: "Emily Davis",
    price: 52800,
    cost: 46300,
    profit: 6500,
    date: "Oct 10, 2023",
    status: "Completed",
    paymentMethod: "Cash",
    financingDetails: "",
    commission: 1584,
  },
  {
    id: "S006",
    vehicle: "2019 Toyota Camry",
    customer: "Lisa Rodriguez",
    salesperson: "Robert Wilson",
    price: 24500,
    cost: 21200,
    profit: 3300,
    date: "Oct 9, 2023",
    status: "Completed",
    paymentMethod: "Financing",
    financingDetails: "48 months @ 3.9% APR",
    commission: 735,
  },
  {
    id: "S007",
    vehicle: "2023 Ford F-150",
    customer: "Kevin Anderson",
    salesperson: "Michael Johnson",
    price: 56700,
    cost: 49300,
    profit: 7400,
    date: "Oct 8, 2023",
    status: "Completed",
    paymentMethod: "Financing",
    financingDetails: "60 months @ 4.5% APR",
    commission: 1701,
  },
  {
    id: "S008",
    vehicle: "2023 Honda Accord",
    customer: "William Taylor",
    salesperson: "Emily Davis",
    price: 32100,
    cost: 28400,
    profit: 3700,
    date: "Oct 7, 2023",
    status: "Pending",
    paymentMethod: "Financing",
    financingDetails: "Awaiting approval",
    commission: 963,
  },
  {
    id: "S009",
    vehicle: "2022 Kia Telluride",
    customer: "Laura Martinez",
    salesperson: "Robert Wilson",
    price: 44200,
    cost: 39000,
    profit: 5200,
    date: "Oct 5, 2023",
    status: "Completed",
    paymentMethod: "Cash",
    financingDetails: "",
    commission: 1326,
  },
]

export default function SalesPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Sales Management</h1>
            <p className="text-slate-500">Track and manage your vehicle sales</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="mr-2 h-4 w-4" />
              Record New Sale
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Sales This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$420,300</div>
              <p className="text-xs text-slate-500">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Profit This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$51,600</div>
              <p className="text-xs text-slate-500">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Sale Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$46,700</div>
              <p className="text-xs text-slate-500">+3% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All Sales</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search sales..." className="pl-8" />
              </div>
              <Button variant="outline" className="flex gap-2">
                <Calendar className="h-4 w-4" /> Oct 2023 <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>All Sales</CardTitle>
                <CardDescription>Showing {sales.length} recent sales</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sale ID</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Profit</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Salesperson</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.id}</TableCell>
                        <TableCell>{sale.vehicle}</TableCell>
                        <TableCell>{sale.customer}</TableCell>
                        <TableCell>${sale.price.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className="text-green-600">${sale.profit.toLocaleString()}</span>
                        </TableCell>
                        <TableCell>{sale.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              sale.status === "Completed"
                                ? "border-green-200 bg-green-50 text-green-700"
                                : "border-yellow-200 bg-yellow-50 text-yellow-700"
                            }
                          >
                            {sale.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{sale.salesperson}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Sale</DropdownMenuItem>
                              <DropdownMenuItem>View Invoice</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Void Sale</DropdownMenuItem>
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

          <TabsContent value="completed">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Completed Sales</CardTitle>
                <CardDescription>
                  Showing {sales.filter((s) => s.status === "Completed").length} completed sales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sale ID</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Profit</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead>Salesperson</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sales
                      .filter((sale) => sale.status === "Completed")
                      .map((sale) => (
                        <TableRow key={sale.id}>
                          <TableCell className="font-medium">{sale.id}</TableCell>
                          <TableCell>{sale.vehicle}</TableCell>
                          <TableCell>{sale.customer}</TableCell>
                          <TableCell>${sale.price.toLocaleString()}</TableCell>
                          <TableCell>
                            <span className="text-green-600">${sale.profit.toLocaleString()}</span>
                          </TableCell>
                          <TableCell>{sale.date}</TableCell>
                          <TableCell>{sale.paymentMethod}</TableCell>
                          <TableCell>{sale.salesperson}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Sale</DropdownMenuItem>
                                <DropdownMenuItem>View Invoice</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Void Sale</DropdownMenuItem>
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

          <TabsContent value="pending">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Pending Sales</CardTitle>
                <CardDescription>
                  Showing {sales.filter((s) => s.status === "Pending").length} pending sales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sale ID</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Salesperson</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sales
                      .filter((sale) => sale.status === "Pending")
                      .map((sale) => (
                        <TableRow key={sale.id}>
                          <TableCell className="font-medium">{sale.id}</TableCell>
                          <TableCell>{sale.vehicle}</TableCell>
                          <TableCell>{sale.customer}</TableCell>
                          <TableCell>${sale.price.toLocaleString()}</TableCell>
                          <TableCell>{sale.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
                              {sale.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{sale.salesperson}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Sale</DropdownMenuItem>
                                <DropdownMenuItem>Complete Sale</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Cancel Sale</DropdownMenuItem>
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

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Sales by Salesperson</CardTitle>
            <CardDescription>Performance overview of your sales team</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Salesperson</TableHead>
                  <TableHead>Sales Count</TableHead>
                  <TableHead>Total Sales</TableHead>
                  <TableHead>Total Profit</TableHead>
                  <TableHead>Commission Earned</TableHead>
                  <TableHead>Avg. Sale Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Michael Johnson",
                    avatar: "/placeholder.svg?height=32&width=32",
                    salesCount: 3,
                    totalSales: sales
                      .filter((s) => s.salesperson === "Michael Johnson")
                      .reduce((sum, s) => sum + s.price, 0),
                    totalProfit: sales
                      .filter((s) => s.salesperson === "Michael Johnson")
                      .reduce((sum, s) => sum + s.profit, 0),
                    commission: sales
                      .filter((s) => s.salesperson === "Michael Johnson")
                      .reduce((sum, s) => sum + s.commission, 0),
                  },
                  {
                    name: "Emily Davis",
                    avatar: "/placeholder.svg?height=32&width=32",
                    salesCount: 3,
                    totalSales: sales
                      .filter((s) => s.salesperson === "Emily Davis")
                      .reduce((sum, s) => sum + s.price, 0),
                    totalProfit: sales
                      .filter((s) => s.salesperson === "Emily Davis")
                      .reduce((sum, s) => sum + s.profit, 0),
                    commission: sales
                      .filter((s) => s.salesperson === "Emily Davis")
                      .reduce((sum, s) => sum + s.commission, 0),
                  },
                  {
                    name: "Robert Wilson",
                    avatar: "/placeholder.svg?height=32&width=32",
                    salesCount: 3,
                    totalSales: sales
                      .filter((s) => s.salesperson === "Robert Wilson")
                      .reduce((sum, s) => sum + s.price, 0),
                    totalProfit: sales
                      .filter((s) => s.salesperson === "Robert Wilson")
                      .reduce((sum, s) => sum + s.profit, 0),
                    commission: sales
                      .filter((s) => s.salesperson === "Robert Wilson")
                      .reduce((sum, s) => sum + s.commission, 0),
                  },
                ].map((salesperson) => (
                  <TableRow key={salesperson.name}>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={salesperson.avatar || "/placeholder.svg"} alt={salesperson.name} />
                          <AvatarFallback>{salesperson.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{salesperson.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{salesperson.salesCount}</TableCell>
                    <TableCell>${salesperson.totalSales.toLocaleString()}</TableCell>
                    <TableCell>${salesperson.totalProfit.toLocaleString()}</TableCell>
                    <TableCell>${salesperson.commission.toLocaleString()}</TableCell>
                    <TableCell>
                      ${Math.round(salesperson.totalSales / salesperson.salesCount).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
