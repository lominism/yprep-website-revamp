import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface Section {
  name: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface TestPageProps {
  name: string;
  fullName: string;
  badge: string;
  tagline: string;
  about: string;
  sections: Section[];
  whoIsItFor: string[];
  yprepApproach: string[];
  faqs: FAQ[];
}

export default function TestPageTemplate({
  name,
  fullName,
  badge,
  tagline,
  about,
  sections,
  whoIsItFor,
  yprepApproach,
  faqs,
}: TestPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl space-y-4">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">{badge}</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{name} Preparation</h1>
              <p className="text-xl text-gray-500">{fullName}</p>
              <p className="text-gray-600 md:text-lg max-w-2xl">{tagline}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-500">
                  <Link href="/about#contact">Enquire Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tutoring">View All Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About the test */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-5xl">
            <h2 className="text-2xl font-bold mb-4">About the {name}</h2>
            <p className="text-gray-600 leading-relaxed md:text-lg">{about}</p>
          </div>
        </section>

        <Separator />

        {/* Test Sections */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-5xl">
            <h2 className="text-2xl font-bold mb-8">What's on the {name}?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <Card key={section.name} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{section.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{section.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Who is it for + YPrep Approach side by side */}
        <section className="w-full py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-6">Who Is This For?</h2>
                <ul className="space-y-3">
                  {whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">The YPrep Approach</h2>
                <ul className="space-y-3">
                  {yprepApproach.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 md:py-20 bg-orange-500 text-white">
          <div className="container px-4 md:px-6 text-center space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to start your {name} prep?
            </h2>
            <p className="max-w-[540px] mx-auto opacity-90 md:text-lg">
              Reach out and we'll put together a personalised program for you.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about#contact">Contact YPrep Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
