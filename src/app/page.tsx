import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen items-center justify-center md:px-0 py-20 px-4 font-[poppins]">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome, Sign Up</h1>
      <SignupForm />
    </div>
  );
}
