import { Outlet } from "react-router";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 max-w-screen-xl">
        <Outlet />
      </main>
    </div>
  );
}
