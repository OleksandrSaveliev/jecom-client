import { Outlet } from "react-router";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 max-w-screen-xl">
        <Outlet />
      </main>
    </div>
  );
}
