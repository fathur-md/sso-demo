export const Avatar = ({ className = "", user }) => {
  return (
    <div className={className}>
      <p className="font-semibold text-gray-200">{user?.initial}</p>
    </div>
  );
};
