import { useEffect, useRef } from "react";

export default function Map() {
  const vizRef = useRef(null);

  useEffect(() => {
    const { tableau } = window;
    const vizUrl =
      "https://public.tableau.com/shared/NP6DDSP7G?:display_count=n&:origin=viz_share_link";

    const options = {
      width: "100%",
      height: "600px",
      hideTabs: true,
      onFirstInteractive: function () {
        console.log("Tableau Viz has finished loading");
      },
    };

    let viz = new tableau.Viz(vizRef.current, vizUrl, options);
    return () => {
      if (viz) viz.dispose();
    };
  }, []);

  return <></>;
}
