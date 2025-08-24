import { useQuery } from "@tanstack/react-query";
import { fetchLoginData } from "@services/fetchData";
import { LoginContent } from "@components/login/LoginContent";
import { NewsContent } from "@components/login/NewsContent";

export const Login = () => {
  const { data } = useQuery({
    queryKey: ["loginData"],
    queryFn: fetchLoginData,
  });

  return (
    <div className="mx-auto grid max-w-6xl lg:grid-cols-[1fr_26rem]">
      <NewsContent data={data} />
      <LoginContent data={data} />
    </div>
  );
};
