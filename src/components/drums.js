import React from "react";
import useSound from "use-sound";
import soundUrl from "../../content/assets/sounds/drums.mp3";
import DrumsSvg from "../../content/assets/play/drums.svg";
// import soundUrl from "../../content/assets/sounds/trap.mp3"

function Drums() {
  const [play] = useSound(soundUrl, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200]
      // kick: [0, 150],
      // hihat: [174, 160],
      // snare: [468, 100],
      // clap: [666, 200],
      // vox: [888, 400],
    }
  });
  const useKeyboardBindings = map => {
    React.useEffect(() => {
      const handlePress = ev => {
        const handler = map[ev.key];

        if (typeof handler === "function") {
          handler();
        }
      };

      window.addEventListener("keydown", handlePress);

      return () => {
        window.removeEventListener("keydown", handlePress);
      };
    }, [map]);
  };
  // Custom hook that listens for 'keydown',
  // and calls the appropriate handler function.
  useKeyboardBindings({
    1: () => play({ id: "kick" }),
    2: () => play({ id: "hihat" }),
    3: () => play({ id: "snare" }),
    4: () => play({ id: "cowbell" })
    // 5: () => play({ id: "vox" }),
  });

  return (
    <section
      style={{
        height: "100vh",
        paddingTop: "8rem",
        textAlign: "center"
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <h4>drum kit</h4>
        <div style={{ filter: "invert(1)" }}>
          <DrumsSvg width="10%" height="auto" />
        </div>
      </div>

      <>
        <button
          className="large primary"
          style={{ margin: "2rem" }}
          aria-label="kick"
          onMouseDown={() => play({ id: "kick" })}
        >
          kick
        </button>
        <button
          className="large primary"
          style={{ margin: "2rem" }}
          aria-label="hihat"
          onMouseDown={() => play({ id: "hihat" })}
        >
          hihat
        </button>
        <button
          className="large primary"
          style={{ margin: "2rem" }}
          aria-label="snare"
          onMouseDown={() => play({ id: "snare" })}
        >
          snare
        </button>
        <button
          className="large primary"
          style={{ margin: "2rem" }}
          aria-label="cowbell"
          onMouseDown={() => play({ id: "cowbell" })}
        >
          rim
        </button>
        {/* <button
          style={{ margin: "2rem" }}
          aria-label="vox"
          onMouseDown={() => play({ id: "vox" })}
        >
          vox
        </button> */}
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            maxWidth: "50%",
            fontSize: "80px",
            margin: "1rem auto",
            borderRadius: ".5rem"
          }}
        >
          <pre style={{ padding: ".5rem" }}>
            <code>
              you can also use 1 — 5 on your keyboard {"\n"} to trigger each
              respective sounds{"\n"}
              have fun :){"\n"}
            </code>
          </pre>
        </div>
      </>
    </section>
  );
}

export default Drums;
