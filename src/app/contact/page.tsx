import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import { siteConfig, getPageTitle } from "@/lib/config";

export const metadata: Metadata = {
  title: getPageTitle("Contact Us"),
  description:
    "Have a question, suggestion, or want to contribute to our blog? Contact us and we'll get back to you as soon as possible.",
  keywords: ["contact", "get in touch", "support", "feedback", "contribute"],
  openGraph: {
    title: getPageTitle("Contact Us"),
    description:
      "Have a question, suggestion, or want to contribute to our blog? Contact us and we'll get back to you as soon as possible.",
    type: "website",
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
