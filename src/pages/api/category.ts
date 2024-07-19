import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Filters = {
  name?: {
    contains: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      // Get By ID
      try {
        const category = await prisma.category.findUnique({
          where: {
            id: id as string,
          },
        });

        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json(category);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      const { name, pageSize, skip } = req.body;
      const filters: Filters = {};
      console.log(req.method);

      if (name && typeof name === "string" && name.trim().length > 0) {
        filters.name = {
          contains: name,
        };
      }

      try {
        const categories = await prisma.category.findMany({
          where: filters,
          orderBy: {
            id: "desc",
          },
          skip: skip ? parseInt(skip as string) : undefined,
          take: pageSize ? parseInt(pageSize as string) : undefined,
        });
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  } else if (req.method === "POST") {
    const { name, description } = req.body;

    try {
      const category = await prisma.category.create({
        data: {
          name: name,
          description: description,
        },
      });

      if (!category) {
        return res.status(500).json({ message: "Create not successfully" });
      }

      res.status(201).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      const category = await prisma.category.delete({
        where: {
          id: id as string,
        },
      });

      if (!category) {
        return res.status(500).json({ message: "Category not found" });
      }

      res.status(200).json({ message: "Delete category successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
