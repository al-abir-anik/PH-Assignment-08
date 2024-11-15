import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();

  return (
    <main className="bg-[#f6f6f6]">
      <div className="w-full h-fit pt-6 pb-10 bg-[#9538e2] text-center space-y-4">
        <h2 className="font-bold text-3xl text-white">Statistics</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-5/6 mx-auto my-10">
        <h3 className=" font-bold text-2xl text-[#0b0b0b]">Statistics</h3>
        <div className="w-full my-10 pb-10 flex justify-center">
          <BarChart
            width={1000}
            height={400}
            data={data}
            className="bg-white rounded-2xl"
          >
            <XAxis dataKey="product_title" stroke="#8884d8" />
            <YAxis />
            <Tooltip
              wrapperStyle={{ width: "auto", backgroundColor: "#9538e2" }}
            />
            <Legend
              width={100}
              wrapperStyle={{
                top: 40,
                right: 20,
                backgroundColor: "#f5f5f5",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <CartesianGrid stroke="#9538e2/" strokeDasharray="5 5" />
            <Bar dataKey="price" fill="#9538e2" barSize={30} />
          </BarChart>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
