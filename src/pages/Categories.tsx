import { Link } from "react-router-dom";
import { Cpu, Wifi, Bot, Brain, Microchip, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  { icon: Cpu, label: "Arduino", desc: "Sensor-based projects, automation, and control systems using Arduino boards.", count: 25 },
  { icon: Wifi, label: "IoT", desc: "Internet of Things projects with WiFi, Bluetooth, and cloud connectivity.", count: 18 },
  { icon: Bot, label: "Robotics", desc: "Line followers, obstacle avoiders, self-balancing and more.", count: 15 },
  { icon: Brain, label: "AI/ML", desc: "Artificial Intelligence and Machine Learning integrated hardware projects.", count: 10 },
  { icon: Microchip, label: "Embedded Systems", desc: "Microcontroller-based embedded solutions for real-world applications.", count: 20 },
  { icon: GraduationCap, label: "Final Year Projects", desc: "Complete final year project packages with code, report, and PPT.", count: 30 },
];

const Categories = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Project Categories" subtitle="Explore projects by technology and domain." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link to="/projects" key={c.label} className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-lg gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <c.icon size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">{c.label}</h3>
            <p className="text-muted-foreground text-sm mb-3">{c.desc}</p>
            <span className="text-xs font-medium text-secondary">{c.count}+ projects</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Categories;
