import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Headline(props) {
    console.log(props)

    return (
        <React.Fragment>
            <div className={styles.description}>
                <h1 className={styles.title}>{props.page} page</h1>

                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>pages/{props.page}.js</code>
                </p>

                <div>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    By{' '}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            </div>
        </React.Fragment>
    )
}
