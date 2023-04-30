import "../styles/main.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Silmaring",
  description: "Ettevõtlik elu algab teadmistest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navbar />
        </nav>
        {children}
        <footer id="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
