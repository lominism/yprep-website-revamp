import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, User, Users, Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Tutoring Programs | YPrep Academy Bangkok",
  description: "1-on-1 and small group tutoring at YPrep Academy Bangkok. Personalised programs for SAT, ACT, GRE, GMAT, TOEFL, IELTS and more.",
};

const programs = [
  {
    icon: User,
    title: "1-on-1 Private Tutoring",
    desc: "Completely personalised sessions focused entirely on your goals, your weaknesses, and your timeline.",
    features: [
      "Flexible scheduling — evenings and weekends available",
      "Diagnostic assessment before your first session",
      "Customised study plan tailored to your target score",
      "Session recordings and notes provided after every class",
      "Direct access to your tutor via messaging between sessions",
    ],
  },
  {
    icon: Users,
    title: "Small Group Classes",
    desc: "Structured group sessions with no more than 5–6 students per group — the benefits of class with the feel of private tutoring.",
    features: [
      "Peer learning and group problem-solving",
      "More affordable than 1-on-1 tutoring",
      "Regular mini-tests and score tracking",
      "Full-length mock exams included",
      "Structured curriculum with clear milestones",
    ],
  },
  {
    icon: Calendar,
    title: "Intensive Crash Courses",
    desc: "Last-minute prep? Our intensive short-form programs pack maximum impact into a condensed timeline.",
    features: [
      "Ideal for students 4–8 weeks before their exam",
      "High-frequency sessions with focused drilling",
      "Covers the highest-yield topics for your exam",
      "Full practice test and debrief included",
      "Available for all tests we offer",
    ],
  },
];

const subjects = [
  { name: "SAT", href: "/tests/sat" },
  { name: "ACT", href: "/tests/act" },
  { name: "GRE", href: "/tests/gre" },
  { name: "GMAT", href: "/tests/gmat" },
  { name: "TOEFL", href: "/tests/toefl" },
  { name: "IELTS", href: "/tests/ielts" },
];

export default function TutoringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl space-y-4">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Personalised Learning</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Tutoring Programs</h1>
              <p className="text-gray-600 md:text-lg max-w-2xl">
                Whether you learn best 1-on-1 or in a small group, YPrep has a program built around you.
                We work around your schedule, your goals, and your learning style.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-500">
                  <Link href="/about#contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section id="programs" className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-10">Our Program Formats</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {programs.map(({ icon: Icon, title, desc, features }) => (
                <Card key={title} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Group / small classes */}
        <section id="group" className="w-full py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Subjects We Cover</h2>
                <p className="text-gray-600">
                  All of our tutors are specialists in their exams — not generalists. When you work with a YPrep tutor,
                  you're working with someone who knows your test inside and out.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {subjects.map((s) => (
                    <Link key={s.name} href={s.href}>
                      <Badge
                        variant="outline"
                        className="text-sm px-4 py-2 cursor-pointer hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-colors"
                      >
                        {s.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How It Works</h2>
                <ol className="space-y-4">
                  {[
                    { step: "1", title: "Free Consultation", desc: "We discuss your goals, timeline, and target programs." },
                    { step: "2", title: "Diagnostic Assessment", desc: "You take a shortened practice test so we know exactly where you stand." },
                    { step: "3", title: "Custom Program", desc: "We build a study plan tailored to your target score and exam date." },
                    { step: "4", title: "Regular Sessions", desc: "Structured sessions with progress tracking, mock tests, and feedback." },
                  ].map(({ step, title, desc }) => (
                    <li key={step} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-400 text-white text-sm font-bold">
                        {step}
                      </div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-sm text-gray-500">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 md:py-20 bg-orange-500 text-white">
          <div className="container px-4 md:px-6 text-center space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Find the right program for you
            </h2>
            <p className="max-w-[540px] mx-auto opacity-90 md:text-lg">
              Contact us and we'll pair you with the right tutor and format for your goals.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about#contact">Contact YPrep</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
