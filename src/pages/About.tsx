import { Target, Users, Award, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Target, value: "100+", label: "Projects Delivered" },
  { icon: Users, value: "500+", label: "Happy Students" },
  { icon: Award, value: "50+", label: "Colleges Served" },
  { icon: Zap, value: "6+", label: "Categories" },
];

const About = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Caffinnovators" subtitle="Empowering engineering students with custom project solutions." />

      <div className="max-w-3xl mx-auto mb-16">
        <div className="bg-card rounded-lg p-8 shadow-card">
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Caffinnovators</strong> is a Pune-based electronics project startup dedicated to helping engineering students succeed. We provide customized electronics, IoT, and robotics projects along with comprehensive documentation support.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            From Arduino-based systems to advanced AI/ML integrated hardware, we cover a wide range of technologies. Our team of experienced engineers ensures every project meets academic standards while delivering real-world functionality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you need a complete final year project package, a personalized report, or a professional PPT presentation — Caffinnovators is your one-stop solution for engineering project needs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center bg-card rounded-lg p-6 shadow-card">
            <div className="w-12 h-12 rounded-full gradient-hero mx-auto flex items-center justify-center mb-3">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <p className="font-heading text-2xl font-bold text-secondary">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
