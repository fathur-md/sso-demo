import { FormSection } from "@pages/login/FormSection";
import { NewsSection } from "@pages/login/NewsSection";
import loginBg from "@assets/login-bg.png";

export const Login = () => {
  return (
    <main className="relative flex min-h-dvh overflow-hidden antialiased">
      {/* Background image using inline style */}
      <div className="fixed inset-0 z-0">
        <img
          src={loginBg}
          alt="Background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent"></div>
      </div>
      {/* <div
        className="fixed inset-0 z-10 bg-cover bg-center bg-blend-overlay after:absolute after:inset-0 after:bg-gradient-to-b after:from-blue-900 after:to-transparent after:content-['']"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></div> */}
      <div className="relative z-20 flex w-full">
        <div className="flex w-full flex-col lg:flex-row">
          {/* Left */}
          <div className="order-2 flex overflow-y-auto lg:order-1 lg:h-dvh lg:flex-1">
            <NewsSection />
          </div>
          {/* Right */}
          <div className="order-1 flex w-full overflow-hidden max-lg:min-h-dvh lg:order-2 lg:max-w-lg">
            {/* <FormSection /> */}
          </div>
        </div>
      </div>
    </main>
  );
};
