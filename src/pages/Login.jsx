import { LoginSection } from "@components/login/LoginSection";
import { NewsSection } from "@components/login/NewsSection";
import { useQuery } from "@tanstack/react-query";
import { fetchLoginData } from "@services/fetchData";

export const Login = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["loginData"],
    queryFn: fetchLoginData,
  });

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center lg:max-w-5xl lg:py-4 xl:max-w-6xl">
      <div className="flex h-full w-full flex-col gap-4 bg-blue-900 p-4 lg:flex-row lg:gap-8 lg:rounded-lg">
        <div className="order-2 flex h-full flex-1 lg:order-1">
          <NewsSection data={data} />
        </div>
        <div className="order-1 flex h-full items-center justify-center lg:order-2">
          <LoginSection data={data} />
        </div>
      </div>
    </div>
  );
};
