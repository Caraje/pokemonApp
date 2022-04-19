import Head from "next/head"
import { Navbar } from "../ui"


export const Layout = ({ children, title }) => {

    const origin = (typeof window === 'undefined') ? '' : window.location.origin

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Carlos Ajenjo" />
                <meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
                <meta name="keywords" content={`${ title } , pokemon, pokedex`} />
                <meta property="og:title" content={`Informacion sobre el pokemon ${ title }`} />
                <meta property="og:description" content={`pagina con informacion de ${ title }`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
