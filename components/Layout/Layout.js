import { Fragment } from "react";
import Head from "next/head";

// -------------------------
import Header from "@/components/Layout/Header";

// -------------------------

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>

      </Head>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
}

Layout.defaultProps = {
  title: "زودکس سریع ترین سامانه سفارش آنلاین - زودکس",
};

export default Layout;
