"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setNotification("Message sent! We'll get back to you as soon as possible.");
    setTimeout(() => setNotification(null), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question or feedback? We'd love to hear from you. Fill out the
                form below and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@mytalorzone.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      123 Fashion Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {notification && (
                  <div className="mb-6 text-green-600 font-semibold">
                    {notification}
                  </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                      }
                      required
                  />
                </div>
                <div>
                  <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                      }
                      required
                  />
                </div>
                <div>
                  <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
