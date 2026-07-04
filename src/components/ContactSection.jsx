import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting me. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to Send",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14">
          I'm actively looking for Internship and Full-Time Software
          Developer opportunities. Feel free to connect with me for Java Full
          Stack Development, Spring Boot, Python, FastAPI and Generative AI
          projects.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-8">

            <div className="bg-card rounded-2xl p-6 border shadow-md">

              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold">Email</h4>

                    <a
                      href="mailto:0173cs221024@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      0173cs221024@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold">Phone</h4>

                    <a
                      href="tel:+918641053295"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +91 8641053295
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold">Location</h4>

                    <p className="text-muted-foreground">
                      Hinjewadi, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="bg-card rounded-2xl p-6 border shadow-md">

              <h3 className="text-xl font-semibold mb-5">
                Connect With Me
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://linkedin.com/in/anurag-agrawal-baaa213aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://github.com/CyberBaniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition"
                >
                  <Github size={24} />
                </a>

              </div>

            </div>

          </div>

          <div className="bg-card rounded-2xl border shadow-md p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, internship opportunity or collaboration..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />

              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};