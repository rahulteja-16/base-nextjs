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
                    <script src="http://localhost:3001/appcontainer.js" />
                    <script src="http://localhost:3003/currency.js" />
                    <script src="http://localhost:3004/game.js" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;