import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Welcome to puzzle platform!",
};

const ContactPage = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-8xl text-accent">ContactPage</h1>
    </div>
  );
};

export default ContactPage;
