import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mail, Phone } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "About YPrep Academy | Bangkok Test Prep Since 2013",
  description: "Learn about YPrep Academy, Bangkok's boutique test prep center founded in 2013. Meet our team and discover our approach.",
};

const values = [
  {
    title: "Boutique & Personal",
    desc: "We're not a big chain. Every student gets real attention from a tutor who genuinely cares about their success.",
  },
  {
    title: "Expert Instructors",
    desc: "Our tutors scored in the top percentiles on the exams they teach and bring years of classroom experience.",
  },
  {
    title: "Results-Driven",
    desc: "We measure our success by your score improvement. If you put in the work, we'll get you there.",
  },
  {
    title: "Bangkok-Based",
    desc: "We understand the Thai schooling context, international school schedules, and what top universities are looking for.",
  },
];

const team = [
  {
    name: "YPrep Team",
    role: "Expert Instructors & Tutors",
    image: "/girl-studying.png",
    initials: "YP",
    bio: "Our team of specialist tutors brings top-percentile scores and years of teaching experience across all the exams we offer.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Founded 2013 · Bangkok, Thailand</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  About YPrep Academy
                </h1>
                <p className="text-gray-600 md:text-lg">
                  YPrep Academy is Bangkok's premier boutique test prep center. Since 2013, we've been helping
                  students from international schools across Bangkok achieve their target scores and gain admission
                  to top universities around the world.
                </p>
                <p className="text-gray-600">
                  We believe that test preparation shouldn't be one-size-fits-all. Every student learns differently,
                  has a different timeline, and is aiming for different schools. That's why every program we build starts
                  with understanding you.
                </p>
                <Button asChild className="bg-orange-400 hover:bg-orange-500">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/girl-studying.png"
                  alt="YPrep Academy students"
                  width={480}
                  height={480}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
              <p>
                YPrep Academy was founded in Bangkok in 2013 with a simple mission: provide the kind of high-quality,
                personalised test preparation that students actually deserve. We saw big test prep chains offering
                overcrowded classes and one-size-fits-all materials, and we knew we could do better.
              </p>
              <p>
                Over the years, we've helped hundreds of students from Bangkok's leading international schools —
                including NIST, Shrewsbury, Bangkok Patana, ISB, and more — reach their target scores on the SAT,
                ACT, GRE, GMAT, TOEFL, and IELTS. Many have gone on to study at universities in the US, UK, Australia,
                and beyond.
              </p>
              <p>
                What sets us apart isn't just our results — it's our approach. We keep class sizes small, we hire only
                tutors who are true subject experts, and we take the time to understand each student's strengths,
                weaknesses, and goals before designing their program.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Values */}
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">What We Stand For</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {values.map(({ title, desc }) => (
                <Card key={title} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 space-y-2">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Team */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Our Instructors</h2>
            <p className="text-gray-600 mb-8">
              Every YPrep tutor is a specialist — not a generalist. We hire instructors who scored in the top
              percentiles on the exams they teach, and who have demonstrated the ability to communicate those
              skills clearly and patiently to students.
            </p>
            <div className="flex flex-wrap gap-4">
              {team.map(({ name, role, image, initials, bio }) => (
                <Card key={name} className="flex-1 min-w-[260px] max-w-sm">
                  <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="bg-orange-100 text-orange-600 text-lg font-semibold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm text-orange-500">{role}</p>
                    </div>
                    <p className="text-sm text-gray-500">{bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact */}
        <section id="contact" className="w-full py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
                <p className="text-gray-600 md:text-lg">
                  Have questions about our programs, pricing, or scheduling? We'd love to hear from you.
                  Reach out and we'll get back to you shortly.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span>Bangkok, Thailand</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <a href="mailto:info@yprep.com" className="hover:text-orange-500 transition-colors">
                      info@yprep.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span>+66 (0) XX XXX XXXX</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
