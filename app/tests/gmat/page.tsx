import TestPageTemplate from "@/components/test-page-template";

export const metadata = {
  title: "GMAT Preparation | YPrep Academy Bangkok",
  description: "Expert GMAT prep in Bangkok. Master Quantitative, Verbal, Integrated Reasoning, and AWA with YPrep Academy.",
};

export default function GMATPage() {
  return (
    <TestPageTemplate
      name="GMAT"
      fullName="Graduate Management Admission Test"
      badge="Business School"
      tagline="The GMAT is the gold standard for MBA admissions at top business schools worldwide. YPrep's GMAT program is built to help ambitious professionals crack the GMAT and get into their dream MBA program."
      about="The GMAT Focus Edition is the current version of the exam, designed by GMAC to evaluate the skills most relevant to business school success. It consists of three sections: Quantitative Reasoning, Verbal Reasoning, and Data Insights. The exam takes approximately 2 hours and 15 minutes, and scores range from 205–805. Most top business schools have a median GMAT in the 700+ range."
      sections={[
        { name: "Quantitative Reasoning", desc: "21 questions in 45 minutes covering arithmetic, algebra, and word problems. Focuses on reasoning over computation." },
        { name: "Verbal Reasoning", desc: "23 questions in 45 minutes covering reading comprehension and critical reasoning." },
        { name: "Data Insights", desc: "20 questions in 45 minutes covering data sufficiency, multi-source reasoning, table analysis, graphics interpretation, and two-part analysis." },
      ]}
      whoIsItFor={[
        "Professionals applying to MBA programs at top business schools",
        "Students targeting competitive programmes at LBS, INSEAD, Wharton, or similar schools",
        "Career changers seeking to demonstrate business aptitude",
        "Those who want to strengthen business reasoning and analytical thinking",
      ]}
      yprepApproach={[
        "Diagnostic GMAT Focus Edition test to establish your baseline score",
        "Targeted content review for Quant and Verbal weak areas",
        "Data Insights mastery — the section most students underestimate",
        "Question-level strategy to tackle GMAT's unique problem formats",
        "Official mock exams and detailed performance reviews each session",
      ]}
      faqs={[
        { q: "What is the GMAT Focus Edition?", a: "The GMAT Focus Edition is the current format launched in 2023. It replaced the classic GMAT and removed the AWA essay section, added more emphasis on Data Insights." },
        { q: "How is the GMAT scored?", a: "The GMAT Focus Edition is scored 205–805 in 10-point increments. Each section is scored 60–90." },
        { q: "What GMAT score do I need for top MBA programs?", a: "Most top programs (M7, INSEAD, LBS) have median scores around 700–740. We'll help you set a realistic target based on your target schools." },
        { q: "How long should I prepare for the GMAT?", a: "Most students need 3–6 months. Those aiming for 700+ often benefit from 4–6 months of focused preparation." },
        { q: "Is the GMAT or GRE better for MBA admissions?", a: "Both are widely accepted. The GMAT is still preferred by many top business schools, but more are now actively welcoming GRE scores. We can help you decide." },
      ]}
    />
  );
}
