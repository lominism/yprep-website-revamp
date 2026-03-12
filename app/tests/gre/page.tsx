import TestPageTemplate from "@/components/test-page-template";

export const metadata = {
  title: "GRE Preparation | YPrep Academy Bangkok",
  description: "Expert GRE prep in Bangkok. Master Verbal Reasoning, Quantitative Reasoning, and Analytical Writing with YPrep Academy.",
};

export default function GREPage() {
  return (
    <TestPageTemplate
      name="GRE"
      fullName="Graduate Record Examinations"
      badge="Graduate School"
      tagline="The GRE is the most widely accepted graduate admissions test, required by thousands of graduate and business programs worldwide. YPrep's GRE program is designed to get you into your target master's or PhD program."
      about="The GRE General Test is administered by ETS and is accepted by thousands of graduate programs globally, including many MBA programs that now accept both GRE and GMAT scores. The GRE tests Verbal Reasoning, Quantitative Reasoning, and Analytical Writing. The exam is approximately 1 hour and 58 minutes and is delivered on computer. Scores for Verbal and Quantitative sections range from 130–170, and the Analytical Writing score ranges from 0–6."
      sections={[
        { name: "Verbal Reasoning", desc: "Tests reading comprehension, text completion, and sentence equivalence. Focuses on understanding complex texts and vocabulary in context." },
        { name: "Quantitative Reasoning", desc: "Covers arithmetic, algebra, geometry, and data analysis. Tests mathematical reasoning rather than computation speed." },
        { name: "Analytical Writing", desc: "Two tasks: Analyze an Issue and Analyze an Argument. Assesses critical thinking and clear, structured writing." },
      ]}
      whoIsItFor={[
        "Students applying to master's or PhD programs worldwide",
        "Applicants targeting graduate schools that require or recommend the GRE",
        "MBA applicants to programs that accept GRE in place of GMAT",
        "Professionals seeking to strengthen graduate school candidacy",
      ]}
      yprepApproach={[
        "Comprehensive diagnostic to identify Verbal and Quant weak areas",
        "Vocabulary building program tailored to GRE-specific high-frequency words",
        "Quantitative concept review covering all tested math topics",
        "AWA essay writing workshops with detailed feedback on structure and argumentation",
        "Full-length timed practice tests with thorough score analysis",
      ]}
      faqs={[
        { q: "How long is the GRE?", a: "The GRE General Test takes approximately 1 hour and 58 minutes." },
        { q: "How is the GRE scored?", a: "Verbal and Quantitative sections are each scored 130–170. Analytical Writing is scored 0–6 in half-point increments." },
        { q: "Can I retake the GRE?", a: "Yes. You can take the GRE up to five times within a 12-month period, with at least 21 days between attempts." },
        { q: "Do MBA programs accept the GRE?", a: "Many MBA programs now accept both GRE and GMAT scores. It's worth checking the specific programs you're targeting." },
        { q: "How much time do I need to prepare for the GRE?", a: "Most students need 2–4 months of structured preparation. We'll create a custom plan based on your target score and test date." },
      ]}
    />
  );
}
