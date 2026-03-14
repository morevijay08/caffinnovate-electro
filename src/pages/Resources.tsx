import { BookOpen, Video, FileCode, Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const resources = [
  { icon: BookOpen, title: "Project Guides", desc: "Step-by-step tutorials for popular electronics projects.", link: "#" },
  { icon: Video, title: "Video Tutorials", desc: "Watch project demonstrations and assembly guides on YouTube.", link: "https://www.youtube.com/@caffinnovators" },
  { icon: FileCode, title: "Sample Code", desc: "Arduino sketches and code samples for common sensors and modules.", link: "#" },
  { icon: Download, title: "Datasheets", desc: "Component datasheets and technical references for your projects.", link: "#" },
];

const Resources = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Resources" subtitle="Free learning materials to help you with your electronics projects." />
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {resources.map((r) => (
          <a key={r.title} href={r.link} target={r.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <r.icon size={24} className="text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Resources;
