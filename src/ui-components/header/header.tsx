import { auth } from "@/auth";
import UserArea from "@/auth-components/avatar-area";
import SignIn from "@/auth-components/sign-in";
import {
    Button,
    Divider,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

export default async function Header() {
    const session = await auth();

    return (
        <>
            <Navbar className="pt-1 pb-1">
                <NavbarBrand>
                    <Image
                        src="/zen-logo.png"
                        alt="zen logo"

                        width={72}
                        height={65}
                    />
                </NavbarBrand>
                <NavbarContent
                    className="sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem isActive={true}>
                        <Link color="foreground" href="#">
                            Forums
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={false}>
                        <Link color="foreground" href="#" aria-current="page">
                            Members
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        {session ? <UserArea user={session?.user!}></UserArea> : <SignIn></SignIn>}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Divider orientation="horizontal" className="mb-5"/>
        </>
    );
}
