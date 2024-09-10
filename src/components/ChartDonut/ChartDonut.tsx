import { useTheme } from "@mui/material";
import ApexCharts from "apexcharts";
import React, { useEffect } from "react";

export interface ChartDonutProps {
  series: number[];
  labels: string[];
  colors?: string[];
  legendPosition?: "top" | "right" | "bottom" | "left";
  showPercentages?: boolean;
  totalValue?: string;
  labelInside?: string;
}

const ChartDonut: React.FC<ChartDonutProps> = ({
  series,
  labels,
  colors = [],
  legendPosition = "bottom",
  labelInside,
  showPercentages = true,
  totalValue,
}) => {
  const theme = useTheme();

  useEffect(() => {
    const options = {
      series: series,
      chart: {
        type: "donut",
        width: "100%",
        maxWidth: "450px",
        height: 350,
        horizontalAlignment: "center",
      },
      labels: labels,
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: totalValue,
                fontSize: "1rem",
                fontFamily: "Arial, sans-serif",
                fontWeight: 600,
                color: "black",
                formatter: () => {
                  return labelInside;
                },
              },
              value: {
                fontSize: "0.9rem",
              },
            },
          },
        },
      },

      colors: colors,
      legend: {
        position: legendPosition,
        horizontalAlign: "left",
        width: "100%",
        color: "gray",
      },
      dataLabels: {
        enabled: showPercentages,
      },

      responsive: [
        {
          breakpoint: 800,
          options: {
            chart: {
              width: "100%",
              height: 400,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    total: {
                      fontSize: "0.9rem",
                    },
                    name: {
                      fontSize: "0.8rem",
                    },
                    value: {
                      fontSize: "0.8rem",
                    },
                  },
                },
              },
            },
            legend: {
              position: legendPosition,
              width: "100%",
              horizontalAlign: "center",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart")!, options);
    chart.render();

    // NOTE: Clean up on unmount
    return () => {
      chart.destroy();
    };
  }, [series, labels, colors, legendPosition, showPercentages]);
  return <div id="chart" />;
};

export default ChartDonut;
