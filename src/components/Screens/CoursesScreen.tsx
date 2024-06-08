import { DefaultLayout } from "../DefaultLayout";
import UserIcon from "../../assets/avatar.svg";
import { ProductIcon } from "../Icons/products";
import { useEffect } from "react";
import SingleCourse from "../SingleCourse/SingleCourse";

export function CoursesScreen() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    document.title = "Courses";
  })

  return (
    <DefaultLayout>
      <div className="flex font-bold text-3xl p-[10px]">Courses</div>
      <div className="m-[15px] grid grid-cols-4 gap-3 max-sm:grid-cols-1 max-lg:grid-cols-2 max-h-full rounded-[20px] overflow-y-auto h-[780px] p-5 cursor-pointer">
        {array.map((_, index) => (
          <SingleCourse UserIcon={UserIcon} ProductIcon={<ProductIcon />} key={index} />
        ))}
      </div>
    </DefaultLayout>
  );
}
