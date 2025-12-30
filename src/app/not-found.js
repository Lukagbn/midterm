import Link from "next/link";

function NotFound() {
  return (
    <>
      <h3>
        გვერდი ვერ მოიძებნა! <Link href={`/`}>უკან დაბრუნება ➡️Link</Link>
      </h3>
    </>
  );
}
export default NotFound;
