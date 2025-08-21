import { LoadingDiv } from "@components/LoadingDiv";

export const Sidebar = ({ user, data, isLoading }) => {
  return (
    <div className="glass-bg rounded-xl p-4">
      {isLoading && <LoadingDiv />}

      {!isLoading && (
        <div className="px-10">
          <img
            src="https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2022/10/cropped-Logo-Universitas-Mercu-Buana-Yogyakarta-UMBY-1080x993-removebg-preview.png"
            alt="Sidebar logo"
            className="mx-auto aspect-square w-30"
          />
          <div></div>
        </div>
      )}
    </div>
  );
};
