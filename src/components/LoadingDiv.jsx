export const LoadingDiv = ({ divLength = 2 }) => {
  return (
    <div role="status" className="animate-pulse p-4 rtl:space-x-reverse">
      <div className="w-full space-y-2">
        {Array.from({ length: divLength }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-8 w-full min-w-40 rounded-lg bg-gray-500"></div>
            <div className="h-2 w-full min-w-40 rounded-lg bg-gray-500"></div>
            <div className="h-2 w-full rounded-full bg-gray-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
