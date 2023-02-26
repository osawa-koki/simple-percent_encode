import React, { useState } from "react";

import { Button, Alert, Form } from 'react-bootstrap';
import Layout from "../components/Layout";
import Setting from "../setting";

export default function DecoderPage() {

  const [text, setText] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const Decode = () => {
    if (text === null) {
      return;
    }
    const decoded = decodeURIComponent(text);
    setResult(decoded);
  };

  const Copy = () => {
    if (result === null) {
      return;
    }
    navigator.clipboard.writeText(result);
    setMessage('コピーしました。');
    setTimeout(() => {
      setMessage(null);
    }, Setting.timeout);
  };

  return (
    <Layout>
      <div id="Decoder">
        <h1>Percent Decoder</h1>
        <p>パーセントエンコードされたデータをデコードします。</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>パーセントエンコードされたデータ</Form.Label>
            <Form.Control as="textarea" rows={7} onInput={(e) => {setResult(null); setMessage(null); setText((e.target as HTMLTextAreaElement).value)}} />
          </Form.Group>
          <Button variant="primary" onClick={Decode}>
            変換
          </Button>
        </Form>
        {
          result !== null && (
            <>
              <hr />
              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>デコードされたデータ</Form.Label>
                  <Form.Control as="textarea" rows={7} value={result} readOnly />
                </Form.Group>
                <Button variant="success" onClick={Copy}>
                  コピー
                </Button>
                {
                  message !== null && (
                    <Alert variant="success" className="mt-3">
                      {message}
                    </Alert>
                  )
                }
              </Form>
            </>
          )
        }
      </div>
    </Layout>
  );
};
