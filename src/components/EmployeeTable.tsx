import { useEmployeeStore } from "../store/useEmployeeStore";
import { Link } from "@tanstack/react-router";

type Props = {
  limit?: number;
  showName?: boolean;
};

 function EmployeeTable({ limit, showName = true }: Props) {
  const employees = useEmployeeStore((s) => s.employees);

  const data = limit ? employees.slice(0, limit) : employees;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
      <table className="w-full border">
        <thead>
          <tr>
            {showName && <th className="p-2 text-left">Name</th>}
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              {showName && (
                <td className="p-2">
                  <Link to={`/employees/${emp.id}`}>
                    {emp.name}
                  </Link>
                </td>
              )}
              <td className="p-2">{emp.role}</td>
              <td className="p-2">{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;