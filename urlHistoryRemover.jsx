import { useNavigate } from "react-router";
import "./App.css";
import NewPage from "./components/newPage";
import { useEffect } from "react";

const cardData = [
  {
    src: "https://i.imgur.com/SPKThVI.png",
    title: "For Users",
  },
  {
    src: "https://i.imgur.com/74tt6rm.png",
    title: "For Psychologists",
  },
];

function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, [path]);

  if (path === "/newPage") {
    return <NewPage />;
  } else {
    return (
      <section className="w-10/12 flex justify-between items-center m-auto">
        <div className="">
          <div className="flex">
            <img
              src="https://i.imgur.com/eHpgICL.png"
              alt=""
              className="w-12"
            />
            <div>
              <h1 className="font-bold">Disha kiran</h1>
              <p className="">Build your own life</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h2 className="">Get started</h2>
              <p className=""> Choose your path to begin your tests</p>
            </div>
          </div>
          <div className="mt-20 mr-20">
            {cardData.map((card) => (
              <div
                onClick={() => {
                  navigate("/newPage", {
                    replace: true,
                  });
                }}
                className="hover:cursor-pointer mb-6"
              >
                <img src={card.src} alt="" />
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="">
            <h1>Discover your true self</h1>
            <p>
              Comprehensive Psychometric Tests for Every Aspect of Your
              Well-being
            </p>
          </div>
          <img src="https://i.imgur.com/zj4hb5z.png" alt="" />
        </div>
      </section>
    );
  }
}

export default App;
