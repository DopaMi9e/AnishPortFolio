import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      showAlertMessage("danger", "Please fill in all fields!");
      setIsLoading(false);
      return;
    }

    try {
      // Replace these IDs with your exact EmailJS IDs
      const SERVICE_ID = "service_ns1ia7x";
      const TEMPLATE_ID = "template_f8cd0ze";
      const PUBLIC_KEY = "6LFwuLVkgz5y8Z7sN";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
  from_name: formData.name,
  from_email: formData.email,
  to_name: "Anish",
  to_email: "anishdogra764@gmail.com",
  message: formData.message
},

        PUBLIC_KEY
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS error:", error);

      // Handle 404 or other errors specifically
      if (error.status === 404) {
        showAlertMessage("danger", "Email service not found. Check your IDs!");
      } else {
        showAlertMessage(
          "danger",
          "Something went wrong. Please try again later."
        );
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-6 mx-auto border border-white/10 rounded-2xl bg-primary shadow-lg">
        <div className="flex flex-col items-start w-full gap-4 mb-6">
          <h2 className="text-3xl font-bold text-white">Let's Talk</h2>
          <p className="font-normal text-neutral-400 text-sm">
            Got an idea for a game or interactive project? I specialize in
            turning concepts into playable experiences. Let’s make it real!
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-lg text-center rounded-md cursor-pointer bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender transition-all duration-300 font-medium"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
