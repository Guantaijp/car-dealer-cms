import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { DashboardNav } from "@/components/dashboard-nav"
import { Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardNav />
      <div className="flex-1 p-8 pt-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Settings</h1>
            <p className="text-slate-500">Manage your gym settings</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gym Information</CardTitle>
                <CardDescription>Update your gym's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gym-name">Gym Name</Label>
                    <Input id="gym-name" defaultValue="FitZone Gym" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="contact@fitzone.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="(123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://fitzone.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Fitness Street, Gym City, GC 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="FitZone is a premium fitness center offering state-of-the-art equipment and expert trainers to help you achieve your fitness goals."
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
                <CardDescription>Set your gym's operating hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="space-y-2">
                      <Label>{day}</Label>
                      <div className="flex items-center gap-2">
                        <Input defaultValue="6:00 AM" className="w-24" />
                        <span>to</span>
                        <Input defaultValue="10:00 PM" className="w-24" />
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
                      <Label>Marketing Emails</Label>
                      <p className="text-sm text-slate-500">Receive promotional emails and offers</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Member Alerts</Label>
                      <p className="text-sm text-slate-500">Get notified when new members join</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Payment Reminders</Label>
                      <p className="text-sm text-slate-500">Send payment reminders to members</p>
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
          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing Settings</CardTitle>
                <CardDescription>Manage your payment methods and billing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Payment Methods</Label>
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-14 rounded bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
                            VISA
                          </div>
                          <div>
                            <p className="text-sm font-medium">Visa ending in 4242</p>
                            <p className="text-xs text-slate-500">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      Add Payment Method
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Billing Address</Label>
                    <Textarea defaultValue="123 Fitness Street, Gym City, GC 12345" />
                  </div>
                  <div className="space-y-2">
                    <Label>Billing Email</Label>
                    <Input defaultValue="billing@fitzone.com" />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Billing Info
                </Button>
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
