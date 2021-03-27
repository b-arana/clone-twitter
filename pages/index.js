import { useEffect } from "react";
import styles from "styles/Home.module.css";
import Layout from "components/layout/index";
import Button from "components/button/index";
import GitHub from "components/icons/index";
import { colors } from "styles/theme";

import { loginWithGitHub } from "firebase/client";
import useUser, { USER_STATES } from "hooks/useUser";
import { useRouter } from "next/router";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Layout className={styles.main}>
        <section>
          <img src="/vercel.svg" alt="Logo" />
          <h1>Title</h1>
          <h2>Talk about front-end</h2>

          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.NOT_KNOWN && <div>Loading...</div>}
          </div>
        </section>
      </Layout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
