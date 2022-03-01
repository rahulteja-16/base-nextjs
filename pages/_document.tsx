/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <script src="http://localhost:3000/appcontainer.js" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;