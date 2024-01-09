import Header from "@/components/templates/header";
import Sidebar from "@/components/templates/sidebar";
import Workspace from "@/components/templates/workspace/workspace";

export default function Home() {
  return (
    <section className="w-full h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Workspace />
      </div>
    </section>
  );
}
