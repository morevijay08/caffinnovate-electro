import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", college: "", branch: "", projectTitle: "", technology: "", deadline: "", budget: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Caffinnovators! I'd like to request a custom project.\n\nName: ${form.name}\nCollege: ${form.college}\nBranch: ${form.branch}\nProject: ${form.projectTitle}\nTechnology: ${form.technology}\nDeadline: ${form.deadline}\nBudget: ${form.budget}\nMessage: ${form.message}`;
    window.open(`https://wa.me/918767274158?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition text-sm";

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Us" subtitle="Get in touch for custom project requests and queries." />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <a href="tel:+918767274158" className="flex items-center gap-4 bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-11 h-11 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-semibold text-card-foreground">8767274158</p>
              </div>
            </a>
            <a href="https://wa.me/918767274158" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-11 h-11 rounded-lg bg-[hsl(142,70%,45%)] flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-semibold text-card-foreground">8767274158</p>
              </div>
            </a>
            <a href="mailto:caffinnovators@gmail.com" className="flex items-center gap-4 bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-11 h-11 rounded-lg gradient-cyan flex items-center justify-center shrink-0">
                <Mail size={20} className="text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-card-foreground">caffinnovators@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-card rounded-lg p-5 shadow-card">
              <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-card-foreground">Pune, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-6">Request a Custom Project</h3>
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Your Name *" required value={form.name} onChange={handleChange} className={inputClass} maxLength={100} />
                <input name="college" placeholder="College Name" value={form.college} onChange={handleChange} className={inputClass} maxLength={150} />
                <input name="branch" placeholder="Branch (e.g. E&TC)" value={form.branch} onChange={handleChange} className={inputClass} maxLength={100} />
                <input name="projectTitle" placeholder="Project Title" value={form.projectTitle} onChange={handleChange} className={inputClass} maxLength={200} />
                <select name="technology" value={form.technology} onChange={handleChange} className={inputClass}>
                  <option value="">Select Technology</option>
                  <option>Arduino</option>
                  <option>IoT</option>
                  <option>Robotics</option>
                  <option>AI/ML</option>
                  <option>Embedded Systems</option>
                  <option>Other</option>
                </select>
                <input name="deadline" type="date" placeholder="Deadline" value={form.deadline} onChange={handleChange} className={inputClass} />
                <input name="budget" placeholder="Budget (₹)" value={form.budget} onChange={handleChange} className={inputClass} maxLength={20} />
                <div /> {/* spacer */}
                <textarea name="message" placeholder="Your Message..." rows={4} value={form.message} onChange={handleChange} className={`${inputClass} sm:col-span-2`} maxLength={1000} />
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full py-3 rounded-lg gradient-cyan text-secondary-foreground font-semibold hover:opacity-90 transition">
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
