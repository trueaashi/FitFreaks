// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <section className="hero bg-secondary text-white py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="title">
//               <h1 className="mb-4">LET'S GET MOVING</h1>
//             </div>
//             <div className="sub-title mb-4">
//               <p>Your Journey to Fitness Starts Here</p>
//               <p>Unleash Your Potential</p>
//             </div>
//             <div className="buttons">
//               <Link to="/workouts" className="btn btn-primary mx-2 mr-3">
//                 Start Your Journey
//               </Link>
//               <Link to="/pricing" className="btn btn-outline-light mx-2">
//                 Discover Your Plan
//               </Link>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <img
//               src="/img3.jpg"
//               alt="Description of the image"
//               className="img-fluid"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero bg-secondary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title">
              <h1 className="mb-4">LET'S GET MOVING</h1>
            </div>
            <div className="sub-title mb-4">
              <p>Your Journey to Fitness Starts Here</p>
              <p>Unleash Your Potential</p>
            </div>
            <div className="buttons mb-4">
              <Link to="/workouts" className="btn btn-primary mx-2 mr-3">
                Start Your Journey
              </Link>
              <Link to="/pricing" className="btn btn-outline-light mx-2">
                Discover Your Plan
              </Link>
            </div>
            <div className="extra-content">
              <p>
                Join our community of fitness enthusiasts and take the first
                step towards a healthier, stronger you. With tailored workout
                plans, expert trainers, and a supportive environment, we're here
                to help you achieve your goals.
              </p>
              <p>
                Whether you want to lose weight, build muscle, or just improve
                your overall fitness, we have the resources and support you
                need. Explore our various workout sessions and pricing plans to
                find what suits you best.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/img3.jpg"
              alt="Fitness journey"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="card bg-dark text-white mb-3">
              <div className="card-body">
                <h4 className="card-title">Personal Training</h4>
                <p className="card-text">
                  Get one-on-one training sessions with our certified trainers
                  to achieve personalized fitness goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-dark text-white mb-3">
              <div className="card-body">
                <h4 className="card-title">Group Classes</h4>
                <p className="card-text">
                  Join our group classes to stay motivated and have fun while
                  working out with others.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-dark text-white mb-3">
              <div className="card-body">
                <h4 className="card-title">Nutritional Guidance</h4>
                <p className="card-text">
                  Get expert advice on nutrition to complement your fitness
                  routine and achieve your health goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
