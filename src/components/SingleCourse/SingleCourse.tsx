import Button from "@mui/material/Button";

export default function SingleCourse({UserIcon, ProductIcon}: {UserIcon: string, ProductIcon: React.ReactNode}) {
    return (
        <div className="gap-4 gap-y-12 rounded-[20px]">
            <div
              className="flex flex-col justify-around items-center max-w-sm text-pretty rounded-3xl border-2 border-[#334155] p-[20px]"
              style={{ boxShadow: "3px 3px 25px rgba(255, 255, 255, 0.2)" }}
            >
              <div className="rounded-full overflow-hidden m-2">
                <img
                  width={120}
                  height={120}
                  src={UserIcon}
                  alt="Learn Icon"
                ></img>
              </div>
              <h1 className="text-[30px]">Course Title</h1>
              <p className="text-[15px] max-w-sm line-clamp-5">
                This is just a start of a very long paragraph just to test if it
                is going to work just like I want it to. Something of this sort
                is to be implemented. Gibberish starts from this to this. And
                Goes on and goes on and on. It continutes till the entire screen
                is clogged with content and tries to fit in as much as it can
                and still cannot be filled in its entirety.
              </p>
              <div className="border-[1px] border-solid border-[#334155] w-full"></div>
              <div className="flex justify-between p-[15px] w-full">
                <div className="flex text-[30px]">
                  <h1>₹</h1>500/-
                </div>
                <Button
                  color="primary"
                  sx={{ borderColor: "#334155", backgroundColor: "#334155" }}
                >
                  {ProductIcon}
                </Button>
              </div>
            </div>
          </div>
    )
}



