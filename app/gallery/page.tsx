import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Gallery | YPrep Academy Bangkok",
  description: "Photos from YPrep Academy — our classrooms, students, and sessions in Bangkok.",
};

// Gallery images — replace src values with real photos as you add them
const galleryImages = [
  {
    src: "/girl-studying.png",
    alt: "Student studying at YPrep Academy",
    caption: "Focused study sessions",
  },
  {
    src: "/testimonials/mighty.jpg",
    alt: "YPrep student Mighty",
    caption: "Student success stories",
  },
  {
    src: "/testimonials/Val-and-Dog.jpg",
    alt: "YPrep student Val",
    caption: "Our students",
  },
  {
    src: "/girl-studying.png",
    alt: "YPrep classroom",
    caption: "Our learning environment",
  },
  {
    src: "/girl-studying.png",
    alt: "Test prep materials",
    caption: "Comprehensive study materials",
  },
  {
    src: "/girl-studying.png",
    alt: "1-on-1 tutoring session",
    caption: "1-on-1 tutoring",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6 text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Life at YPrep</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Gallery</h1>
            <p className="max-w-xl mx-auto text-gray-600 md:text-lg">
              A look inside YPrep Academy — our classrooms, our students, and the environment we've built for learning.
            </p>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="w-full py-10 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img, i) => (
                <Card key={i} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-500">{img.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add more photos note */}
            <p className="mt-10 text-center text-sm text-gray-400">
              More photos coming soon. Follow us on{" "}
              <a href="#" className="text-orange-500 hover:underline">Instagram</a>{" "}
              for the latest from YPrep Academy.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 md:py-20 bg-orange-500 text-white">
          <div className="container px-4 md:px-6 text-center space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter">Come see us in person</h2>
            <p className="max-w-md mx-auto opacity-90 md:text-lg">
              We'd love to show you around and tell you more about our programs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about#contact">Contact Us</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
