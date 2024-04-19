import { UploadForm } from "@/components/component/UploadForm/upload-form";
import styles from "./page.module.css"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {

  const { getPermission } = getKindeServerSession();
  const permission = await getPermission("upload-permission");

  if (permission?.isGranted) {
    return (
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${styles.main}`}>
        <UploadForm/>
      </main>
    );
  } else {
    return (
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${styles.main}`}>
        <h1>Sorry You are not allowed to upload notes to the platform</h1>
      </main>
    );
  }
}