import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  Award,
  Heart,
} from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Header from "@/components/header";
import Footer from "@/components/footer";

const tests = [
  {
    name: "SAT",
    href: "/tests/sat",
    badge: "College Admissions",
    desc: "Master the digital SAT with our expert-designed curriculum covering Reading, Writing, and Math.",
  },
  {
    name: "ACT",
    href: "/tests/act",
    badge: "College Admissions",
    desc: "Comprehensive ACT preparation across English, Math, Reading, and Science sections.",
  },
  {
    name: "GRE",
    href: "/tests/gre",
    badge: "Graduate School",
    desc: "Score high on the GRE with targeted instruction in Verbal Reasoning, Quantitative, and AWA.",
  },
  {
    name: "GMAT",
    href: "/tests/gmat",
    badge: "Business School",
    desc: "Achieve your target GMAT score with our proven strategies for all four exam sections.",
  },
  {
    name: "TOEFL",
    href: "/tests/toefl",
    badge: "English Proficiency",
    desc: "Build the English skills needed to excel across Reading, Listening, Speaking, and Writing.",
  },
  {
    name: "IELTS",
    href: "/tests/ielts",
    badge: "English Proficiency",
    desc: "Reach your target band score with structured practice and personalised feedback.",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    desc: "Our tutors scored in the top percentiles and bring years of teaching experience to every session.",
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    desc: "We keep class sizes small so every student gets the attention they need to succeed.",
  },
  {
    icon: BookOpen,
    title: "Proven Materials",
    desc: "Access carefully curated study guides, practice tests, and question banks for every exam.",
  },
  {
    icon: Heart,
    title: "Personalised Approach",
    desc: "We tailor each program to your strengths, weaknesses, and target score.",
  },
  {
    icon: Award,
    title: "Track Record",
    desc: "Over a decade of helping Bangkok students reach their dream schools around the world.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "We work around your school schedule with convenient session times, including weekends.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col space-y-5">
                <Badge className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-100">
                  Bangkok's Boutique Test Prep Center — Est. 2013
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ace Your Standardized Tests with Confidence
                </h1>
                <p className="max-w-[560px] text-gray-500 md:text-lg">
                  Expert-designed prep for SAT, ACT, GRE, GMAT, TOEFL, and IELTS.
                  Personalised programs, small classes, and tutors who genuinely care.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-500">
                    <Link href="/about#contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/tutoring">Explore Programs</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/girl-studying.png"
                  alt="Student studying at YPrep Academy"
                  width={520}
                  height={520}
                  className="rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-12 md:py-16 border-y bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10 text-center">
              {[
                { stat: "2013", label: "Founded in Bangkok" },
                { stat: "6", label: "Tests Covered" },
                { stat: "98%", label: "Score Improvement Rate" },
                { stat: "1,000+", label: "Students Helped" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex flex-col items-center space-y-1">
                  <div className="text-3xl font-bold text-orange-500 sm:text-4xl">{stat}</div>
                  <div className="text-sm font-medium text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Test Programs */}
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Test Prep Programs</h2>
              <p className="max-w-[680px] mx-auto text-gray-500 md:text-lg">
                Expert preparation for all major standardized tests
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tests.map((test) => (
                <Card key={test.name} className="hover:shadow-md transition-shadow group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-1">
                      <CardTitle className="text-2xl">{test.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{test.badge}</Badge>
                    </div>
                    <CardDescription>{test.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-orange-400 hover:bg-orange-500">
                      <Link href={test.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose YPrep */}
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose YPrep?</h2>
              <p className="max-w-[680px] mx-auto text-gray-500 md:text-lg">
                We're not a big chain — we're a boutique center that truly invests in each student
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
              <p className="max-w-[680px] mx-auto text-gray-500 md:text-lg">
                Real stories from students who achieved their target scores with YPrep
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full py-16 md:py-24 bg-orange-500 text-white">
          <div className="container px-4 md:px-6 text-center space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to start your test prep journey?
            </h2>
            <p className="max-w-[580px] mx-auto md:text-lg opacity-90">
              Get in touch and we'll help you find the right program for your goals and timeline.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/about#contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500"
              >
                <Link href="/tutoring">View All Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
