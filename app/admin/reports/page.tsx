"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminNav } from "@/components/admin-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Calendar, ChevronDown, Download, PieChartIcon, BarChartIcon, LineChartIcon } from "lucide-react"

const salesData = [
  { month: "Jan", sales: 180000, profit: 36000 },
  { month: "Feb", sales: 195000, profit: 39000 },
  { month: "Mar", sales: 210000, profit: 42000 },
  { month: "Apr", sales: 215000, profit: 43000 },
  { month: "May", sales: 230000, profit: 46000 },
  { month: "Jun", sales: 242000, profit: 48400 },
  { month: "Jul", sales: 260000, profit: 52000 },
  { month: "Aug", sales: 255000, profit: 51000 },
  { month: "Sep", sales: 238000, profit: 47600 },
  { month: "Oct", sales: 230000, profit: 46000 },
  { month: "Nov", sales: 220000, profit: 44000 },
  { month: "Dec", sales: 248000, profit: 49600 },
]

const inventoryData = [
  { name: "SUVs", value: 35, color: "#3b82f6" },
  { name: "Sedans", value: 25, color: "#ef4444" },
  { name: "Trucks", value: 15, color: "#10b981" },
  { name: "Electric", value: 15, color: "#8b5cf6" },
  { name: "Luxury", value: 10, color: "#f59e0b" },
]

const leadSourceData = [
  { name: "Website", value: 40 },
  { name: "Walk-In", value: 25 },
  { name: "Referral", value: 15 },
  { name: "Social Media", value: 12 },
  { name: "Phone Call", value: 8 },
]

const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#8b5cf6", "#f59e0b"]

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Reports & Analytics</h1>
            <p className="text-slate-500">Track performance and gain insights into your dealership</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex gap-2">
              <Calendar className="h-4 w-4" /> 2023 <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Sales YTD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,723,000</div>
              <p className="text-xs text-slate-500">+12% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Profit YTD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$544,600</div>
              <p className="text-xs text-slate-500">+8% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Units Sold YTD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-slate-500">+5% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Sale Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,800</div>
              <p className="text-xs text-slate-500">+7% from last year</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="sales" className="flex items-center gap-2">
              <BarChartIcon className="h-4 w-4" /> Sales Reports
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" /> Inventory Analysis
            </TabsTrigger>
            <TabsTrigger value="marketing" className="flex items-center gap-2">
              <LineChartIcon className="h-4 w-4" /> Marketing Performance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales & Profit</CardTitle>
                <CardDescription>Overview of sales performance over the last 12 months</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={salesData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [
                          `$${value.toLocaleString()}`,
                          value === salesData[0].sales ? "Sales" : "Profit",
                        ]}
                      />
                      <Legend />
                      <Bar dataKey="sales" name="Sales" fill="#3b82f6" />
                      <Bar dataKey="profit" name="Profit" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sales by Vehicle Type</CardTitle>
                  <CardDescription>Distribution of sales by vehicle category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={inventoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {inventoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sales Performance Trend</CardTitle>
                  <CardDescription>Monthly sales trend analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={salesData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`]} />
                        <Legend />
                        <Line type="monotone" dataKey="sales" name="Sales" stroke="#3b82f6" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="profit" name="Profit" stroke="#10b981" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Composition</CardTitle>
                <CardDescription>Current inventory breakdown by vehicle type</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={inventoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {inventoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Turnover</CardTitle>
                  <CardDescription>Average days in inventory by vehicle type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: "SUVs", days: 42 },
                          { name: "Sedans", days: 38 },
                          { name: "Trucks", days: 30 },
                          { name: "Electric", days: 25 },
                          { name: "Luxury", days: 45 },
                        ]}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value} days`, "Avg. Days in Inventory"]} />
                        <Legend />
                        <Bar dataKey="days" name="Days in Inventory" fill="#ef4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Value</CardTitle>
                  <CardDescription>Current inventory value by vehicle type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: "SUVs", value: 1250000 },
                          { name: "Sedans", value: 850000 },
                          { name: "Trucks", value: 680000 },
                          { name: "Electric", value: 950000 },
                          { name: "Luxury", value: 1150000 },
                        ]}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Inventory Value"]} />
                        <Legend />
                        <Bar dataKey="value" name="Inventory Value" fill="#8b5cf6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="marketing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Where your customers are coming from</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={leadSourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {leadSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Test Drive Conversion</CardTitle>
                  <CardDescription>Conversion rates from test drives to sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={[
                          { month: "Jan", rate: 58 },
                          { month: "Feb", rate: 60 },
                          { month: "Mar", rate: 62 },
                          { month: "Apr", rate: 65 },
                          { month: "May", rate: 64 },
                          { month: "Jun", rate: 68 },
                          { month: "Jul", rate: 70 },
                          { month: "Aug", rate: 71 },
                          { month: "Sep", rate: 69 },
                          { month: "Oct", rate: 68 },
                          { month: "Nov", rate: 66 },
                          { month: "Dec", rate: 67 },
                        ]}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value}%`, "Conversion Rate"]} />
                        <Legend />
                        <Line type="monotone" dataKey="rate" name="Conversion Rate" stroke="#f59e0b" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Marketing ROI</CardTitle>
                  <CardDescription>Return on investment by marketing channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: "Website", roi: 320 },
                          { name: "Social Ads", roi: 280 },
                          { name: "Email", roi: 250 },
                          { name: "Print", roi: 120 },
                          { name: "Radio", roi: 180 },
                        ]}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value}%`, "ROI"]} />
                        <Legend />
                        <Bar dataKey="roi" name="ROI %" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
