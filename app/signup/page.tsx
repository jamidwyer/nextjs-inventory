import SignupForm from '@/app/components/signup-form';
 
export default function Page() {
  return (
      <div className="flex items-center justify-center w-full max-w-[960px] flex-col space-y-2.5 p-4">
        <SignupForm />
      </div>
  );
}
