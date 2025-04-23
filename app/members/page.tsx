import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DashboardNav } from "@/components/dashboard-nav"
import { cn } from "@/lib/utils"
import { Search, Filter, MoreHorizontal, UserPlus } from "lucide-react"

const members = [
  {
    id: "M001",
    name: "Alex Johnson",
    email: "alex@example.com",
    plan: "Premium",
    joinDate: "Oct 12, 2023",
    status: "Active",
    lastVisit: "Today",
  },
  {
    id: "M002",
    name: "Sarah Williams",
    email: "sarah@example.com",
    plan: "Basic",
    joinDate: "Oct 15, 2023",
    status: "Active",
    lastVisit: "Yesterday",
  },
  {
    id: "M003",
    name: "Michael Brown",
    email: "michael@example.com",
    plan: "Premium",
    joinDate: "Oct 18, 2023",
    status: "Active",
    lastVisit: "2 days ago",
  },
  {
    id: "M004",
    name: "Emily Davis",
    email: "emily@example.com",
    plan: "Standard",
    joinDate: "Oct 20, 2023",
    status: "Pending",
    lastVisit: "Never",
  },
  {
    id: "M005",
    name: "David Wilson",
    email: "david@example.com",
    plan: "Basic",
    joinDate: "Oct 22, 2023",
    status: "Active",
    lastVisit: "3 days ago",
  },
  {
    id: "M006",
    name: "Jessica Taylor",
    email: "jessica@example.com",
    plan: "Premium",
    joinDate: "Oct 25, 2023",
    status: "Active",
    lastVisit: "Today",
  },
  {
    id: "M007",
    name: "Ryan Martinez",
    email: "ryan@example.com",
    plan: "Standard",
    joinDate: "Oct 28, 2023",
    status: "Inactive",
    lastVisit: "1 week ago",
  },
  {
    id: "M008",
    name: "Olivia Anderson",
    email: "olivia@example.com",
    plan: "Basic",
    joinDate: "Nov 1, 2023",
    status: "Active",
    lastVisit: "Yesterday",
  },
]

export default function MembersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardNav />
      <div className="flex-1 p-8 pt-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Members</h1>
            <p className="text-slate-500">Manage your gym members</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>All Members</CardTitle>
            <CardDescription>You have a total of {members.length} members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search members..." className="w-full pl-8 bg-white" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={member.name} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-slate-500">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          member.plan === "Premium"
                            ? "border-blue-200 bg-blue-50 text-blue-700"
                            : member.plan === "Standard"
                              ? "border-navy-200 bg-navy-50 text-navy-700"
                              : "border-slate-200 bg-slate-50 text-slate-700",
                        )}
                      >
                        {member.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>{member.joinDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          member.status === "Active"
                            ? "border-green-200 bg-green-50 text-green-700"
                            : member.status === "Pending"
                              ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                              : "border-red-200 bg-red-50 text-red-700",
                        )}
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{member.lastVisit}</TableCell>
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
      </div>
    </div>
  )
}
