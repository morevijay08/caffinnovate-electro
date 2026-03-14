import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-heading text-xl font-bold mb-3">
          Caff<span className="text-accent">innovators</span>
        </h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Custom Electronics Projects & Documentation for Engineering Students.
        </p>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["Home", "Projects", "Services", "Categories", "Gallery", "About", "Contact"].map((l) => (
            <li key={l}>
              <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-secondary transition-colors">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3">Contact</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li className="flex items-center gap-2"><Phone size={14} /> 8767274158</li>
          <li className="flex items-center gap-2"><Mail size={14} /> caffinnovators@gmail.com</li>
          <li className="flex items-center gap-2"><MapPin size={14} /> Pune, Maharashtra</li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/caffinnovators" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.youtube.com/@caffinnovators" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/caffinnovators" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Caffinnovators. All rights reserved.
    </div>
  </footer>
);

export default Footer;
