import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Welcome to puzzle platform!",
};

const AboutPage = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-8xl text-accent">
        Developer is Sleeping....!😴
      </h1>
    </div>
  );
};

export default AboutPage;
