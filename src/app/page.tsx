import SignIn from "@/auth-components/sign-in";
import { CategoryService } from "@/services/CategoryService";
import ForumsHome from "@/ui-components/forums-home";
import { Divider } from "@nextui-org/react";

export default async function Home() {
  const categories = await CategoryService.getCategories();

  return (
    <main className="flex justify-center min-h-screen">
      <ForumsHome categories={categories} />
    </main>
  );
}
