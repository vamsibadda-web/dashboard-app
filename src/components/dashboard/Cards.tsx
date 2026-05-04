import { useEmployeeStore } from "../../store/useEmployeeStore";

function Cards() {
  const employees = useEmployeeStore((s) => s.employees);
  const roleCounts = employees.reduce(
    (acc, emp) => {
      if (emp.role.toLowerCase().includes("frontend")) acc.frontend++;
      else if (emp.role.toLowerCase().includes("backend")) acc.backend++;
      else if (emp.role.toLowerCase().includes("hr")) acc.hr++;
      return acc;
    },
    { frontend: 0, backend: 0, hr: 0 }
  );

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-green-100 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold">{employees.length}</p>
        <p className="text-gray-600">Total Employees</p>
      </div>
      <div className="bg-blue-100 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold">{roleCounts.frontend}</p>
        <p className="text-gray-600">Frontend Dev</p>
      </div>
      <div className="bg-yellow-100 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold">{roleCounts.backend}</p>
        <p className="text-gray-600">Backend Dev</p>
      </div>
      <div className="bg-red-100 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold">{roleCounts.hr}</p>
        <p className="text-gray-600">HR</p>
      </div>

    </div>
  );
}

export default Cards;