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
                    <div id="modal"></div>
                    <Main />
                    <script src={process.env.APP_CONTAINER} />
                    <script src={process.env.APP_CURRENCY} />
                    <script src={process.env.APP_GAME} />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;