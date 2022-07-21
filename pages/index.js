import NameCard from "../components/NameCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="root">
      <Navbar />
      <div className="container">
        <NameCard />
      </div>
    </div>
  );
}
