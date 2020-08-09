import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
