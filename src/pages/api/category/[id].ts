import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const { id } = req.query;
  if (req.method === "PUT") {
    const { name, description } = req.body;
    try {
      const category = await prisma.category.update({
        where: {
          id,
        },
        data: {
          name,
          description,
        },
      });
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "DELETE") {
    try {
      const category = await prisma.category.delete({
        where: {
          id: parseInt(id),
        },
      });
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "GET") {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id,
        },
      });
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
