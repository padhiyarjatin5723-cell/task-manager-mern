function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-700 text-white p-16">

        <h1 className="text-6xl font-bold leading-tight">
          TaskFlow
        </h1>

        <p className="mt-8 text-xl text-indigo-100 leading-9 text-center max-w-lg">

          Organize your work,
          track your productivity,
          and manage projects like a professional.

        </p>

        <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md">

          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full bg-green-400"/>

              <span>Task Management</span>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full bg-yellow-400"/>

              <span>Priority Tracking</span>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full bg-pink-400"/>

              <span>Productivity Dashboard</span>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full bg-cyan-400"/>

              <span>Analytics & Reports</span>

            </div>

          </div>

        </div>

      </div>

      <div className="bg-slate-100 flex justify-center items-center p-10">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;