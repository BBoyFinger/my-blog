// import { db } from "@/lib/db";
// import { NextApiRequest, NextApiResponse } from "next";
// import { Prisma } from "@prisma/client";

// export default async function handler({
//   req,
//   res,
// }: {
//   req: NextApiRequest;
//   res: NextApiResponse;
// }) {
//   const { name, description } = req.body;

//   try {
//     const category = await db.category.create({
//       data: {
//         name,
//         description,
//       },
//     });
//     res.status(200).json({
//       message: "Create category successfully!",
//       category: category,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
