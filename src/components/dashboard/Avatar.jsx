export const Avatar = ({ className = "", user }) => {
  return (
    <div className={className}>
      {user.img ? (
        <img
          src={user.img}
          alt={`${user.name}'s avatar`}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="shadow-morph flex h-full w-full items-center justify-center rounded-full">
          <p className="font-semibold text-gray-200">{user?.initial}</p>
        </div>
      )}
    </div>
  );
};
