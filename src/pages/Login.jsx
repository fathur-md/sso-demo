import { LoginSection } from "@components/login/LoginSection";
import { NewsSection } from "@components/login/NewsSection";

export const Login = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="order-2 w-full md:order-1">
          <NewsSection />
        </div>
        <div className="order-1 mx-auto h-full w-full max-w-lg md:order-2 2xl:max-w-2xl">
          <LoginSection />
        </div>
      </div>
    </div>
  );
};
