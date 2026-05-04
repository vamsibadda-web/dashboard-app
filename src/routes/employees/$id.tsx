import { createFileRoute } from "@tanstack/react-router";
import { useEmployeeStore } from "../../store/useEmployeeStore";

export const Route = createFileRoute("/employees/$id")({
  component: EmployeeDetails,
});

function EmployeeDetails() {
  const { id } = Route.useParams();
  const emp = useEmployeeStore((s) => s.getEmployeeById(id));

  if (!emp) return <div>Employee not found</div>;

  return (
    <div>
      <h2 className="text-xl mb-4">{emp.name}</h2>

      <div className="space-y-2">
        <p><strong>ID:</strong> {emp.id}</p>
        <p><strong>Role:</strong> {emp.role}</p>
        <p><strong>Email:</strong> {emp.email}</p>
      </div>
    </div>
  );
}