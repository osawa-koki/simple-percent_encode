import React from "react";

import Layout from "../components/Layout";

const base64_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split('');

export default function AbutPage() {
  return (
    <Layout>
      <div id="About">
        <h1>What is BASE64?</h1>
        <p className="mt-3">BASE64とはバイナリデータ(テキストデータを含むすべてのデータ)を一定の規則で、以下の64種の半角英数字と一部記号に変換した表記のことを言います。</p>
        <div id="Base64Letters">
          {
            base64_letters.map((letter, _) => {
              return (
                <div key={letter}>{letter}</div>
              );
            })
          }
        </div>
        <p className="mt-3">これによって画像や動画などのデータを文字列として扱うことができるようになります。<br /><br />しかしながら、バイナリを文字に変換するため、データ量が大きくなるという問題があります。<br />データ量はおおよそ、1.3倍になります。</p>
      </div>
    </Layout>
  );
};
