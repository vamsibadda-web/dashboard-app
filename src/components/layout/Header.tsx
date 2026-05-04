function Header() {
  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center border-b">
      
      <h1 className="text-xl font-semibold">Hi, Welcome back</h1>

      <div className="flex items-center gap-4">
        <span>🔍</span>
        <span>🇬🇧</span>
        <span className="relative">
          🔔
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
          </span>
        </span>
        <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
      </div>

    </div>
  );
}

export default Header;