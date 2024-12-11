import Link from "next/link";
import UserDetails from "@/app/(dashboard)/dashboard/users/[id]/page";

const Page = () => {
  return (
    <>
      <div>Dashboard Users</div>
      <ul>
        <li>
          <Link href="/app/(dashboard)/dashboard/users/123">User 123</Link>
        </li>
        <li>
          <Link href="/app/(dashboard)/dashboard/users/123">User 123</Link>
        </li>
        <li>
          <Link href="/app/(dashboard)/dashboard/users/123">User 123</Link>
        </li>
        <li>
          <Link href="/app/(dashboard)/dashboard/users/123">User 123</Link>
        </li>
      </ul>
    </>
  );
};
export default Page;
