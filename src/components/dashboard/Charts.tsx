import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,PieChart,Pie,Cell} from "recharts";
import { useEmployeeStore } from "../../store/useEmployeeStore";

function Charts() {
  const employees = useEmployeeStore((s) => s.employees);

  const roleCounts = employees.reduce((acc: any, emp) => {
    acc[emp.role] = (acc[emp.role] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(roleCounts).map(([role, count]) => ({
    role,
    count,
  }));

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Employees by Role</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Role Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="count" nameKey="role" outerRadius={100}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Charts;