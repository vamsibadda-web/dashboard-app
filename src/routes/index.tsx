import { createFileRoute } from "@tanstack/react-router";
import Cards from "../components/dashboard/Cards";
import Charts from "../components/dashboard/Charts";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <Cards />
      <Charts />
    </div>
  );
}