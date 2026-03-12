"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <h3 className="font-semibold text-lg">Send Us a Message</h3>
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="first-name" className="text-sm font-medium">First name</label>
              <input
                id="first-name"
                type="text"
                placeholder="Jane"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
              <input
                id="last-name"
                type="text"
                placeholder="Doe"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="jane@example.com"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="test" className="text-sm font-medium">Test you&apos;re interested in</label>
            <select
              id="test"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a test...</option>
              <option>SAT</option>
              <option>ACT</option>
              <option>GRE</option>
              <option>GMAT</option>
              <option>TOEFL</option>
              <option>IELTS</option>
              <option>General Tutoring</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your goals and timeline..."
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>
          <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
