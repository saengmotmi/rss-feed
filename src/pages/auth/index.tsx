import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { login } from "services/auth";

const Auth: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.query.code) return;

    (async () => {
      setLoading(false);
      const { data } = await login({ code: String(router.query.code) });
      localStorage.setItem("token", data.access_token);
      router.push("/rss");
    })();
  }, [router]);

  return <>{loading ? "loading" : "resolved"}</>;
};

export default Auth;
