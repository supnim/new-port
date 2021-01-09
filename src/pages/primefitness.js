import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../../src/utils/css/project.scss";
import TitleP from "../components/TitleP";
import Brief from "../components/brief";
import VideoBox from "../components/videoBox";

import PrimeFitnessImg from "../../content/assets/heros/Primefitness_hero.svg";
import app from "../components/gifs/primefitness/app.gif";
import watch from "../components/gifs/primefitness/watch.gif";
import pantry from "../components/gifs/primefitness/pantry.gif";

function PrimeFitness() {
  const briefStyle = {
    margin: "4rem auto",
    color: "black",
    backgroundColor: "white",
    border: "2px black solid",
    padding: "4rem"
  };
  const Goals = ({ rank, title, sub }) => {
    return (
      <div className="col-4" style={{ textAlign: "center", padding: "1rem" }}>
        <b>{rank}</b>
        <h6 style={{ color: "#91a709", padding: "0px" }}>{title}</h6>
        <p style={{ color: "grey" }}>{sub}</p>
      </div>
    );
  };
  const Info = ({ title, paragraph }) => {
    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <h6 style={{ padding: "0px" }}>{title}</h6>
        <p style={{ color: "grey" }}>{paragraph}</p>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <SEO
          title="primefitness"
          keywords={[`prime`, `amazon`, `fitness`, `pantry`, `app`, `wearable`]}
        />
        <PrimeFitnessImg width="100%" height="auto" />
        <div style={{ margin: "0 2rem" }}>
          <Brief
            style={briefStyle}
            title="Insight"
            paragraph="People are more aware of what they consume, and are consciously taking action to change their lifestyle. With that said, these are the problems I've identified and solved through this idea."
            one="Want to exercise and stay health"
            two="Don't know what to eat"
            three="Maximise produce and reduce waste"
            postscript={
              <p>
                In addition it was important to me to make it as convenient as
                possible and have it working holistically within the amazon
                eco-system.{" "}
                <a href="https://drive.google.com/file/d/1KmgRvISb8zxt50Cd9PnixGqEebb43Ibh/view">
                  <b>paper process</b>
                </a>
              </p>
            }
          />
        </div>
        <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <section
            className="row"
            style={{ padding: "4rem", backgroundColor: "whitesmoke" }}
          >
            <Goals
              rank="1st"
              title="Choose a goal"
              sub="from: losing weight to gaining muscle or getting lean"
            />
            <Goals
              rank="2nd"
              title="Workout & meal planning"
              sub="exercise and meals are planned for you according to intensity-frequency 
            of workouts you choose"
            />
            <Goals
              rank="3rd"
              title="Track & record"
              sub="use the ‘connect’ and the app to record calories consumed and burned"
            />
          </section>

          <section className="row" style={{ marginTop: "4rem" }}>
            <div
              style={{ textAlign: "center", margin: "auto", padding: "5rem" }}
            >
              <TitleP
                title="Connect"
                paragraph="a smart watch that tracks intake and expenditure of calories; syncing it back to your goal 
eco-system."
              />
            </div>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <Info
                title="Amazon pay"
                paragraph="food bought using it automatically
                updated on your food log"
              />
              <Info
                title="Alexa"
                paragraph="simply tell it what you’re eating
                to update log"
              />
              <Info
                title="Route planner"
                paragraph="using amazon deliver logistics; running/cycling route can be plotted to users needs"
              />
            </div>
            <div className="col-4">
              <img src={watch} alt="connect watch" />
            </div>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <Info
                title="heart-rate (HR) to bpm"
                paragraph="will play music to complement 
                the hr"
              />
              <Info
                title="Logs"
                paragraph="food, drink, exercise & sleep records"
              />
              <Info
                title="Track & record"
                paragraph="pedometer + accelerometer
                heart + temperature sensor
                bluetooth/gps/gprs/nfc
                wireless charging"
              />
            </div>
          </section>
          <section className="row" style={{ marginTop: "4rem" }}>
            <div
              style={{ textAlign: "center", margin: "auto", padding: "5rem" }}
            >
              <TitleP
                title="PrimeFitness App"
                paragraph="The portable hub of the operation; at quick glance you see current status and next steps. Users can add meals and workouts into the system via the app."
              />
            </div>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <Info
                title="Image recognition"
                paragraph="technology is used to log meals 
                [similar to finding product 
                using the camera on the
                amazon shopping app]"
              />
            </div>
            <div className="col-4">
              <img src={app} alt="connect watch" />
            </div>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <Info
                title="Planning route"
                paragraph="Using amazon logistics, running/cycling routes can be plotted to users needs. e.g. ”Alexa, I want to cycle 20 miles, avoiding busy roads"
              />
            </div>
          </section>
          <section className="row" style={{ marginTop: "4rem" }}>
            <div
              style={{ textAlign: "center", margin: "auto", padding: "5rem" }}
            >
              <TitleP
                title="Virtual pantry"
                paragraph="Meal prep station; here you see all the food you have in your house virtually represented along with suggested recipes on the right - which is curated taking into consideration the ingredients you already have and the expiration date to maximise produce and reduce waste."
              />
            </div>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <Info
                title="Recipe recommendations"
                paragraph="Ingredients data used to complete recipes that 
                we think you’d like."
              />
            </div>
            <div className="col-4">
              <img src={pantry} alt="connect watch" />
            </div>
            <div className="col-4" style={{ alignSelf: "center" }}>
              <Info
                title="Product suggestions"
                paragraph="Current items data used to shows similar product"
              />
            </div>
          </section>
          <section className="row full">
            <div
              className="col-12"
              style={{
                alignItems: "center",
                textAlign: "center",
                padding: "0 4rem",
                width: "90%"
              }}
            >
              <h4>Demo</h4>
              <p>How the virtual pantry works</p>
              <VideoBox
                url="https://player.vimeo.com/video/226803084"
                description=""
              />
            </div>
          </section>
          <div
            style={{
              backgroundColor: "#F2F3F4",
              borderRadius: "8px",
              padding: "32px 80px 80px 80px",
              margin: "16px",
              border: "1px solid lightgrey",
              fontSize: "24px"
            }}
            className="row full"
          >
            <h4>Prototype</h4>
            <p>
              Since the conception of this idea in 2017, I've started learning
              coding and currently know enough to slowly realise the idea. V0.1
              looks like{" "}
              <a href="https://lovfq.csb.app">
                <u>this</u>:
              </a>
              <br />
            </p>
            <iframe
              src="https://codesandbox.io/embed/recipe-app-lovfq?fontsize=14&hidenavigation=1&theme=dark&view=preview"
              style={{
                width: "100%",
                height: "500px",
                border: "0",
                borderRadius: "4px",
                overflow: "hidden"
              }}
              title="Recipe App"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default PrimeFitness;
