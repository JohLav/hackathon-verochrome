import { useEffect, useRef } from "react";

export default function Map() {
  const ref = useRef(null);

  const url =
    "https://public.tableau.com/views/hackathon2_17159384045180/Tableaudebord1?:language=fr-FR&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

  useEffect(() => {
    const { tableau } = window;

    const options = {
      width: "100%",
      height: "600px",
      hideTabs: true,
      onFirstInteractive: function () {
        console.log("Tableau Viz has finished loading");
      },
    };

    let viz;
    if (ref.current && tableau) {
      viz = new tableau.Viz(ref.current, url, options);
    }

    return () => {
      if (viz) viz.dispose();
    };
  }, [url]);

  return (
    <>
      <div ref={ref}></div>
    </>
  );
}
