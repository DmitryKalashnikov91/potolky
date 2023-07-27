import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Roboto_Flex } from "next/font/google"
import { Header, navLinks } from "./header/Header"
import { Footer } from "./footer/Footer"

const roboto_fl = Roboto_Flex({weight:['400'], subsets: ['cyrillic']})
export const Layout: FC<PropsWithChildren<navLinks>> = ({ children }): JSX.Element => {
    return (
        <>
            <Head>
                <title>АРТ ПОТОЛКИ | Натяжные потолки и стены</title>
                <meta name="description" content="art-potolky.ru Натяжные потолки, стены, художественное оформление потолков и стен. Индивидуальный подход" ></meta>
            </Head>
            <Header title={""} id={0} path={""} />
            <main className={roboto_fl.className}>
                {children}
            </main>
            <Footer />
        </>
    )
}