import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import Image from "next/image";

interface BrewingGuide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  equipment: string[];
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  type: "virtual" | "in-person";
  location?: string;
  date: string;
  time: string;
  imageUrl: string;
  spotsLeft?: number;
}

const brewingGuides: BrewingGuide[] = [
  {
    id: "pour-over",
    title: "Perfect Pour Over",
    description: "Master the art of pour over coffee with this comprehensive guide",
    imageUrl: "/images/guides/pour-over.jpg",
    difficulty: "Intermediate",
    time: "5-7 minutes",
    equipment: ["Pour over cone", "Paper filter", "Gooseneck kettle", "Scale", "Timer"],
  },
  {
    id: "french-press",
    title: "French Press Basics",
    description: "Learn how to make rich, full-bodied coffee with a French press",
    imageUrl: "/images/guides/french-press.jpg",
    difficulty: "Beginner",
    time: "4-5 minutes",
    equipment: ["French press", "Kettle", "Timer"],
  },
  {
    id: "espresso",
    title: "Espresso at Home",
    description: "A beginner's guide to making espresso-style coffee at home",
    imageUrl: "/images/guides/espresso.jpg",
    difficulty: "Advanced",
    time: "10-15 minutes",
    equipment: ["Espresso machine", "Grinder", "Tamper", "Scale"],
  },
];

const blogPosts: BlogPost[] = [
  {
    id: "coffee-science",
    title: "The Science of Coffee Extraction",
    excerpt: "Understanding the chemistry behind the perfect cup of coffee",
    author: {
      name: "Dr. Sarah Chen",
      role: "Coffee Scientist",
      avatar: "/images/authors/sarah-chen.jpg",
    },
    date: "2024-03-15",
    readTime: "8 min read",
    imageUrl: "/images/blog/coffee-science.jpg",
  },
  {
    id: "sustainable-farming",
    title: "Sustainable Coffee Farming Practices",
    excerpt: "How farmers are adapting to climate change while maintaining quality",
    author: {
      name: "Miguel Rodriguez",
      role: "Coffee Farmer",
      avatar: "/images/authors/miguel-rodriguez.jpg",
    },
    date: "2024-03-10",
    readTime: "6 min read",
    imageUrl: "/images/blog/sustainable-farming.jpg",
  },
];

const upcomingEvents: Event[] = [
  {
    id: "virtual-cupping",
    title: "Virtual Coffee Cupping",
    description: "Join us for an interactive coffee tasting session",
    type: "virtual",
    date: "2024-03-25",
    time: "19:00 CET",
    imageUrl: "/images/events/virtual-cupping.jpg",
    spotsLeft: 15,
  },
  {
    id: "barista-workshop",
    title: "Barista Workshop in Sofia",
    description: "Learn professional coffee preparation techniques",
    type: "in-person",
    location: "Sofia, Bulgaria",
    date: "2024-04-02",
    time: "10:00-16:00",
    imageUrl: "/images/events/barista-workshop.jpg",
    spotsLeft: 8,
  },
];

export function CommunityHub() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Community Hub</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our community of coffee enthusiasts. Learn, share, and connect with
          fellow coffee lovers.
        </p>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guides">Brewing Guides</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brewingGuides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={guide.imageUrl}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Difficulty</h4>
                      <p className="text-sm text-muted-foreground">
                        {guide.difficulty}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Time</h4>
                      <p className="text-sm text-muted-foreground">
                        {guide.time}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Equipment</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {guide.equipment.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blog" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-10 w-10">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </div>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {event.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Date & Time</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.date} at {event.time}
                      </p>
                    </div>
                    {event.location && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Location</h4>
                        <p className="text-sm text-muted-foreground">
                          {event.location}
                        </p>
                      </div>
                    )}
                    {event.spotsLeft && (
                      <p className="text-sm text-muted-foreground">
                        {event.spotsLeft} spots left
                      </p>
                    )}
                    <Button variant="outline" className="w-full">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 