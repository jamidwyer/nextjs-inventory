import LoginForm from '@/app/components/login-form';

export default function Page() {
  return (
    <div className="flex w-full max-w-[960px] flex-col items-center justify-center space-y-2.5 p-4">
      <LoginForm />
    </div>
  );
}
