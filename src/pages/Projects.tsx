import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import imgSmartHome from "@/assets/project-smart-home.jpg";
import imgAlcohol from "@/assets/project-alcohol-detection.jpg";
import imgFall from "@/assets/project-fall-detection.jpg";
import imgLine from "@/assets/project-line-follower.jpg";
import imgBalance from "@/assets/project-balancing-robot.jpg";
import imgWheelchair from "@/assets/project-wheelchair.jpg";

const projects = [
  { title: "Smart Home Automation", image: imgSmartHome, category: "IoT" },
  { title: "Alcohol Detection System", image: imgAlcohol, category: "Arduino" },
  { title: "Fall Detection System", image: imgFall, category: "Embedded" },
  { title: "Line Follower Robot", image: imgLine, category: "Robotics" },
  { title: "Two Wheel Self Balancing Robot", image: imgBalance, category: "Robotics" },
  { title: "Old Age Smart Wheelchair Care System", image: imgWheelchair, category: "IoT" },
];

const Projects = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Our Projects" subtitle="Browse our complete collection of electronics and robotics projects." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
