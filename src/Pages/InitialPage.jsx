import { useState, useEffect } from "react";

const InitialPage = () => {
  const [showInitialImage1, setShowInitialImage1] = useState(true);
  const [showInitialImage2, setShowInitialImage2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowInitialImage1(false);
      setShowInitialImage2(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowInitialImage2(false);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      {showInitialImage1 && (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <img
            className="mainIcon_animation"
            style={{
              maxWidth: "70px",
              maxHeight: "70px",
            }}
            src="/Images/LoginPage/homeIcon.png"
            alt="Initial Image 1"
          />
        </div>
      )}
      {showInitialImage2 && (
        <div>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="/Images/LoginPage/mainScreen.png"
            alt="Initial Image 2"
          />
        </div>
      )}
    </div>
  );
};

export default InitialPage;
