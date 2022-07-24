import React, { lazy, Suspense } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import LazyLoader from "../components/MasterLayout/LazyLoader";

//Internal Lib Import
import logo from "../assets/images/logo.svg";
const CreatePassword = lazy(() =>
  import("../components/AccountRecovery/CreatePassword"),
);

const CreatePasswordPage = () => {
  return (
    <>
      <title>Create Password Page</title>
      <Suspense fallback={<LazyLoader />}>
        <Navbar className="fixed-top px-0 shadow-sm ">
          <Container fluid={true}>
            <Navbar.Brand>
              <button className="icon-nav m-0 h5 btn btn-link">
                <AiOutlineMenuUnfold />
              </button>
              <Link to="/">
                <img className="nav-logo mx-2" src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <CreatePassword />
      </Suspense>
    </>
  );
};

export default CreatePasswordPage;
