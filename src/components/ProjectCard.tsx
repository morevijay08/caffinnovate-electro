import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  category?: string;
}

const ProjectCard = ({ title, image, category }: ProjectCardProps) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="p-4">
      {category && <span className="text-xs font-medium text-secondary uppercase tracking-wider">{category}</span>}
      <h3 className="font-heading font-semibold text-card-foreground mt-1 mb-3">{title}</h3>
      <Link
        to="/projects"
        className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-accent transition-colors"
      >
        View Details →
      </Link>
    </div>
  </div>
);

export default ProjectCard;
