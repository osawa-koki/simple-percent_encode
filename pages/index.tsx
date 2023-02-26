import Link from "next/link";
import Layout from "../components/Layout";
import setting from "../setting";

export default function Home() {
  return (
    <Layout menu={false} footer={false}>
      <div id='Index'>
        <h1 className="mt-5">simple-base64💓</h1>
        <img id='Logo' src={`${setting.basePath}/tako.png`} alt="Logo" className="mt-3" />
        <p className="mt-5">BASE64エンコード・デコードするサイトです。</p>
        <div id="IndexLink" className="mt-5">
          <Link href={`/encoder/`} className="EncoderLink btn btn-outline-primary">
            <div>BASE64エンコード</div>
          </Link>
          <Link href={`/decoder/`} className="DecoderLink btn btn-outline-success">
            <div>BASE64デコード</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
