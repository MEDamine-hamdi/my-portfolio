import "./globals.css";

export const metadata = {
  title: "Amine Hamdi — Full-Stack Developer",
  description:
    "Full-stack developer and Engineering CS student. Building MERN apps, Angular + Spring Boot enterprise systems, and AI-powered pipelines.",
  openGraph: {
    title: "Amine Hamdi — Full-Stack Developer",
    description:
      "Full-stack developer building MERN apps, Angular + Spring Boot systems, and AI pipelines.",
    url: "https://aminehm.vercel.app",
    siteName: "Amine Hamdi Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
