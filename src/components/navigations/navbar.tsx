import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          首頁
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1">
        <li>
          <a>一對一私課</a>
        </li>
        <li>
          <details>
            <summary>精品班</summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li>
                <a>小學</a>
              </li>
              <li>
                <a>初中</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>藝考輔導</a>
        </li>
        <li>
          <a>預約試聽</a>
        </li>
        <li className=" bg-primary text-white rounded-md">
          <a>English</a>
        </li>
      </ul>
    </div>
  );
}
