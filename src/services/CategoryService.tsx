import { prisma } from "../prisma";

export class CategoryService {
    static async getCategories() {
        const categories = await prisma.category.findMany({
            include: {
                Subcategory: {
                    include: {
                        threads: {
                            include: {
                                author: true,
                            },
                        },
                    },
                },
            },
        });
        return categories;
    }
}
