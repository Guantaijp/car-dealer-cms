import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DashboardNav } from "@/components/dashboard-nav"
import { cn } from "@/lib/utils"
import { Plus, Users, Clock, Calendar } from "lucide-react"

const classes = [
  {
    id: "C001",
    name: "HIIT Training",
    instructor: "John Smith",
    capacity: 20,
    enrolled: 18,
    schedule: "Mon, Wed, Fri",
    time: "9:00 AM - 10:00 AM",
    level: "Advanced",
    status: "Active",
  },
  {
    id: "C002",
    name: "Yoga Flow",
    instructor: "Sarah Lee",
    capacity: 15,
    enrolled: 12,
    schedule: "Tue, Thu",
    time: "10:30 AM - 11:30 AM",
    level: "Beginner",
    status: "Active",
  },
  {
    id: "C003",
    name: "Spin Class",
    instructor: "Mike Johnson",
    capacity: 25,
    enrolled: 22,
    schedule: "Mon, Wed, Fri",
    time: "5:00 PM - 6:00 PM",
    level: "Intermediate",
    status: "Active",
  },
  {
    id: "C004",
    name: "Strength Training",
    instructor: "Emma Davis",
    capacity: 15,
    enrolled: 10,
    schedule: "Tue, Thu, Sat",
    time: "6:30 PM - 7:30 PM",
    level: "Intermediate",
    status: "Active",
  },
  {
    id: "C005",
    name: "Pilates",
    instructor: "Lisa Wang",
    capacity: 12,
    enrolled: 8,
    schedule: "Mon, Wed",
    time: "11:00 AM - 12:00 PM",
    level: "Beginner",
    status: "Active",
  },
  {
    id: "C006",
    name: "Boxing",
    instructor: "James Wilson",
    capacity: 15,
    enrolled: 15,
    schedule: "Tue, Thu",
    time: "7:00 PM - 8:00 PM",
    level: "Advanced",
    status: "Full",
  },
]

export default function ClassesPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardNav />
      <div className="flex-1 p-8 pt-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Classes</h1>
            <p className="text-slate-500">Manage your gym classes</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Class
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="overflow-hidden">
              <div className="h-3 bg-blue-600" />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>{classItem.name}</CardTitle>
                  <Badge
                    variant="outline"
                    className={cn(
                      classItem.status === "Active"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-yellow-200 bg-yellow-50 text-yellow-700",
                    )}
                  >
                    {classItem.status}
                  </Badge>
                </div>
                <CardDescription>
                  <div className="flex items-center mt-1">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={classItem.instructor} />
                      <AvatarFallback>{classItem.instructor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{classItem.instructor}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {classItem.schedule}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Users className="h-4 w-4 mr-2" />
                    {classItem.enrolled} / {classItem.capacity} enrolled
                  </div>
                  <div className="pt-2">
                    <Badge
                      variant="outline"
                      className={cn(
                        classItem.level === "Beginner"
                          ? "border-green-200 bg-green-50 text-green-700"
                          : classItem.level === "Intermediate"
                            ? "border-blue-200 bg-blue-50 text-blue-700"
                            : "border-red-200 bg-red-50 text-red-700",
                      )}
                    >
                      {classItem.level}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
