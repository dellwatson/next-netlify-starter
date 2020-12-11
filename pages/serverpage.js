import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react'
import useSWR from 'swr'



export default function Home(props) {
    console.log(props, 'props')

    // const { data, error } = useSWR('https://nextar.flip.id/frontend-test', fetch)
    // console.log(data, 'data')
    // console.log(error, 'error')

    React.useEffect(() => {
        // fetch('https://nextar.flip.id/frontend-test')
        //   .then(res => {
        //     console.log(res, 'res')
        //     res.json()
        //   })
        //   .then(res => {
        //     console.log(res)
        //   })
        //   .catch(e => console.log(e))
        console.log('res')

    }, [])



    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
            </main>

            <Footer />
        </div>
    )
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://nextar.flip.id/frontend-test`)
//   const data = await res.json()
//   console.log('static props yolo')

//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {
//       datas: data
//     }, // will be passed to the page component as props
//   }
// }
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://nextar.flip.id/frontend-test`)
    const data = await res.json()
    console.log('static props yolo')

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            datax: data
        }, // will be passed to the page component as props
    }
}
