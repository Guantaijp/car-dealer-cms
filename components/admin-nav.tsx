"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Car, BarChart3, Users, DollarSign, Settings, LogOut, Menu, FileText, Calendar } from "lucide-react"
import { useState } from "react"

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "Inventory",
    href: "/admin/inventory",
    icon: Car,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Sales",
    href: "/admin/sales",
    icon: DollarSign,
  },
  {
    title: "Appointments",
    href: "/admin/appointments",
    icon: Calendar,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <Car className="h-6 w-6 text-red-600 mr-2" />
          <span className="font-bold text-navy-900">AutoDealerCMS</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-20 bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full w-64 bg-white border-r">
          <div className="p-6">
            <div className="flex items-center">
              <Car className="h-6 w-6 text-red-600 mr-2" />
              <span className="font-bold text-navy-900">AutoDealerCMS</span>
            </div>
          </div>
          <div className="flex-1 px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center py-3 px-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100",
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.title}
              </Link>
            ))}
          </div>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
