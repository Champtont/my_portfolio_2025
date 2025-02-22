import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";


export default function Home() {
  return (
    <div>
      <main>
        <NavBar/>
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}
