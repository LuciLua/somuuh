import { Metadata } from "next"
import { Namepage, Stories } from "../components/StoriesAndNamepage/StoriesAndNamepage"
import ContentsTest from "../components/ContentsTest"
import UserMenu from "../components/UserMenu/UserMenu"

export const metadata: Metadata = { title: "Social Music | Home", creator: "LuciLua" }

export default function homepage() {
    return (
        <div className="flex flex-col relative h-[calc(100dvh-80px)] w-full">
            <div className="lg:hidden flex">
                <UserMenu />
            </div>
            <Namepage />
            <Stories />
            <div className="justify-center items-center flex flex-col bg-zinc-900 w-full gap-3  pt-3 h-full relative overflow-scroll">
                <ContentsTest />
            </div>
        </div>
    )
}