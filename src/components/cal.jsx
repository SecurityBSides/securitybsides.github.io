import React from "react";

const Cal = () => {
   return (
      <iframe
         src="https://www.google.com/calendar/embed?showTitle=0&showTz=0&height=400&wkst=1&bgcolor=%23FFFFFF&src=bsidescalendar%40gmail.com&color=%23060D5E&ctz=America%2FNew_York"
         style={{ "border-width": 0 }}
         width="800"
         height="400"
         frameborder="0"
         scrolling="no"
         data-ruffle-polyfilled=""
         title="BSides Events Calendar"
      />
   );
};

export default Cal;
