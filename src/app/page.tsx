import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar/>
        <div></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>LinkedIn</div>
        <div>Email</div>
        <div>Phone</div>
        <div>GitHub</div>
      </footer>
    </div>
  );
}
