import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AdminNav } from "@/components/admin-nav"
import { Search, Plus, MoreHorizontal, Calendar, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample appointments data
const appointments = [
  {
    id: "A001",
    type: "Test Drive",
    customer: {
      name: "James Wilson",
      email: "james.wilson@example.com",
      phone: "(555) 456-7890",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2023 BMW X5",
    date: "Oct 25, 2023",
    time: "10:00 AM",
    status: "Scheduled",
    salesperson: "Michael Johnson",
    notes: "Customer is interested in the M Sport package.",
  },
  {
    id: "A002",
    type: "Service",
    customer: {
      name: "Laura Martinez",
      email: "laura.martinez@example.com",
      phone: "(555) 234-5678",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2021 Toyota RAV4",
    date: "Oct 25, 2023",
    time: "11:30 AM",
    status: "Scheduled",
    salesperson: "",
    notes: "Regular maintenance and oil change.",
  },
  {
    id: "A003",
    type: "Appraisal",
    customer: {
      name: "Daniel Johnson",
      email: "daniel.johnson@example.com",
      phone: "(555) 876-5432",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2019 Honda Accord",
    date: "Oct 25, 2023",
    time: "2:00 PM",
    status: "Scheduled",
    salesperson: "Emily Davis",
    notes: "Customer wants to trade in for a newer model.",
  },
  {
    id: "A004",
    type: "Test Drive",
    customer: {
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      phone: "(555) 234-5678",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2023 Audi e-tron GT",
    date: "Oct 26, 2023",
    time: "9:30 AM",
    status: "Scheduled",
    salesperson: "Robert Wilson",
    notes: "Customer specifically wants to test acceleration and range.",
  },
  {
    id: "A005",
    type: "Financing",
    customer: {
      name: "William Taylor",
      email: "william.taylor@example.com",
      phone: "(555) 789-0123",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2023 Honda Accord",
    date: "Oct 26, 2023",
    time: "11:00 AM",
    status: "Scheduled",
    salesperson: "Emily Davis",
    notes: "Customer has been pre-approved for financing.",
  },
  {
    id: "A006",
    type: "Test Drive",
    customer: {
      name: "Amanda Garcia",
      email: "amanda.garcia@example.com",
      phone: "(555) 987-6543",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2022 Tesla Model 3",
    date: "Oct 26, 2023",
    time: "3:00 PM",
    status: "Scheduled",
    salesperson: "Michael Johnson",
    notes: "First-time electric vehicle buyer.",
  },
  {
    id: "A007",
    type: "Service",
    customer: {
      name: "Mark Thompson",
      email: "mark.thompson@example.com",
      phone: "(555) 876-5432",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2022 Lexus RX",
    date: "Oct 27, 2023",
    time: "10:30 AM",
    status: "Scheduled",
    salesperson: "",
    notes: "Warranty service for navigation system.",
  },
  {
    id: "A008",
    type: "Test Drive",
    customer: {
      name: "Robert Brown",
      email: "robert.brown@example.com",
      phone: "(555) 123-4567",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2023 Mercedes-Benz E-Class",
    date: "Oct 27, 2023",
    time: "1:00 PM",
    status: "Scheduled",
    salesperson: "Robert Wilson",
    notes: "Customer is comparing with BMW 5 Series.",
  },
  {
    id: "A009",
    type: "Delivery",
    customer: {
      name: "Jessica Lee",
      email: "jessica.lee@example.com",
      phone: "(555) 234-5678",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    vehicle: "2023 Ford F-150",
    date: "Oct 27, 2023",
    time: "4:00 PM",
    status: "Scheduled",
    salesperson: "Michael Johnson",
    notes: "Final walkthrough and delivery of new vehicle.",
  },
]

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Appointments</h1>
            <p className="text-slate-500">Manage test drives, service appointments, and customer meetings</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-slate-500">2 test drives, 1 service</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tomorrow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-slate-500">3 test drives, 1 service, 1 delivery</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
              <p className="text-xs text-slate-500">5 test drives, 2 service, 1 delivery, 1 appraisal</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Test Drive Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-slate-500">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>Upcoming appointments for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="text-center font-medium">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 7 }).map((_, i) => {
                  const date = new Date()
                  date.setDate(date.getDate() + i)
                  const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })

                  const appointmentsForDay = appointments.filter(
                    (a) => a.date.includes(dateStr) || (i === 0 && a.date.includes("Oct 25")),
                  )

                  return (
                    <div
                      key={i}
                      className={`min-h-24 rounded-lg border p-2 ${i === 0 ? "bg-blue-50 border-blue-200" : ""}`}
                    >
                      <div className="text-right text-sm text-slate-500">{dateStr}</div>
                      {appointmentsForDay.length > 0 ? (
                        <div className="mt-1 text-xs">
                          {appointmentsForDay.map((appointment, idx) => (
                            <div
                              key={idx}
                              className={`rounded p-1 mb-1 ${
                                appointment.type === "Test Drive"
                                  ? "bg-blue-100 text-blue-800"
                                  : appointment.type === "Service"
                                    ? "bg-green-100 text-green-800"
                                    : appointment.type === "Delivery"
                                      ? "bg-purple-100 text-purple-800"
                                      : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {appointment.time} - {appointment.type}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-12 text-sm text-slate-400">
                          No appointments
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>By Appointment Type</CardTitle>
              <CardDescription>Distribution of upcoming appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span>Test Drive</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Service</span>
                  </div>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                    <span>Delivery</span>
                  </div>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span>Appraisal</span>
                  </div>
                  <span className="font-medium">1</span>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-medium">9</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="canceled">Canceled</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search appointments..." className="pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="test-drive">Test Drive</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="appraisal">Appraisal</SelectItem>
                  <SelectItem value="financing">Financing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Showing {appointments.length} scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell className="font-medium">{appointment.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              appointment.type === "Test Drive"
                                ? "border-blue-200 bg-blue-50 text-blue-700"
                                : appointment.type === "Service"
                                  ? "border-green-200 bg-green-50 text-green-700"
                                  : appointment.type === "Delivery"
                                    ? "border-purple-200 bg-purple-50 text-purple-700"
                                    : appointment.type === "Appraisal"
                                      ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                      : "border-orange-200 bg-orange-50 text-orange-700"
                            }
                          >
                            {appointment.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage
                                src={appointment.customer.avatar || "/placeholder.svg"}
                                alt={appointment.customer.name}
                              />
                              <AvatarFallback>{appointment.customer.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{appointment.customer.name}</div>
                              <div className="text-xs text-slate-500">{appointment.customer.phone}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.vehicle}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-slate-500" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center text-slate-500">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              {appointment.time}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {appointment.salesperson ? (
                            appointment.salesperson
                          ) : (
                            <span className="text-slate-500">Unassigned</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                            {appointment.status}
                          </Badge>
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
                              <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Cancel Appointment</DropdownMenuItem>
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
                <CardTitle>Completed Appointments</CardTitle>
                <CardDescription>Showing past appointments that have been completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-8 text-slate-500">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-medium mb-2">No completed appointments to display</h3>
                    <p>Completed appointments will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="canceled">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Canceled Appointments</CardTitle>
                <CardDescription>Showing appointments that were canceled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-8 text-slate-500">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-medium mb-2">No canceled appointments to display</h3>
                    <p>Canceled appointments will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
