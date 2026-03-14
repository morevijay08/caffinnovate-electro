import SectionHeading from "@/components/SectionHeading";
import imgSmartHome from "@/assets/project-smart-home.jpg";
import imgAlcohol from "@/assets/project-alcohol-detection.jpg";
import imgFall from "@/assets/project-fall-detection.jpg";
import imgLine from "@/assets/project-line-follower.jpg";
import imgBalance from "@/assets/project-balancing-robot.jpg";
import imgWheelchair from "@/assets/project-wheelchair.jpg";

const images = [
  { src: imgSmartHome, title: "Smart Home Automation" },
  { src: imgAlcohol, title: "Alcohol Detection System" },
  { src: imgFall, title: "Fall Detection System" },
  { src: imgLine, title: "Line Follower Robot" },
  { src: imgBalance, title: "Self Balancing Robot" },
  { src: imgWheelchair, title: "Smart Wheelchair" },
];

const Gallery = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Project Gallery" subtitle="See our projects in action." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {images.map((img) => (
          <div key={img.title} className="group relative rounded-lg overflow-hidden shadow-card">
            <img src={img.src} alt={img.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors flex items-end">
              <p className="text-primary-foreground font-heading font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionHeading title="Demo Videos" subtitle="Watch our project demonstrations on YouTube." />
      <div className="max-w-3xl mx-auto">
        <div className="aspect-video rounded-lg overflow-hidden shadow-card">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/?listType=user_uploads&list=caffinnovators"
            title="Caffinnovators YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="text-center mt-4">
          <a href="https://www.youtube.com/@caffinnovators" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent font-medium transition-colors">
            Visit our YouTube channel →
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Gallery;
