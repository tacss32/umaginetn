import Navbar from "@/components/navbar";
import Header from "./_homepage/header";
import Footer from "@/components/footer";
import SocialGallery from "./_homepage/social-gallery";
import KeyTracks from "./_homepage/key-tracks";
import ScrollUp from "@/components/scroll-up";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <KeyTracks />
      <SocialGallery />
      <Footer />
      <ScrollUp />
    </>
  );
}
