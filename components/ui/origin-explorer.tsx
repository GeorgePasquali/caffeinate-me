import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import Image from "next/image";

interface CoffeeOrigin {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  imageUrl: string;
  tastingNotes: string[];
  elevation: string;
  process: string;
  story: string;
}

const featuredOrigins: CoffeeOrigin[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "Yirgacheffe",
    country: "Ethiopia",
    region: "Gedeo Zone",
    description: "Known for its bright acidity and floral notes",
    imageUrl: "/images/origins/ethiopia-yirgacheffe.jpg",
    tastingNotes: ["Bergamot", "Jasmine", "Lemon", "Honey"],
    elevation: "1,800-2,200m",
    process: "Washed",
    story: "Yirgacheffe coffee is grown by smallholder farmers in the Gedeo Zone of Ethiopia. The region's high altitude and unique microclimate contribute to the coffee's distinctive floral and citrus characteristics.",
  },
  {
    id: "colombia-huila",
    name: "Huila",
    country: "Colombia",
    region: "Huila Department",
    description: "Rich and balanced with caramel sweetness",
    imageUrl: "/images/origins/colombia-huila.jpg",
    tastingNotes: ["Caramel", "Apple", "Chocolate", "Nuts"],
    elevation: "1,200-1,800m",
    process: "Washed & Natural",
    story: "The Huila region is known for its volcanic soil and ideal growing conditions. Farmers here have been perfecting their craft for generations, producing consistently high-quality coffee.",
  },
  {
    id: "costa-rica-tarrazu",
    name: "Tarrazú",
    country: "Costa Rica",
    region: "Los Santos",
    description: "Clean and bright with tropical fruit notes",
    imageUrl: "/images/origins/costa-rica-tarrazu.jpg",
    tastingNotes: ["Pineapple", "Orange", "Honey", "Almond"],
    elevation: "1,200-1,900m",
    process: "Honey",
    story: "The Tarrazú region is one of Costa Rica's most prestigious coffee-growing areas. The combination of high altitude, volcanic soil, and careful processing creates a coffee with exceptional clarity and sweetness.",
  },
];

export function OriginExplorer() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Origin Explorer</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the unique stories and flavors behind each coffee origin. Each month,
          we feature a different region, sharing the journey from farm to cup.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredOrigins.map((origin) => (
          <Card key={origin.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={origin.imageUrl}
                alt={`${origin.name} coffee region`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{origin.name}</CardTitle>
                  <CardDescription>
                    {origin.country} • {origin.region}
                  </CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">
                  {origin.elevation}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{origin.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Tasting Notes</h4>
                <div className="flex flex-wrap gap-2">
                  {origin.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Process</h4>
                <p className="text-sm text-muted-foreground">{origin.process}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Story</h4>
                <p className="text-sm text-muted-foreground">{origin.story}</p>
              </div>

              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 