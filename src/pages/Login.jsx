import { useQuery } from "@tanstack/react-query";
import { fetchLoginData } from "@services/fetchData";
import { LoginContent } from "@components/login/LoginContent";
import { NewsContent } from "@components/login/NewsContent";
import { MainBg } from "@components/MainBg";

export const Login = () => {
  const { data } = useQuery({
    queryKey: ["loginData"],
    queryFn: fetchLoginData,
  });

  return (
    <>
      <MainBg />
      <div className="relative z-10 grid lg:grid-cols-[1fr_32rem]">
        <NewsContent data={data} />
        <LoginContent data={data} />
      </div>
    </>
  );
};
