export const Error = ({ error }) => {
  return (
    <h1 className="text-sm leading-normal">
      <span className="text-red-500">
        Error: {error?.message || "Something went wrong"}
      </span>
    </h1>
  );
};
