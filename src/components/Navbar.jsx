import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/apply";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const [formData, setFormData] = useState({
    idCard: "",
    password: "",
  });

  const toggleNavbar = () => {
    console.log("its on clicking");
    setShowNavbar(!showNavbar);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userCookie = Cookies.get("token");
    if (userCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const { idCard, password } = formData;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ formData, navigate }));
  };

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="mx-auto bg-gray-100 p-4 w-full h-full">
        <nav className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="" className="w-30 h-16" />
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <IoMdMenu size={30} />
            </button>
          </div>

          <div
            className={`${
              showNavbar ? "flex flex-col" : "hidden"
            } md:flex md:items-center md:w-auto`}
          >
            <ul className="md:flex space-x-8 pr-8 text-[18px]">
              <li>
                <Link to="/">
                  <div className="relative group inline-block">
                    Home
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div className=" bg-white  border-gray-300 border-2 border-solid w-[130px] p-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <Link to="/">OHE </Link>
                          <br />

                          <Link to="/">News</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <a href="#">
                  <div className="relative group inline-block">
                    Services
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div className=" bg-white  border-gray-300 border-2 border-solid w-[190px] p-4">
                        <div>
                          <Link to="/study">Study in China</Link>
                          <br />

                          <Link to="/teaching">Teaching Chinses</Link>
                          <br />

                          <Link to="/bussniess">Bussiness</Link>
                          <br />

                          <a href="#">Tourism</a>
                          <br />

                          <a href="#">Teacher Traning</a>
                          <br />

                          <a href="#">Interpertation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="relative group inline-block">
                    Exams
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div className=" bg-white  border-gray-300 border-2 border-solid w-[130px] p-4">
                        <div>
                          <Link to="/hsk">HSK</Link>
                          <br />

                          <a href="#">HSKK</a>
                          <br />

                          <a href="#">YCT</a>
                          <br />

                          <a href="#">BCT</a>
                          <br />

                          <a href="#">MCT</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="relative group inline-block">
                    Study in China
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div className=" bg-white  border-gray-300 border-2 border-solid w-[130px] p-4">
                        <div>
                          <Link to="/mbbs">MBBS</Link>
                          <br />

                          <a href="#">PHD</a>
                          <br />

                          <a href="#">Master</a>
                          <br />

                          <a href="#">Bachelors</a>
                          <br />

                          <a href="#">Diploma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="relative group inline-block">
                    Others
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div className=" bg-white  border-gray-300 border-2 border-solid w-[330px] p-4">
                        <div>
                          <a href="#">
                            Admission Requirements & Qualifications
                          </a>
                          <br />

                          <a href="#">Chinese Laws & Regulations</a>
                          <br />

                          <a href="#">Sholoership for international studenet</a>
                          <br />

                          <a href="#">Life on camps</a>
                          <br />

                          <a href="#">Discover china</a>
                          <br />

                          <a href="#">About Us</a>
                          <br />

                          <a href="#">FAQ'S</a>
                          <br />

                          <a href="#">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-center justify-center  bg-gray-100">
                  {/* <button onClick={() => setDialogOpen(true)}>Login</button> */}
                  <li>
                    <div className="flex items-center justify-center bg-gray-100">
                      {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                      ) : (
                        <button onClick={() => setDialogOpen(true)}>
                          Login
                        </button>
                      )}
                      {isDialogOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                          <div
                            className="absolute inset-0 bg-gray-900 opacity-75"
                            onClick={() => setDialogOpen(false)}
                          ></div>
                          <div className="bg-white p-8 rounded shadow-md w-[500px] z-10 relative">
                            <h2 className="text-2xl font-semibold mb-4">
                              Candidate Login
                            </h2>
                            <hr />
                            <form onSubmit={handleLogin}>
                              <div className="mt-4">
                                <label
                                  for="username"
                                  className="block text-gray-700 text-[18px] font-semibold mb-2"
                                >
                                  Enter Your Id:
                                </label>
                                <input
                                  type="text"
                                  id="idCard"
                                  name="idCard"
                                  placeholder="Id Card"
                                  value={idCard}
                                  onChange={onChangeHandler}
                                  required
                                  className="w-full border border-gray-400 p-2 rounded"
                                />
                              </div>

                              <div className="mb-4">
                                <label
                                  for="password"
                                  className="block text-gray-700 text-[18px] font-semibold mt-2"
                                >
                                  Enter Password:
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={onChangeHandler}
                                  required
                                  className="w-full border border-gray-400 p-2 rounded"
                                />
                              </div>

                              <div className=" flex justify-end gap-5">
                                <button
                                  onClick={() => setDialogOpen(false)}
                                  type="button"
                                  className=" bg-gray-100 text-black px-7 rounded hover:bg-gray-400"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() => setDialogOpen(true)}
                                  type="submit"
                                  className=" bg-gray-100 border border-gray-500 text-black px-7 py-2 rounded hover:bg-blue-800 hover:text-white"
                                >
                                  Login
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
