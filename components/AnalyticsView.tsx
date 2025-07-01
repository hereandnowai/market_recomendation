
import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './common/Card';
import Button from './common/Button';

// Sample Data (remains the same, adding ROI data)
const sampleCTRData = [
  { name: 'Q1 Launch', value: 5.8 },
  { name: 'Summer Sale', value: 7.5 },
  { name: 'Holiday Push', value: 4.2 },
  { name: 'New Product', value: 6.9 },
];

const sampleConversionData = [
  { name: 'Q1 Launch', value: 1.5 },
  { name: 'Summer Sale', value: 2.8 },
  { name: 'Holiday Push', value: 1.1 },
  { name: 'New Product', value: 2.1 },
];

const sampleEngagementData = [
  { name: 'Week 1', value: 1250 },
  { name: 'Week 2', value: 1580 },
  { name: 'Week 3', value: 1350 },
  { name: 'Week 4', value: 1890 },
  { name: 'Week 5', value: 1620 },
];

const sampleROIData = [
  { name: 'Influencer Collab', value: 42000, roi: 3.8 }, 
  { name: 'PPC Ad Group', value: 61000, roi: 4.5 },
  { name: 'Email Blast', value: 25000, roi: 2.5 },
  { name: 'Content Marketing', value: 48000, roi: 4.1 },
];

const ROI_CHART_COLORS = ['#004040', '#FFDF00', '#00796b', '#80cbc4', '#ff8f00'];


const AnalyticsView = () => { // Removed React.FC

  const handleFeedback = () => {
    alert("Submitting feedback to retrain models... (Mock Implementation)");
  };

  const convertToCSV = (data, headers, chartTitle) => {
    const headerRow = headers.join(',');
    const dataRows = data.map(row => headers.map(header => row[header.toLowerCase().replace(/\s+/g, '')] ?? row[header] ?? row.name ?? row.value).join(',')); // Attempt to match common keys
    return [`Chart: ${chartTitle}`, headerRow, ...dataRows].join('\n');
  };
  
  const handleExportCSV = () => {
    let csvContent = "";

    csvContent += convertToCSV(sampleCTRData, ['Name', 'Value'], 'Click-Through Rate (CTR) %') + '\n\n';
    csvContent += convertToCSV(sampleConversionData, ['Name', 'Value'], 'Conversion Rate %') + '\n\n';
    csvContent += convertToCSV(sampleEngagementData, ['Name', 'Value'], 'User Engagement Over Time') + '\n\n';
    csvContent += convertToCSV(sampleROIData, ['Name', 'Value', 'ROI'], 'Campaign ROI (Mock)') + '\n\n';

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "analytics_report.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert("CSV report download initiated.");
    } else {
        alert("CSV download is not supported in your browser.");
    }
  };

  const handleExportPDF = () => {
    alert("To save as PDF: In the upcoming Print dialog, select 'Save as PDF' or 'Microsoft Print to PDF' (or similar) as your printer destination. You can also adjust layout options like 'Portrait' or 'Landscape' and 'Scale' for best results.");
    window.print();
  };
  
  return (
    React.createElement('div', { className: "space-y-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-brandSecondary" }, "Analytics & Performance"),

      React.createElement('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" },
        React.createElement(Card, {
          title: "Click-Through Rate (CTR) %",
          children: [
            React.createElement('p', {className: "text-sm text-gray-600 mb-3"}, "Percentage of users who clicked on a link out of total users who viewed it. Higher CTR often indicates relevant content."),
            React.createElement('div', { style: { width: '100%', height: 300 } },
              React.createElement(ResponsiveContainer, null,
                React.createElement(BarChart, { data: sampleCTRData },
                  React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
                  React.createElement(XAxis as any, { dataKey: "name" }),
                  React.createElement(YAxis as any, null),
                  React.createElement(Tooltip as any, null),
                  React.createElement(Legend as any, null),
                  React.createElement(Bar as any, { dataKey: "value", fill: "#FFDF00", name: "CTR (%)" })
                )
              )
            )
          ]
        }),

        React.createElement(Card, {
          title: "Conversion Rate %",
          children: [
            React.createElement('p', {className: "text-sm text-gray-600 mb-3"}, "Percentage of users who completed a desired action (e.g., purchase, sign-up). Key indicator of campaign effectiveness."),
            React.createElement('div', { style: { width: '100%', height: 300 } },
              React.createElement(ResponsiveContainer, null,
                React.createElement(BarChart, { data: sampleConversionData },
                  React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
                  React.createElement(XAxis as any, { dataKey: "name" }),
                  React.createElement(YAxis as any, null),
                  React.createElement(Tooltip as any, null),
                  React.createElement(Legend as any, null),
                  React.createElement(Bar as any, { dataKey: "value", fill: "#004040", name: "Conversion Rate (%)" })
                )
              )
            )
          ]
        })
      ),

      React.createElement(Card, {
        title: "User Engagement Over Time",
        children: [
          React.createElement('p', {className: "text-sm text-gray-600 mb-3"}, "Tracks user interaction (e.g., likes, shares, time spent) over periods. Indicates content resonance and audience interest."),
          React.createElement('div', { style: { width: '100%', height: 300 } },
            React.createElement(ResponsiveContainer, null,
              React.createElement(LineChart, { data: sampleEngagementData },
                React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
                React.createElement(XAxis as any, { dataKey: "name" }),
                React.createElement(YAxis as any, null),
                React.createElement(Tooltip as any, null),
                React.createElement(Legend as any, null),
                React.createElement(Line as any, { type: "monotone", dataKey: "value", stroke: "#004040", strokeWidth: 2, name: "Engagement Score", activeDot: { r: 8 } })
              )
            )
          )
        ]
      }),

      React.createElement(Card, {
        title: "Campaign ROI (Mock)",
        children: [
          React.createElement('p', {className: "text-sm text-gray-600 mb-3"}, "Return on Investment for various campaigns, indicating profitability. (Value shown is mock revenue/profit)."),
          React.createElement('div', { style: { width: '100%', height: 300 } },
            React.createElement(ResponsiveContainer, null,
              React.createElement(PieChart, null,
                React.createElement(Pie as any, {
                  data: sampleROIData,
                  cx: "50%",
                  cy: "50%",
                  innerRadius: 70, // Makes it a doughnut
                  outerRadius: 110,
                  fill: "#8884d8",
                  paddingAngle: 2,
                  dataKey: "value", // The value to determine pie size
                  nameKey: "name"  // The name for legend/tooltip
                },
                  sampleROIData.map((entry, index) => 
                    React.createElement(Cell, { key: `cell-${index}`, fill: ROI_CHART_COLORS[index % ROI_CHART_COLORS.length] })
                  )
                ),
                React.createElement(Tooltip as any, { formatter: (value, name, props) => [`Value: ${value}`, `ROI: ${props.payload.roi}x`] }),
                React.createElement(Legend as any, null)
              )
            )
          )
        ]
      }),
      
      React.createElement(Card, {
        title: "Actions",
        children: React.createElement('div', { className: "flex flex-wrap gap-4" },
          React.createElement(Button, { 
            onClick: handleFeedback, 
            variant: "secondary", 
            children: "Provide Feedback to Retrain Models" 
          }),
          React.createElement(Button, { 
            onClick: handleExportCSV, 
            variant: "outline", 
            children: "Download Report as CSV" 
          }),
          React.createElement(Button, { 
            onClick: handleExportPDF, 
            variant: "outline", 
            children: "Download Report as PDF" 
          })
        )
      })
    )
  );
};

export default AnalyticsView;
