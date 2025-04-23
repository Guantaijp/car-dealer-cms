"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"

export function SearchForm() {
  const [priceRange, setPriceRange] = useState([0, 100000])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div>
        <Label htmlFor="make">Make</Label>
        <Select>
          <SelectTrigger id="make">
            <SelectValue placeholder="Any Make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Make</SelectItem>
            <SelectItem value="audi">Audi</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="ford">Ford</SelectItem>
            <SelectItem value="honda">Honda</SelectItem>
            <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="tesla">Tesla</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="model">Model</Label>
        <Select>
          <SelectTrigger id="model">
            <SelectValue placeholder="Any Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Model</SelectItem>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="convertible">Convertible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="year">Year</Label>
        <Select>
          <SelectTrigger id="year">
            <SelectValue placeholder="Any Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Year</SelectItem>
            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Price Range</Label>
        <div className="pt-4 px-2">
          <Slider defaultValue={[0, 100000]} max={200000} step={5000} onValueChange={(value) => setPriceRange(value)} />
          <div className="flex justify-between mt-2 text-sm text-slate-500">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex items-end">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
    </div>
  )
}
