export const Layout = ({ children }) => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
