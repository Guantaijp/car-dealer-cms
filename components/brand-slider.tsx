export function BrandSlider() {
  const brands = [
    { name: "Audi", logo: "/placeholder.svg?height=80&width=120" },
    { name: "BMW", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Ford", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Honda", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Mercedes-Benz", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Tesla", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Toyota", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Volkswagen", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <img
            src={brand.logo || "/placeholder.svg"}
            alt={brand.name}
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  )
}
