function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center p-16">

        <h1 className="text-5xl font-bold mb-6">
          Task Manager
        </h1>

        <p className="text-xl mb-8">
          Organize your daily work with ease.
        </p>

        <div className="space-y-4">

          <p>✔ Create Tasks</p>

          <p>✔ Track Progress</p>

          <p>✔ Stay Organized</p>

        </div>

      </div>

      {/* Right Section */}

      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;