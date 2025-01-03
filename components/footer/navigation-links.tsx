import menuConfig from "@/config/layout/menu";
import { Link } from "next-view-transitions";

export default function NavigationLinks() {
  return (
    <>
      {/* Navigation Links */}
      <nav
        aria-label="Footer"
        className="mx-auto -mb-6 hidden columns-3 gap-x-10 text-center sm:flex sm:justify-center"
      >
        {menuConfig.map((item) => (
          <div key={item.title} className="pb-6">
            <Link
              href={item.slug}
              className="text-md font-medium text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-sky-500"
              prefetch={true}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
}
