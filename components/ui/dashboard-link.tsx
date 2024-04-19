import Link from "next/link";
import styles from "../component/NavBar/Navbar.module.css";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function DashboardLink() {
  return (
    <Link className={`${styles.glass_link}`} href={"/dashboard"}>
      dashboard
      <Avatar className="ms-3 w-8 h-8">
        <Image
          alt="use profile photo"
          className="rounded-full object-cover"
          height="42"
          src={"/placeholder-user.svg"}
          style={{
            aspectRatio: "42/42",
            objectFit: "cover",
          }}
          width="48"
        />
      </Avatar>
    </Link>
  );
}
