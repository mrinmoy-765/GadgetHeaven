import { useState } from "react";

const Dashboard = () => {
  const [visibleDiv, setVisibleDiv] = useState(null); // Track which div to show

  return (
    <div>
      <div className="text-center bg-purple-500 pt-7 pb-10">
        <h1 className="text-3xl font-extrabold text-white">Dashboard</h1>
        <p className="text-white font-base mt-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setVisibleDiv("div1")}
          >
            Show Div 1
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => setVisibleDiv("div2")}
          >
            Show Div 2
          </button>
        </div>
      </div>
      {/* Conditional Rendering of Divs */}
      {visibleDiv === "div1" && (
        <div className="p-4 bg-blue-200 rounded-lg shadow-md">
          <p>This is **Div 1** content!</p>
        </div>
      )}

      {visibleDiv === "div2" && (
        <div className="p-4 bg-green-200 rounded-lg shadow-md">
          <p>This is **Div 2** content!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
