import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const members = [
  {
    id: "M001",
    name: "Alex Johnson",
    email: "alex@example.com",
    plan: "Premium",
    joinDate: "Oct 12, 2023",
    status: "Active",
  },
  {
    id: "M002",
    name: "Sarah Williams",
    email: "sarah@example.com",
    plan: "Basic",
    joinDate: "Oct 15, 2023",
    status: "Active",
  },
  {
    id: "M003",
    name: "Michael Brown",
    email: "michael@example.com",
    plan: "Premium",
    joinDate: "Oct 18, 2023",
    status: "Active",
  },
  {
    id: "M004",
    name: "Emily Davis",
    email: "emily@example.com",
    plan: "Standard",
    joinDate: "Oct 20, 2023",
    status: "Pending",
  },
  {
    id: "M005",
    name: "David Wilson",
    email: "david@example.com",
    plan: "Basic",
    joinDate: "Oct 22, 2023",
    status: "Active",
  },
]

export function RecentMembers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Status</TableHead>
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
                    : "border-yellow-200 bg-yellow-50 text-yellow-700",
                )}
              >
                {member.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
