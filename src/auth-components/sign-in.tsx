import { signIn } from "@/auth";
import { Button, Link } from "@nextui-org/react";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <Button
        color="primary"
        variant="flat"
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
}
