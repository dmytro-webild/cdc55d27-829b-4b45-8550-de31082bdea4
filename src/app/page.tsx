"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLarge"
      background="aurora"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Sadbhavna Hospital"
          navItems={[
            { name: "About", id: "about" },
            { name: "Treatments", id: "treatments" },
            { name: "Doctor", id: "doctor" },
            { name: "Why Us", id: "whyus" },
            { name: "FAQ", id: "faq" },
          ]}
          button={{ text: "Call Now: 9106977710", href: "tel:+919106977710" }}
        />
      </div>

      <div id="hero" data-section="hero" className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <HeroSplitTestimonial
            title="Advanced Laser & Laparoscopic Surgery in Ahmedabad"
            description="Trusted Care for Piles, Fissure, Fistula, Hernia, Gallbladder & More"
            tag="15% Discount + Free Consultation"
            tagAnimation="slide-up"
            buttons={[
              { text: "Get Free Consultation", href: "#contact" },
              { text: "Call 9106977710", href: "tel:+919106977710" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/medical-ventilator-being-monitored-by-anaesthetist-surgeon-using-monitor-operating-room_657921-1089.jpg"
            imageAlt="Advanced Laser Surgery Technology"
            mediaAnimation="opacity"
            background={{ variant: "glowing-orb" }}
            testimonials={[
              {
                name: "Rajesh M.",                handle: "Surgery Patient",                testimonial: "20+ Years Experience, 11,000+ Surgeries",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-woman-talking-her-doctor-medical-clinic_637285-9073.jpg"},
              {
                name: "Dr. Rakesh Sanol",                handle: "Lead Surgeon",                testimonial: "World-Class Procedures, Most Sterile Environment",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-male-doctor-dressed-uniform_171337-1484.jpg"},
              {
                name: "Priya K.",                handle: "EMI Available",                testimonial: "Cashless Insurance & Easy Payment Options",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-doctor-home-visit_637285-11276.jpg"},
            ]}
            testimonialRotationInterval={5000}
            useInvertedBackground={false}
            className="hero-section"
            ariaLabel="Hero section for Sadbhavna Laser Piles Hospital"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="bg-white border-t border-accent">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <TextSplitAbout
            title="Most Trusted Laser Surgery Center in Ahmedabad"
            description={[
              "Located in the heart of Ahmedabad, Sadbhavna Laser Piles Hospital combines state-of-the-art surgical technology with a compassionate, patient-first approach. Our facility maintains the highest standards of sterility and hygiene, ensuring every patient receives world-class care.",              "We specialize in minimally invasive laser and laparoscopic procedures designed to reduce pain, minimize recovery time, and deliver lasting results. With Dr. Rakesh Sanol's 20+ years of expertise and 11,000+ successful surgeries, we have established ourselves as Gujarat's most trusted surgical center."]}
            buttons={[{ text: "Book Consultation", href: "#contact" }]}
            buttonAnimation="slide-up"
            showBorder={true}
            useInvertedBackground={true}
            ariaLabel="About section for hospital"
          />
        </div>
      </div>

      <div id="doctor" data-section="doctor" className="bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <TeamCardOne
            title="Meet Dr. Rakesh Sanol"
            description="Expert Surgeon with Global Credentials & Patient-Centric Care"
            tag="Lead Surgeon"
            tagAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            members={[
              {
                id: "1",                name: "Dr. Rakesh Sanol",                role: "M.S. General & Laparoscopic Surgery, FMAS, FIAGES",                imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-male-doctor-dressed-uniform_171337-1484.jpg",                imageAlt: "Dr. Rakesh Sanol"},
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            ariaLabel="Doctor profile section"
          />
        </div>
      </div>

      <div id="treatments" data-section="treatments" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <FeatureCardTwelve
            title="Treatments Offered"
            description="Comprehensive surgical solutions for all your healthcare needs"
            tag="Medical Expertise"
            tagAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              {
                id: "piles",                label: "Piles",                title: "Laser-Assisted Piles Treatment",                items: [
                  "Painless laser surgery",                  "Same-day discharge",                  "Minimal recovery time"],
                buttons: [
                  { text: "Know More", href: "#" },
                  { text: "Get Cost Estimate", href: "#contact" },
                ],
              },
              {
                id: "fissure",                label: "Fissure",                title: "Fissure Repair Treatment",                items: [
                  "Advanced surgical techniques",                  "Pain-free recovery",                  "Permanent solution"],
                buttons: [
                  { text: "Know More", href: "#" },
                  { text: "Get Cost Estimate", href: "#contact" },
                ],
              },
              {
                id: "fistula",                label: "Fistula",                title: "Minimally Invasive Fistula Surgery",                items: [
                  "Laser-guided precision",                  "Reduced infection risk",                  "Quick healing"],
                buttons: [
                  { text: "Know More", href: "#" },
                  { text: "Get Cost Estimate", href: "#contact" },
                ],
              },
              {
                id: "hernia",                label: "Hernia",                title: "Laparoscopic Hernia Repair",                items: [
                  "Minimally invasive approach",                  "Lower recurrence rate",                  "Faster recovery"],
                buttons: [
                  { text: "Know More", href: "#" },
                  { text: "Get Cost Estimate", href: "#contact" },
                ],
              },
              {
                id: "gallbladder",                label: "Gallbladder",                title: "Laparoscopic Gallbladder Surgery",                items: [
                  "Advanced video-guided surgery",                  "Minimal scarring",                  "Day care procedure"],
                buttons: [
                  { text: "Know More", href: "#" },
                  { text: "Get Cost Estimate", href: "#contact" },
                ],
              },
              {
                id: "circumcision",                label: "ZSR",                title: "ZSR Circumcision Procedure",                items: [
                  "Painless modern technique",                  "No stitches required",                  "Sterile environment"],
                buttons: [
                  { text: "Know More", href: "#" },
                  { text: "Get Cost Estimate", href: "#contact" },
                ],
              },
            ]}
            ariaLabel="Treatments section"
          />
        </div>
      </div>

      <div id="whyus" data-section="whyus" className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <MetricCardTwo
            title="Why Choose Sadbhavna Hospital"
            description="Trust, expertise, and patient-centric care"
            tag="Excellence"
            tagAnimation="slide-up"
            metrics={[
              {
                id: "1",                value: "20+",                description: "Years of Surgical Experience"},
              {
                id: "2",                value: "11,000+",                description: "Successful Surgeries"},
              {
                id: "3",                value: "5★",                description: "Google Verified Rating"},
              {
                id: "4",                value: "100%",                description: "Sterile Environment"},
            ]}
            gridVariant="uniform-all-items-equal"
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="slide-up"
            ariaLabel="Why choose us metrics section"
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <TestimonialCardOne
            title="Real Patient Success Stories"
            description="Hear from patients who chose Sadbhavna Hospital for their treatment"
            tag="Patient Testimonials"
            tagAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              {
                id: "1",                name: "Amit Patel",                role: "IT Professional",                company: "Tech Solutions",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-woman-talking-her-doctor-medical-clinic_637285-9073.jpg",                imageAlt: "Amit Patel testimonial"},
              {
                id: "2",                name: "Priya Sharma",                role: "Entrepreneur",                company: "Fashion Designer",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-doctor-home-visit_637285-11276.jpg",                imageAlt: "Priya Sharma testimonial"},
              {
                id: "3",                name: "Rajesh Kumar",                role: "Business Owner",                company: "Manufacturing",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-woman-talking-her-doctor-medical-clinic_637285-9073.jpg",                imageAlt: "Rajesh Kumar testimonial"},
              {
                id: "4",                name: "Neha Desai",                role: "Healthcare Worker",                company: "Hospital Staff",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-woman-talking-her-doctor-medical-clinic_637285-9073.jpg",                imageAlt: "Neha Desai testimonial"},
              {
                id: "5",                name: "Vikram Singh",                role: "Teacher",                company: "Education Sector",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-woman-talking-her-doctor-medical-clinic_637285-9073.jpg",                imageAlt: "Vikram Singh testimonial"},
              {
                id: "6",                name: "Deepa Nair",                role: "Corporate Executive",                company: "Finance",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-woman-talking-her-doctor-medical-clinic_637285-9073.jpg",                imageAlt: "Deepa Nair testimonial"},
            ]}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            ariaLabel="Testimonials section"
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <FaqBase
            title="Frequently Asked Questions"
            description="Find answers to common questions about our treatments and services"
            tag="FAQ"
            tagAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            faqsAnimation="slide-up"
            animationType="smooth"
            faqs={[
              {
                id: "1",                title: "What treatments do you offer?",                content: "We specialize in laser and laparoscopic surgery for piles, fissures, fistulas, hernias, gallbladder problems, circumcision, appendicitis, lipomas, and hydroceles. All procedures use FDA-approved equipment and cutting-edge surgical techniques."},
              {
                id: "2",                title: "Is the surgery painful?",                content: "No. Our laser and laparoscopic procedures are minimally invasive and performed under anesthesia. Patients experience minimal post-operative pain compared to traditional open surgery, with faster recovery times."},
              {
                id: "3",                title: "What is the recovery time?",                content: "Most laser procedures allow patients to return to normal activities within 24-48 hours. Recovery varies by procedure—laser piles typically requires 3-5 days, while laparoscopic surgery may require 1-2 weeks for full recovery."},
              {
                id: "4",                title: "Do you accept insurance?",                content: "Yes, we are empaneled with all major insurance companies and TPA networks. We handle all paperwork and provide cashless treatment. We also offer no-cost EMI options for self-paying patients."},
              {
                id: "5",                title: "What qualifications does Dr. Rakesh Sanol have?",                content: "Dr. Rakesh Sanol holds M.S. in General & Laparoscopic Surgery, is FMAS (Fellow of Minimal Access Surgery) certified, FIAGES certified, and registered with the Gujarat Medical Council. He has 20+ years of experience and 11,000+ successful surgeries."},
              {
                id: "6",                title: "Is consultation free?",                content: "Yes, we offer free initial consultation with Dr. Rakesh Sanol. During this consultation, the doctor will assess your condition and discuss treatment options tailored to your needs."},
              {
                id: "7",                title: "Can Ayurvedic medicines cure piles?",                content: "<strong>IMPORTANT NOTE:</strong> आयुर्वेदिक दवाओं में पाइल्स का कोई इलाज नहीं है। Ayurvedic medicines DO NOT cure piles. Only modern laser or surgical procedures provide permanent relief. Ayurvedic treatments may temporarily reduce symptoms but cannot eliminate the root cause."},
              {
                id: "8",                title: "How do I book an appointment?",                content: "You can book an appointment by calling us at 9106977710, filling out our consultation form on this website, or messaging us on WhatsApp. We also offer online consultations for initial discussions."},
            ]}
            ariaLabel="FAQ section"
          />
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Sadbhavna Hospital"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
