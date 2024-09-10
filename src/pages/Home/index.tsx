import ChartDonut from "../../components/ChartDonut/ChartDonut";

const Dashboard: React.FC = () => {
  const seriesData = [44, 55, 41, 17, 15];
  const labelsData = [
    "Regular Gasoline",
    "Common Diesel Oil",
    "Ethanol",
    "Added Gasoline",
    "S-10 Diesel Oil",
  ];
  const colorsChart = ["#323C46", "#485C70", "#0456A5", "#0F71D0", "#C4E1F8"];

  return (
    <ChartDonut
      labelInside={"Total"}
      totalValue={"$ 1982.92"}
      series={seriesData}
      labels={labelsData}
      colors={colorsChart}
      showPercentages={false}
    />
  );
};

export default Dashboard;
