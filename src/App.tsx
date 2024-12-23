import "./App.css";

import React from "react";
import { Bar, BarConfig } from "@ant-design/plots";
import ReactECharts, { type EChartsOption } from "echarts-for-react";
import { Card } from "antd";

const DemoBar = () => {
  const config: BarConfig = {
    data: [
      {
        count: 23,
        category: "应用",
        type: "结构化数据",
      },
      {
        count: 30,
        category: "应用",
        type: "非结构化数据",
      },
      {
        count: 12,
        category: "数据库",
        type: "mysql",
      },
      {
        count: 22,
        category: "数据库",
        type: "oracle",
      },
      {
        count: 11,
        category: "数据库",
        type: "pgsql",
      },
      {
        count: 10,
        category: "文件",
        type: "文件",
      },
    ],
    width: 400,
    height: 250,
    xField: "category",
    yField: "count",
    colorField: "type",
    legend: false,
    stack: true,
    label: {
      position: "inside",
      formatter: (_, a) => {
        return `${a.type}:${a.count}`;
      },
    },
    // sort: {
    //   reverse: true,
    //   by: "y",
    // },
    // axis: {
    //   y: { labelFormatter: "~s" },
    //   x: {
    //     labelSpacing: 4,
    //     style: {
    //       labelTransform: "rotate(90)",
    //     },
    //   },
    // },
  };
  return <Bar {...config} />;
};

const drsOption: EChartsOption = {
  title: {
    text: "健康度百分比", // 主标题
    subtext: "99%", // 子标题（可选）
    left: "center",
    top: "center",
    textStyle: {
      marginBottom: "5px", // 距离底部距离
      color: "#333", // 字体颜色
      fontSize: 14, // 字体大小
      // fontWeight: "bold",
    },
    subtextStyle: {
      color: "#000", // 子标题颜色
      fontSize: 18, // 子标题大小
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: false,
  series: [
    {
      name: "数据库可疑表",
      type: "pie",
      selectedMode: "single",
      radius: ["40%", "60%"],
      label: false,
      labelLine: {
        show: false,
      },
      data: [
        { value: 148, name: "mysql", itemStyle: { color: "#e69d87" } },
        { value: 75, name: "sql", itemStyle: { color: "#acc2d9" } },
        { value: 69, name: "tdsql", itemStyle: { color: "#806dc8" } },
      ],
    },
    {
      name: "数据库检测表",
      type: "pie",
      radius: ["70%", "90%"],
      labelLine: {
        length: 30,
      },
      label: {
        position: "inner",
      },
      data: [
        { value: 1048, name: "mysql" },
        { value: 335, name: "sql" },
        { value: 310, name: "oracle" },
        { value: 251, name: "tdsql" },
      ],
    },
  ],
};

const frsOption: EChartsOption = {
  title: {
    text: "健康度百分比", // 主标题
    subtext: "95%", // 子标题（可选）
    left: "center",
    top: "center",
    textStyle: {
      marginBottom: "5px", // 距离底部距离
      color: "#333", // 字体颜色
      fontSize: 14, // 字体大小
      // fontWeight: "bold",
    },
    subtextStyle: {
      color: "#000", // 子标题颜色
      fontSize: 18, // 子标题大小
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: false,
  series: [
    {
      name: "可疑文件",
      type: "pie",
      selectedMode: "single",
      radius: ["40%", "60%"],
      label: false,
      labelLine: {
        show: false,
      },
      data: [{ value: 69, name: "本地", itemStyle: { color: "#e69d87" } }],
    },
    {
      name: "文件数",
      type: "pie",
      radius: ["70%", "90%"],
      labelLine: {
        length: 30,
      },
      label: false,
      // label: {
      //   formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
      //   backgroundColor: "#F6F8FC",
      //   borderColor: "#8C8D8E",
      //   borderWidth: 1,
      //   borderRadius: 4,
      //   rich: {
      //     a: {
      //       color: "#6E7079",
      //       lineHeight: 22,
      //       align: "center",
      //     },
      //     hr: {
      //       borderColor: "#8C8D8E",
      //       width: "100%",
      //       borderWidth: 1,
      //       height: 0,
      //     },
      //     b: {
      //       color: "#4C5058",
      //       fontSize: 14,
      //       fontWeight: "bold",
      //       lineHeight: 33,
      //     },
      //     per: {
      //       color: "#fff",
      //       backgroundColor: "#4C5058",
      //       padding: [3, 4],
      //       borderRadius: 4,
      //     },
      //   },
      // },
      data: [{ value: 1048, name: "本地", itemStyle: { color: "#6e9d87" } }],
    },
  ],
};

// const DemoDBRadialBar = () => {
//   const config: RadarConfig = {
//     data: [
//       { name: "高危", star: 2 },
//       { name: "中危", star: 5 },
//       { name: "低危", star: 8 },
//     ],
//     width: 400,
//     height: 250,
//     xField: "name",
//     yField: "star",
//     colorField: "name",
//     maxAngle: 270, //最大旋转角度,
//     radius: 1,
//     innerRadius: 0.4,
//     legend: false,
//     style: {
//       radius: 25, // 圆角
//       fill: ({ name }: { name: string }) => {
//         if (name === "高危") {
//           return "#ff4d4f";
//         } else if (name === "中危") {
//           return "#f5a22c";
//         }
//         return "#87d068";
//       },
//     },
//     tooltip: {
//       items: ["star"],
//     },
//   };
//   return <RadialBar {...config} />;
// };

// const DemoFileRadialBar = () => {
//   const config: RadarConfig = {
//     data: [
//       { name: "高危", star: 2 },
//       { name: "中危", star: 5 },
//       { name: "低危", star: 8 },
//     ],
//     width: 400,
//     height: 250,
//     xField: "name",
//     yField: "star",
//     maxAngle: 270, //最大旋转角度,
//     radius: 1,
//     innerRadius: 0.4,
//     legend: false,
//     style: {
//       radius: 25, // 圆角
//       fill: ({ name }: { name: string }) => {
//         if (name === "高危") {
//           return "#ff4d4f";
//         } else if (name === "中危") {
//           return "#f5a22c";
//         }
//         return "#87d068";
//       },
//     },
//     colorField: "name",
//     tooltip: {
//       items: ["star"],
//     },
//   };
//   return <RadialBar {...config} />;
// };

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card title="检测对象">
        <DemoBar />
      </Card>
      <Card title="数据表检测统计">
        <ReactECharts
          option={drsOption}
          style={{ width: "400px", height: "250px" }}
        />
      </Card>
      <Card title="文件检测统计">
        <ReactECharts
          option={frsOption}
          style={{ width: "400px", height: "250px" }}
        />
      </Card>
    </div>
  );
}

export default App;
