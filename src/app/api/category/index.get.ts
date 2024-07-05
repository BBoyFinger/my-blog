// import { NextApiRequest, NextApiResponse } from "next";
// import { db } from "@/lib/db";
// import { Prisma } from "@prisma/client";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { skip, pageSize, name } = req.body;

//   const filters: Prisma.CategoryWhereInput = {};

//   if (name && name.trim().length > 0) {
//     filters.name = {
//       contains: name,
//       mode: "insensitive",
//     };
//   }

//   const queryData: Prisma.CategoryFindManyArgs = {
//     where: filters,
//     orderBy: {
//       id: "desc",
//     },
//     skip: skip ? parseInt(skip) : undefined,
//     take: pageSize ? parseInt(pageSize) : undefined,
//   };

//   try {
//     const categoryList = await db.category.findMany(queryData);
//     return res.status(200).json({
//       message: "Get category successfully",
//       data: categoryList,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error fetching categories",
//       error: error,
//     });
//   }
// }
