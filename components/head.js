import Head from 'next/head';

export default () => (
    <head>
        <Head>
            <title>Love Me</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
            <meta name="theme-color"
                content="#000000"
                key="theme-color"
                />
        </Head>
        <style global jsx>{`
            body {
                background: black;
                color: white;
                text-align: center;
                padding: 8px;
            }
            @media (max-width: 500px) {
                body {
                    padding: 0px;
                }
            }
        `}</style>
    </head>
);