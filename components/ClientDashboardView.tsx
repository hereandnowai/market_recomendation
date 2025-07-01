
import React, { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './common/Card';
import FileUpload from './common/FileUpload';
import Button from './common/Button';
import { ClientDataFormat, RecommendationModelType } from '../types'; // ChartData removed as sampleDataInsights is directly typed

const sampleDataInsights = [ // Directly typed array
  { name: 'Jan', value: 450 },
  { name: 'Feb', value: 320 },
  { name: 'Mar', value: 680 },
  { name: 'Apr', value: 750 },
  { name: 'May', value: 530 },
  { name: 'Jun', value: 710 },
];

const ClientDashboardView = () => { // Removed React.FC
  const [selectedFile, setSelectedFile] = useState(null); // Removed <File | null>
  const [dataFormat, setDataFormat] = useState(ClientDataFormat.CSV); // Removed <ClientDataFormat>
  const [modelType, setModelType] = useState(RecommendationModelType.COLLABORATIVE); // Removed <RecommendationModelType>

  const handleFileSelect = useCallback((file) => { // Removed : File | null from file
    setSelectedFile(file);
    if (file) {
        alert(`File "${file.name}" selected. In a real app, this would be processed.`);
    }
  }, []);

  const handleUpload = useCallback(() => {
    if (selectedFile) {
      alert(`Uploading ${selectedFile.name} (format: ${dataFormat}). Model type: ${modelType}.`);
      // Mock upload logic
    } else {
      alert("Please select a file first.");
    }
  }, [selectedFile, dataFormat, modelType]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brandSecondary">Client Dashboard</h1>
      
      <Card title="Upload Customer Data">
        <div className="space-y-4">
          <div>
            <label htmlFor="dataFormat" className="block text-sm font-medium text-gray-700 mb-1">Data Format:</label>
            <select
              id="dataFormat"
              value={dataFormat}
              onChange={(e) => setDataFormat(e.target.value as ClientDataFormat)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brandPrimary focus:border-brandPrimary sm:text-sm"
            >
              <option value={ClientDataFormat.CSV}>CSV</option>
              <option value={ClientDataFormat.JSON}>JSON</option>
            </select>
          </div>
          <FileUpload onFileSelect={handleFileSelect} acceptedFormats=".csv,.json" />
        </div>
      </Card>

      <Card title="Choose Recommendation Model">
         <div>
            <label htmlFor="modelType" className="block text-sm font-medium text-gray-700 mb-1">Recommendation Model Type:</label>
            <select
              id="modelType"
              value={modelType}
              onChange={(e) => setModelType(e.target.value as RecommendationModelType)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brandPrimary focus:border-brandPrimary sm:text-sm"
            >
              {Object.values(RecommendationModelType).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <Button onClick={handleUpload} variant="primary" className="mt-4">
            Process Data & Setup Model
          </Button>
      </Card>

      <Card title="Data Insights (Sample)">
        <p className="mb-4 text-sm text-gray-600">This is a sample visualization of customer engagement over months.</p>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={sampleDataInsights}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#004040" name="Customer Engagement" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default ClientDashboardView;
