import { Link } from "react-router-dom";
import { Code, FileText, Presentation, Monitor, GraduationCap, CheckCircle, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import heroImg from "@/assets/hero-bg.jpg";
import imgSmartHome from "@/assets/project-smart-home.jpg";
import imgAlcohol from "@/assets/project-alcohol-detection.jpg";
import imgFall from "@/assets/project-fall-detection.jpg";
import imgLine from "@/assets/project-line-follower.jpg";
import imgBalance from "@/assets/project-balancing-robot.jpg";
import imgWheelchair from "@/assets/project-wheelchair.jpg";

const featuredProjects = [
  { title: "Smart Home Automation", image: imgSmartHome, category: "IoT" },
  { title: "Alcohol Detection System", image: imgAlcohol, category: "Arduino" },
  { title: "Fall Detection System", image: imgFall, category: "Embedded" },
  { title: "Line Follower Robot", image: imgLine, category: "Robotics" },
  { title: "Two Wheel Self Balancing Robot", image: imgBalance, category: "Robotics" },
  { title: "Old Age Smart Wheelchair Care System", image: imgWheelchair, category: "IoT" },
];

const services = [
  { icon: Code, title: "Custom Electronics Projects", desc: "Tailored Arduino, IoT & robotics projects for your requirements." },
  { icon: FileText, title: "Personalized Project Reports", desc: "Complete documentation formatted per university guidelines." },
  { icon: Presentation, title: "PPT Presentation Creation", desc: "Professional presentations for project reviews & viva." },
  { icon: Monitor, title: "Software Development", desc: "Custom software, apps & web solutions for your projects." },
  { icon: GraduationCap, title: "Final Year Project Support", desc: "End-to-end support from ideation to final submission." },
];

const categories = [
  { label: "Arduino", color: "bg-secondary" },
  { label: "IoT", color: "bg-secondary" },
  { label: "Robotics", color: "bg-secondary" },
  { label: "AI/ML", color: "bg-secondary" },
  { label: "Embedded", color: "bg-secondary" },
  { label: "Final Year Projects", color: "gradient-accent" },
];

const whyChoose = [
  { icon: CheckCircle, title: "Ready Code", desc: "Get tested, working source code for every project." },
  { icon: FileText, title: "Personalized Reports", desc: "Custom reports matching your college format." },
  { icon: MessageCircle, title: "Technical Support", desc: "Dedicated support via WhatsApp & call." },
  { icon: Code, title: "Custom Projects", desc: "Projects built to your exact specifications." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Caff<span className="text-accent">innovators</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/85 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Custom Electronics Projects & Documentation for Engineering Students
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/projects" className="px-6 py-3 rounded-lg gradient-cyan text-secondary-foreground font-semibold hover:opacity-90 transition">
            Browse Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition">
            Request Custom Project
          </Link>
          <a href="https://wa.me/918767274158" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition flex items-center gap-2">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" subtitle="Explore our popular electronics & robotics projects built for engineering students." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Services" subtitle="Everything you need to ace your engineering project." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-12 h-12 rounded-lg gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon size={24} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Project Categories" subtitle="Find projects in your domain of interest." />
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((c) => (
            <Link
              key={c.label}
              to="/categories"
              className={`px-6 py-3 rounded-full font-semibold text-secondary-foreground ${c.color} hover:opacity-90 transition text-sm`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose Us?" subtitle="We make engineering projects easy and stress-free." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((w) => (
            <div key={w.title} className="text-center bg-background rounded-lg p-6 shadow-card">
              <div className="w-14 h-14 rounded-full gradient-hero mx-auto flex items-center justify-center mb-4">
                <w.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 gradient-hero text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get a custom electronics project tailored to your requirements. Contact us today!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="px-8 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition">
            Request Custom Project
          </Link>
          <a href="tel:+918767274158" className="px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition">
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
