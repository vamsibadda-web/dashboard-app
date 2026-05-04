import { create } from "zustand";

export type Employee = {
  id: string;
  name: string;
  role: string;
  email: string;
};

type State = {
  employees: Employee[];
  getEmployeeById: (id: string) => Employee | undefined;
};

export const useEmployeeStore = create<State>((set, get) => ({
  employees: [
    { id: "1", name: "Jhon", role: "Frontend Dev", email: "jhon@test.com" },
    { id: "2", name: "Deo", role: "Backend Dev", email: "deo@test.com" },
    { id: "3", name: "Suresh", role: "Full Stack Developer", email: "suresh@test.com" },
    { id: "4", name: "Anjali", role: "Frontend Dev", email: "anjali@test.com" },
    { id: "5", name: "Kiran", role: "Backend Dev", email: "kiran@test.com" },
    { id: "6", name: "Priya", role: "UI/UX Designer", email: "priya@test.com" },
    { id: "7", name: "Arjun", role: "Full Stack Developer", email: "arjun@test.com" },
    { id: "8", name: "Sneha", role: "Frontend Dev", email: "sneha@test.com" },
    { id: "9", name: "Rahul", role: "Backend Dev", email: "rahul@test.com" },
    { id: "10", name: "Divya", role: "QA Engineer", email: "divya@test.com" },
    { id: "11", name: "Manoj", role: "DevOps Engineer", email: "manoj@test.com" },
    { id: "12", name: "Pooja", role: "Frontend Dev", email: "pooja@test.com" },
    { id: "13", name: "Naveen", role: "Backend Dev", email: "naveen@test.com" },
    { id: "14", name: "Lakshmi", role: "HR", email: "lakshmi@test.com" },
    { id: "15", name: "Karthik", role: "Full Stack Developer", email: "karthik@test.com" },
    { id: "16", name: "Meena", role: "UI/UX Designer", email: "meena@test.com" },
    { id: "17", name: "Ramesh", role: "QA Engineer", email: "ramesh@test.com" },
    { id: "18", name: "Teja", role: "DevOps Engineer", email: "teja@test.com" },
    { id: "19", name: "Swathi", role: "Frontend Dev", email: "swathi@test.com" },
    { id: "20", name: "Ajay", role: "Backend Dev", email: "ajay@test.com" },
  ],

  getEmployeeById: (id) =>
    get().employees.find((emp) => emp.id === id),
}));