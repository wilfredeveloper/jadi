import SearchBox from "@/components/component/SearchBox/SearchBox";
import Logo from "@/components/ui/logo";
import styles from "./page.module.css"

export default async function Home() {
  return (
    <main className={`${styles.main}`}>
      <SearchBox />
    </main>
  );
}
