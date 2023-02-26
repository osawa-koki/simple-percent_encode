import Link from "next/link";
import Layout from "../components/Layout";
import setting from "../setting";

export default function Home() {
  return (
    <Layout menu={false} footer={false}>
      <div id='Index'>
        <h1 className="mt-5">simple-percent_encode💓</h1>
        <img id='Logo' src={`${setting.basePath}/tako.png`} alt="Logo" className="mt-3" />
        <p className="mt-5">パーセント(URL)エンコード・デコードするサイトです。</p>
        <div id="IndexLink" className="mt-5">
          <Link href={`/encoder/`} className="EncoderLink btn btn-outline-primary">
            <div>パーセント(URL)エンコード</div>
          </Link>
          <Link href={`/decoder/`} className="DecoderLink btn btn-outline-success">
            <div>パーセント(URL)デコード</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
