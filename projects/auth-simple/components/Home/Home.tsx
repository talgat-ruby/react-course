import { useEffect, useState } from "react";

const Home = () => {
  const [me, setMe] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await fetch("api/me", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          await Promise.reject(new Error(response.statusText));
        }

        const json = await response.json();

        setMe(json?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMe();
  }, [setMe]);

  return (
    <div>
      <h1>Home</h1>
      <h2>{me?.email}</h2>
    </div>
  );
};

export default Home;
