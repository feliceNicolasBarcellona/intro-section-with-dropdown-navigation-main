import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>The Home Page</h1>
      <Outlet />
    </section>
  );
};

export default Home;
