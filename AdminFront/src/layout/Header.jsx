import { ProfileIcon } from "../Icon/Icon";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { authUser, logout } = useAuth();
  console.log("i am what i am", authUser);
  return (
    <div className="navbar bg-white px-20">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="btn btn-ghost btn-circle avatar flex items-center w-60">
            <ProfileIcon role="button" />
            {authUser && <p className="px-3">{authUser.firstName}</p>}
            <button className="px-10  hover:bg-red-400 hover:rounded-md" onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
