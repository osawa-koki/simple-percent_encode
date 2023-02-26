import React from "react";

import Layout from "../components/Layout";

const letters_need_to_percent_encode = ':/?#[]@!$&\'()*+,;=%'.split('');

export default function AbutPage() {
  return (
    <Layout>
      <div id="About">
        <h1>What is Percent(URL) Encode?</h1>
        <p className="mt-3">パーセント(URL)エンコードとは、URLとして使用できない文字を、一定の規則に基づいて`%`を用いた別の文字に変換することを言います。<br /><br />パーセントを用いたエンコード手法であるためパーセントエンコードと呼ばれますが、特にURLで用いられることからURLエンコードとも呼ばれます。<br /><br />具体的には以下の文字をURLに含む場合にパーセントエンコードする必要があります。</p>
        <div id="PercentEncodeLetters">
        {
          letters_need_to_percent_encode.map((letter, _) => {
            return (
              <div key={letter} className="mt-3">{letter}</div>
            );
          })
        }
        </div>
        <p className="mt-3">上記の文字以外でもパーセントエンコードをすることが可能です。</p>
      </div>
    </Layout>
  );
};
