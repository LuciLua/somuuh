import { Metadata } from "next"
import { Namepage, Stories } from "../components/StoriesAndNamepage/StoriesAndNamepage"
import ContentsTest from "../components/ContentsTest"
import UserMenu from "../components/UserMenu/UserMenu"
import Image from "next/image"
import Post from "../components/Post/Post"

export const metadata: Metadata = { title: "Home | Social Music" }

export default function homepage() {

    return (
        <div className="flex flex-col relative lg:h-[calc(100dvh-80px)] min-h-[calc(100dvh-80px)] h-[calc(100%-80px)] overflow-y-scroll lg:overflow-y-hidden top-0  w-full">

            <div className="relative z-10 w-full ">
                <div className="lg:hidden flex fixed top-0 z-20 w-full ">
                    <UserMenu />
                </div>
                <Namepage />
                <div className="relative w-full lg:relative mt-[0px] lg:mt-0">
                    <Stories />
                </div>
            </div>

            <div className="justify-center items-center flex flex-col bg-zinc-900 w-full relative lg:overflow-scroll lg:pt-0 lg:min-h-fit h-fit pt-0">
                {/* <ContentsTest /> */}
                <div className="w-full bg-zinc-900 min-h-[250px] h-full flex flex-col border-t-[1px] border-zinc-700">
                    <Post
                        img="/a.jpg" username="lucilua"
                        title="Apreciando a tranquilidade"
                        content="A contemplação da paz interior é algo que sempre me atrai. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quero"
                        likesNum={4}
                        commentsNum={1}
                    />
                    <Post
                        img="/b.jpg" username="Yaaaag"
                        title="Reflexões sobre a jornada"
                        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo esse quos fuga quidem quibusdam. Doloribus provident quis iusto utLorem ipsum dolor sit amet consectetur, adipisicing elit."
                        likesNum={10}
                        commentsNum={4}
                    />
                    <Post
                        img="/f.jpg" username="jojo_oliveira"
                        title="A beleza nas pequenas coisas"
                        content="Descobrindo a beleza em cada detalhe da vida!!!"
                        likesNum={302}
                        commentsNum={102}
                    />
                    <Post
                        img="/c.jpg" username="camelo_melo"
                        title="Conectando-me com a música da alma"
                        content="Explorando a essência da vida através da melodia. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        likesNum={33}
                        commentsNum={9}
                    />
                    <Post
                        img="/d.jpg" username="row_vitoria2"
                        title="Divagando sobre o acaso"
                        content="Reflexões aleatórias sobre a vida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quero"
                        likesNum={0}
                        commentsNum={0}
                    />
                    <Post
                        img="/e.jpg" username="pop_ariana2001"
                        title="Desafio musical: quem conhece essa?"
                        content="Desafiando vocês a cantar essa música comigo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quero Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo esse quos fuga quidem quibusdam. Doloribus provident quis iusto "
                        likesNum={4}
                        commentsNum={0}
                    />
                    <Post
                        img="/g.jpg" username="pop_ariana2001"
                        title="Vamos cantar juntos?"
                        content="Quem mais se arrisca a cantar essa música comigo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quero Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo esse quos fuga quidem quibusdam. Doloribus provident quis iusto "
                        likesNum={39}
                        commentsNum={20}
                    />
                    <Post
                        img="/a.jpg" username="lucilua"
                        title="Desafio musical para os corajosos"
                        content="Desafio vocês a soltarem a voz nessa música! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quero Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo esse quos fuga quidem quibusdam. Doloribus provident quis iusto "
                        likesNum={22}
                        commentsNum={7}
                    />
                </div>
            </div>
        </div>
    )
}