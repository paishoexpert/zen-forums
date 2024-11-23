"use client";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar, Button } from "@nextui-org/react";
import { Session, User } from "next-auth";
import { signOut } from "next-auth/react";
import { FaUser } from "react-icons/fa";

export default function UserArea({ user }: { user: User }) {
    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        src={user.image || ""}
                        name={user.name || ""}
                    />
                </DropdownTrigger>
                <DropdownMenu disabledKeys={["username"]}>
                    <DropdownItem
                        key="username"
                        showDivider
                        startContent={<FaUser />}
                        className="text-center"
                    >
                        {user.name || ""}
                    </DropdownItem>
                    <DropdownItem key="dashboard">Dashboard</DropdownItem>
                    <DropdownItem key="settings" showDivider>
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        key="logout"
                        className="text-danger text-center"
                        color="danger"
                        onClick={async () => {
                            await signOut();
                        }}
                    >
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}
