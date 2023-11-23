import { Metadata } from "next"
import { Namepage, Stories } from "../components/StoriesAndNamepage/StoriesAndNamepage"
import ContentsTest from "../components/ContentsTest"
import UserMenu from "../components/UserMenu/UserMenu"

export const metadata: Metadata = { title: "Home | Social Music" }

export default function homepage() {
    return (
        <div className="flex flex-col relative h-[calc(100dvh-80px)] overflow-y-scroll lg:overflow-y-hidden top-0  w-full">

            <div className="relative z-10 w-full ">
                <div className="lg:hidden flex fixed top-0 z-20 w-full ">
                    <UserMenu />
                </div>
                <div className="absolute w-full lg:relative mt-[50px] lg:mt-0">
                    <Namepage />
                    <Stories />
                </div>
            </div>

            <div className="justify-center items-center flex flex-col bg-zinc-900 w-full gap-3 relative lg:overflow-scroll lg:pt-0 pt-[200px] lg:min-h-fit h-fit">
                <ContentsTest />
            </div>
        </div>
    )
}