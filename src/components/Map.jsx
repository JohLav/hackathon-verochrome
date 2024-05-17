import { useEffect, useRef } from "react";

export default function Map() {
  const ref = useRef(null);

  const url =
    "https://public.tableau.com/views/hackathon4_17159405552530/Tableaudebord1?:language=fr-FR&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

  useEffect(() => {
    const { tableau } = window;

    const options = {
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
      <div className="tableau" ref={ref}></div>
    </>
  );
}
