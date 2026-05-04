import { Link } from "@tanstack/react-router";

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">
      
      <div>
        <h2 className="text-2xl font-bold mb-6 text-green-600"></h2>

        <div className="bg-gray-100 p-3 rounded mb-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
          <span className="text-sm font-medium">Badda Vamsi</span>
        </div>

        <nav className="flex flex-col gap-2 text-gray-600">
          
          <Link to="/" className="bg-green-100 text-green-600 p-2 rounded">
            Dashboard
          </Link>

          <Link to="/employees" className="p-2 hover:bg-gray-100 rounded">
            User
          </Link>

          <Link to="/products" className="p-2 hover:bg-gray-100 rounded">
            Products
          </Link>

          <Link to="/blog" className="p-2 hover:bg-gray-100 rounded">
            Blog
          </Link>

          <Link to="/login" className="p-2 hover:bg-gray-100 rounded">
            Login
          </Link>

          <Link to="/register" className="p-2 hover:bg-gray-100 rounded">
            Register
          </Link>

        </nav>
      </div>

      <div className="bg-gray-100 p-4 rounded text-center">
        <p className="font-semibold">Get more?</p>
      </div>

    </div>
  );
}

export default Sidebar;