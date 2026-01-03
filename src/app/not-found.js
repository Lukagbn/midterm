import Link from "next/link";
import layout from "@/app/layout.module.css";
import styles from "./not-found.module.css";

function NotFound() {
  return (
    <div className={`${styles.notFoundContainer} ${layout.container}`}>
      <h2>
        Page Not Found!{" "}
        <Link href={`/`}>
          <br /> Return To ➡️Main
        </Link>
      </h2>
    </div>
  );
}
export default NotFound;
