import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "../context/ThemeContext";

export const Route = createFileRoute("/settings")({
  component: Settings,
});

function Settings() {
  const { dark, setDark } = useTheme();

  return (
    <div>
      <h2 className="text-xl mb-4">Settings</h2>

      <button
        onClick={() => setDark(!dark)}
        className="bg-black text-white px-4 py-2"
      > Theme ({dark ? "Dark" : "Light"})
      </button>
    </div>
  );
}