import Layout from "components/layout/index";
import Button from "components/button/index";

import { useState } from "react";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeTweet() {
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    event.preventDefault();
    console.log(message);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="¿Qué esta pasando?"
            value={message}
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Post</Button>
          </div>
        </form>
      </Layout>
      <style jsx>
        {`
          div {
            padding: 15px;
          }

          textarea {
            border: 0;
            font-size: 21px;
            min-height: 200px;
            padding: 15px;
            outline: 0;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
