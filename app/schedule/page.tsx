import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardNav } from "@/components/dashboard-nav"
import { Calendar } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardNav />
      <div className="flex-1 p-8 pt-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Schedule</h1>
            <p className="text-slate-500">Manage your gym schedule</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Calendar className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>View and manage all scheduled classes and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <div key={day} className="text-center font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => {
                const hasClass = Math.random() > 0.7
                return (
                  <div
                    key={i}
                    className={`min-h-24 rounded-lg border p-2 ${hasClass ? "bg-blue-50 border-blue-200" : ""}`}
                  >
                    <div className="text-right text-sm text-slate-500">{Math.floor(i / 7) + 1}</div>
                    {hasClass && (
                      <div className="mt-1 text-xs">
                        <div className="rounded bg-blue-100 p-1 mb-1 text-blue-800">9:00 AM - HIIT</div>
                        <div className="rounded bg-red-100 p-1 mb-1 text-red-800">11:00 AM - Yoga</div>
                        <div className="rounded bg-navy-100 p-1 text-navy-800">5:00 PM - Spin</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
