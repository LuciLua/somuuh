import { ReactNode } from "react";
import UserMenu from "../../components/UserMenu/UserMenu";
import { Namepage, Stories } from "../../components/StoriesAndNamepage/StoriesAndNamepage";

export default function layout_other_pages({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="relative z-60 w-full">
                <div className="lg:hidden flex fixed top-0 w-full z-[50] ">
                    <UserMenu />
                </div>
                <div className="absolute w-full lg:relative pt-[50px] lg:pt-0">
                    <Namepage />
                    <div className="hidden">
                        <Stories />
                    </div>
                </div>
            </div>
            <div className="pt-[100px] lg:pt-0 overflow-y-scroll h-full">
            {children}
            </div>
        </>
    )
}