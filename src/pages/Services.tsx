import { Code, FileText, Presentation, Monitor, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Code, title: "Custom Electronics Projects", desc: "We design and build custom Arduino, IoT, robotics, and embedded system projects tailored to your exact college requirements and specifications." },
  { icon: FileText, title: "Personalized Project Reports", desc: "Get comprehensive project documentation including abstract, circuit diagrams, code explanation, and results — formatted per your university guidelines." },
  { icon: Presentation, title: "PPT Presentation Creation", desc: "Professional, visually appealing presentations for your project reviews, seminars, and final viva examinations." },
  { icon: Monitor, title: "Software Development", desc: "Custom software solutions including web applications, mobile apps, and desktop tools to complement your hardware projects." },
  { icon: GraduationCap, title: "Final Year Project Support", desc: "End-to-end support from project selection to final submission — including hardware, code, documentation, and presentation." },
];

const Services = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Our Services" subtitle="Comprehensive project solutions for engineering students." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all group">
            <div className="w-14 h-14 rounded-lg gradient-cyan flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon size={28} className="text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
