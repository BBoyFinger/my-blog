import React from "react";
import { useRouter } from "next/router";

type Props = {};

const CategoryDetail = (props: Props) => {
  const router = useRouter();
  console.log(router);
  return <div>CategoryDetail</div>;
};

export default CategoryDetail;
