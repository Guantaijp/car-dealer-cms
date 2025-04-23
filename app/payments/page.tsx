import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DashboardNav } from "@/components/dashboard-nav"
import { cn } from "@/lib/utils"
import { DollarSign, Download, Filter } from "lucide-react"

const payments = [
  {
    id: "INV-001",
    member: "Alex Johnson",
    amount: 99.99,
    date: "Nov 1, 2023",
    status: "Paid",
    method: "Credit Card",
    plan: "Premium Monthly",
  },
  {
    id: "INV-002",
    member: "Sarah Williams",
    amount: 49.99,
    date: "Nov 1, 2023",
    status: "Paid",
    method: "PayPal",
    plan: "Basic Monthly",
  },
  {
    id: "INV-003",
    member: "Michael Brown",
    amount: 99.99,
    date: "Nov 1, 2023",
    status: "Paid",
    method: "Credit Card",
    plan: "Premium Monthly",
  },
  {
    id: "INV-004",
    member: "Emily Davis",
    amount: 79.99,
    date: "Nov 1, 2023",
    status: "Pending",
    method: "Bank Transfer",
    plan: "Standard Monthly",
  },
  {
    id: "INV-005",
    member: "David Wilson",
    amount: 49.99,
    date: "Nov 1, 2023",
    status: "Paid",
    method: "Credit Card",
    plan: "Basic Monthly",
  },
  {
    id: "INV-006",
    member: "Jessica Taylor",
    amount: 99.99,
    date: "Nov 1, 2023",
    status: "Paid",
    method: "PayPal",
    plan: "Premium Monthly",
  },
  {
    id: "INV-007",
    member: "Ryan Martinez",
    amount: 79.99,
    date: "Nov 1, 2023",
    status: "Failed",
    method: "Credit Card",
    plan: "Standard Monthly",
  },
  {
    id: "INV-008",
    member: "Olivia Anderson",
    amount: 49.99,
    date: "Nov 1, 2023",
    status: "Paid",
    method: "Bank Transfer",
    plan: "Basic Monthly",
  },
]

export default function PaymentsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardNav />
      <div className="flex-1 p-8 pt-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Payments</h1>
            <p className="text-slate-500">Manage your gym payments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">
              <DollarSign className="mr-2 h-4 w-4" />
              New Payment
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Payment History</CardTitle>
            <CardDescription>View all payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Member</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.member}</TableCell>
                    <TableCell>{payment.plan}</TableCell>
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          payment.status === "Paid"
                            ? "border-green-200 bg-green-50 text-green-700"
                            : payment.status === "Pending"
                              ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                              : "border-red-200 bg-red-50 text-red-700",
                        )}
                      >
                        {payment.status}
                      </Badge>
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
