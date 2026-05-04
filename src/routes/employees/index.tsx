import { createFileRoute, Link } from "@tanstack/react-router";
import { useEmployeeStore } from "../../store/useEmployeeStore";

export const Route = createFileRoute("/employees/")({
  component: EmployeePage,
});

function EmployeePage() {
  const employees = useEmployeeStore((s) => s.employees);

  return (
    <div className="p-4">

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Employees
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700">
        <div className="grid grid-cols-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 font-semibold text-gray-600 dark:text-gray-200">
          <div className="text-center">Name</div>
          <div className="text-center">Role</div>
        </div>
        {employees.map((emp, index) => (
          <div 
            key={emp.id}
            className={`grid grid-cols-2 px-4 py-3 items-center 
              border-t dark:border-gray-700
              ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"}
              hover:bg-gray-100 dark:hover:bg-gray-600 transition`}
              >
            <div className="text-center">
              <Link
                to="/employees/$id"
                params={{ id: emp.id }}
                className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-800"
              >
                {emp.name}
              </Link>
            </div>
            <div className="text-center text-gray-700 dark:text-gray-300">
              {emp.role}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}