import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { AdminNav } from "@/components/admin-nav"
import { Save, Upload, Building, Mail, Phone, Globe, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Settings</h1>
            <p className="text-slate-500">Manage your dealership settings and preferences</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Dealership Information</CardTitle>
                <CardDescription>Update your dealership's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                    <p className="text-sm text-slate-500 mt-1">PNG, JPG or SVG. Max 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dealership-name">
                      <Building className="h-4 w-4 inline-block mr-1" /> Dealership Name
                    </Label>
                    <Input id="dealership-name" defaultValue="AutoDealer Premium Cars" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline-block mr-1" /> Email
                    </Label>
                    <Input id="email" type="email" defaultValue="info@autodealerpremium.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="h-4 w-4 inline-block mr-1" /> Phone
                    </Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">
                      <Globe className="h-4 w-4 inline-block mr-1" /> Website
                    </Label>
                    <Input id="website" defaultValue="https://autodealerpremium.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">
                    <MapPin className="h-4 w-4 inline-block mr-1" /> Address
                  </Label>
                  <Textarea id="address" defaultValue="123 Auto Drive, Car City, CC 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Premium auto dealership offering a wide selection of quality new and used vehicles, exceptional customer service, and competitive financing options."
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>Set your dealership's operating hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-7 gap-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="space-y-2">
                      <Label>{day}</Label>
                      <div className="flex items-center gap-2">
                        <Input defaultValue="9:00 AM" className="w-24" />
                        <span>to</span>
                        <Input defaultValue="7:00 PM" className="w-24" />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Hours
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage users and their permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Team Members</h3>
                    <Button className="bg-red-600 hover:bg-red-700">Add New User</Button>
                  </div>

                  {[
                    {
                      name: "Michael Johnson",
                      email: "michael@autodealerpremium.com",
                      role: "Sales Manager",
                      avatar: "/placeholder.svg?height=40&width=40",
                      status: "Active",
                    },
                    {
                      name: "Emily Davis",
                      email: "emily@autodealerpremium.com",
                      role: "Sales Agent",
                      avatar: "/placeholder.svg?height=40&width=40",
                      status: "Active",
                    },
                    {
                      name: "Robert Wilson",
                      email: "robert@autodealerpremium.com",
                      role: "Sales Agent",
                      avatar: "/placeholder.svg?height=40&width=40",
                      status: "Active",
                    },
                    {
                      name: "Lisa Wang",
                      email: "lisa@autodealerpremium.com",
                      role: "Administrator",
                      avatar: "/placeholder.svg?height=40&width=40",
                      status: "Active",
                    },
                    {
                      name: "James Thompson",
                      email: "james@autodealerpremium.com",
                      role: "Service Manager",
                      avatar: "/placeholder.svg?height=40&width=40",
                      status: "Active",
                    },
                  ].map((user) => (
                    <div key={user.email} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-slate-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-sm font-medium">{user.role}</p>
                          <p className="text-xs text-green-600">{user.status}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Role Management</CardTitle>
                <CardDescription>Configure user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      role: "Administrator",
                      description: "Full access to all areas of the system",
                      users: 1,
                    },
                    {
                      role: "Sales Manager",
                      description: "Can manage inventory, sales, and sales team",
                      users: 1,
                    },
                    {
                      role: "Sales Agent",
                      description: "Can view inventory and manage their own sales",
                      users: 2,
                    },
                    {
                      role: "Service Manager",
                      description: "Can manage service appointments and records",
                      users: 1,
                    },
                    {
                      role: "Accountant",
                      description: "Can view and manage financial records",
                      users: 0,
                    },
                  ].map((role) => (
                    <div key={role.role} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{role.role}</p>
                        <p className="text-sm text-slate-500">{role.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{role.users} users</p>
                        <Button variant="ghost" size="sm">
                          Edit Permissions
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-slate-500">Receive email notifications for important updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-slate-500">Receive text messages for urgent updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Lead Alerts</Label>
                      <p className="text-sm text-slate-500">Get notified when new leads are created</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Appointment Reminders</Label>
                      <p className="text-sm text-slate-500">Send reminders for upcoming appointments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Inventory Updates</Label>
                      <p className="text-sm text-slate-500">Get notified about inventory changes</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sale Completions</Label>
                      <p className="text-sm text-slate-500">Get notified when a sale is completed</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>External Integrations</CardTitle>
                <CardDescription>Connect with third-party services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      name: "CRM System",
                      description: "Connect with your customer relationship management software",
                      connected: true,
                      logo: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      name: "Accounting Software",
                      description: "Sync financial data with your accounting system",
                      connected: true,
                      logo: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      name: "Email Marketing",
                      description: "Connect with your email marketing platform",
                      connected: false,
                      logo: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      name: "Vehicle History Reports",
                      description: "Automatically fetch vehicle history reports",
                      connected: true,
                      logo: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      name: "Payment Gateway",
                      description: "Process online payments and deposits",
                      connected: false,
                      logo: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((integration) => (
                    <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center">
                          <img
                            src={integration.logo || "/placeholder.svg"}
                            alt={integration.name}
                            className="w-8 h-8"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{integration.name}</p>
                          <p className="text-sm text-slate-500">{integration.description}</p>
                        </div>
                      </div>
                      <Button variant={integration.connected ? "outline" : "default"}>
                        {integration.connected ? "Manage" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Access</CardTitle>
                <CardDescription>Manage API keys and access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex space-x-2">
                    <Input id="api-key" defaultValue="••••••••••••••••••••••••••••••" readOnly />
                    <Button variant="outline">Show</Button>
                    <Button>Generate New Key</Button>
                  </div>
                  <p className="text-sm text-slate-500">
                    Last generated on October 15, 2023. This key has full access to your account.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how your dashboard looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="h-20 w-full rounded-lg bg-white border-2 border-blue-600"></div>
                        <span className="text-sm">Light</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="h-20 w-full rounded-lg bg-slate-900"></div>
                        <span className="text-sm">Dark</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="h-20 w-full rounded-lg bg-gradient-to-r from-blue-600 to-red-600"></div>
                        <span className="text-sm">Custom</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="grid grid-cols-6 gap-2">
                      {[
                        "bg-red-600",
                        "bg-blue-600",
                        "bg-navy-600",
                        "bg-green-600",
                        "bg-purple-600",
                        "bg-orange-600",
                      ].map((color, i) => (
                        <div
                          key={i}
                          className={`h-10 rounded-lg ${color} ${i < 3 ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compact Mode</Label>
                      <p className="text-sm text-slate-500">Use a more compact layout for the dashboard</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Appearance
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
