"use client";

import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { BsFillThreadsFill } from "react-icons/bs";

export function getLatestThread(threads: any) {
    return threads.reduce((acc: any, thread: any) => {
        if (acc === null) {
            return thread;
        }
        if (thread.createdAt > acc.createdAt) {
            return thread;
        }
        return acc;
    }, null);
}

export default function ForumsHome({ categories }: { categories: any }) {
    return (
        <main className="w-full max-w-[1200px] mx-auto px-6">
            {categories.map((category: any) => (
                <Table
                    key={category.id}
                    className="mt-5 mb-5"
                    aria-label={`${category.name} forum section`}
                    layout="fixed"
                >
                    <TableHeader>
                        <TableColumn className="w-[66%]">
                            {category.name}
                        </TableColumn>
                        <TableColumn className="w-[15%] text-center">
                            Threads
                        </TableColumn>
                        <TableColumn className="w-[19%] text-center">
                            Latest Post
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        {category.Subcategory.map((subcategory: any) => (
                            <TableRow key={subcategory.name || "key"}>
                                <TableCell>
                                    <h2>{subcategory.name}</h2>
                                </TableCell>
                                <TableCell className="text-center">
                                    {subcategory.threads.length}
                                </TableCell>
                                <TableCell className="flex justify-center">
                                    {getLatestThread(subcategory.threads)
                                        ? (
                                            <div className="flex items-center space-x-4 gap-4">
                                                <Avatar
                                                    src={getLatestThread(
                                                        subcategory.threads,
                                                    )?.author.image}
                                                    name={getLatestThread(
                                                        subcategory.threads,
                                                    )?.author.name}
                                                    size="md"
                                                />
                                                <div className="flex flex-col min-w-0">
                                                    <h3 className="text-lg font-semibold truncate">
                                                        {getLatestThread(
                                                            subcategory
                                                                .threads,
                                                        )?.title}
                                                    </h3>
                                                    <div className="flex gap-2 text-sm text-default-500">
                                                        <span>
                                                            {new Date(
                                                                getLatestThread(
                                                                    subcategory
                                                                        .threads,
                                                                )?.createdAt,
                                                            ).toLocaleDateString()}
                                                        </span>
                                                        <span>-</span>
                                                        <span>
                                                            {getLatestThread(
                                                                subcategory
                                                                    .threads,
                                                            )?.author.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div className="flex flex-col min-w-0">
                                                <h3 className="text-lg font-semibold truncate">
                                                    No threads yet
                                                </h3>
                                                <div className="flex gap-2 text-sm text-default-500">
                                                    <span>
                                                        Be the first to post!
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ))}
        </main>
    );
}
