import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ProductChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging: Check JSON structure
        const formattedData = data.map((product, index) => ({
          id: index + 1, // Ensure unique key
          name: product.product_title || `Product ${index + 1}`, // Use correct key
          price: product.price || 0, // Default price if missing
        }));

        console.log("Formatted Data:", formattedData); // Debugging
        setChartData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center my-7">
      {chartData.length > 0 ? (
        <LineChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 20, bottom: 50, left: 0 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default ProductChart;
