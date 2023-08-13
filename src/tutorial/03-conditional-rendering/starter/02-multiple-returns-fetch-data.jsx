import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error</h2>;
  }

  const { avatar_url, company, name, bio } = user;

  return (
    <section>
      <h2>Fetch Data </h2>
      <img style={{ width: "150px" }} src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <h4>Works At: {company}</h4>
      <p>{bio}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
