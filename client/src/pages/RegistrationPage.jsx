import React, { Suspense, lazy, Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import LazyLoader from "../components/MasterLayout/LazyLoader";

//Internal Lib Import
import logo from "../assets/images/logo.svg";

const RegistrationUser = lazy(() =>
  import("../components/RegistrationUser/RegistrationUser"),
);

const RegistrationPage = () => {
  return (
    <>
      <title>Registration Page</title>
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
        <RegistrationUser />
      </Suspense>
    </>
  );
};

export default RegistrationPage;
