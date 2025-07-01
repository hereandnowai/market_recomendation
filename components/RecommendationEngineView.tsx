
import React, { useState, useCallback } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from './common/Card';
import Button from './common/Button';
import { RecommendationModelType } from '../types';
import LoadingSpinner from './common/LoadingSpinner';

// interface MockRecommendation { // Removed
//   id: string;
//   name: string;
//   description: string;
//   imageUrl: string;
// }

const mockRecommendations = [ // Type inferred
  { id: '1', name: 'Product Innovate', description: 'Cutting-edge tech product for modern users.', imageUrl: 'https://picsum.photos/seed/innovate/200/150' },
  { id: '2', name: 'Content Strategy Omega', description: 'A fresh content approach to captivate your audience.', imageUrl: 'https://picsum.photos/seed/omega/200/150' },
  { id: '3', name: 'Campaign Synergy', description: 'Drive high engagement with this integrated campaign idea.', imageUrl: 'https://picsum.photos/seed/synergy/200/150' },
];

const sampleShoppingTrends = [ // Type inferred
  { name: 'Jan', Electronics: 420, Fashion: 260, 'Home Goods': 190 },
  { name: 'Feb', Electronics: 330, Fashion: 310, 'Home Goods': 210 },
  { name: 'Mar', Electronics: 550, Fashion: 370, 'Home Goods': 240 },
  { name: 'Apr', Electronics: 480, Fashion: 410, 'Home Goods': 260 },
  { name: 'May', Electronics: 620, Fashion: 390, 'Home Goods': 290 },
  { name: 'Jun', Electronics: 750, Fashion: 440, 'Home Goods': 320 },
];


const RecommendationEngineView = () => { // Removed React.FC
  const [modelLogic, setModelLogic] = useState(RecommendationModelType.HYBRID); // Removed <RecommendationModelType>
  const [enableABTesting, setEnableABTesting] = useState(false); // Removed <boolean>
  const [recommendations, setRecommendations] = useState([]); // Removed <MockRecommendation[]>
  const [isLoading, setIsLoading] = useState(false); // Removed <boolean>

  const generateRecommendations = useCallback(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setIsLoading(false);
      alert(`Recommendations generated using ${modelLogic}. A/B Testing: ${enableABTesting ? 'Enabled' : 'Disabled'}`);
    }, 1500);
  }, [modelLogic, enableABTesting]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brandSecondary">Recommendation Engine</h1>

      <Card title="Configure & Generate Recommendations">
        <div className="space-y-4">
          <div>
            <label htmlFor="modelLogic" className="block text-sm font-medium text-gray-700 mb-1">Select Model Logic:</label>
            <select
              id="modelLogic"
              value={modelLogic}
              onChange={(e) => setModelLogic(e.target.value as RecommendationModelType)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brandPrimary focus:border-brandPrimary sm:text-sm"
            >
              {Object.values(RecommendationModelType).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <input
              id="abTesting"
              type="checkbox"
              checked={enableABTesting}
              onChange={(e) => setEnableABTesting(e.target.checked)}
              className="h-4 w-4 text-brandPrimary border-gray-300 rounded focus:ring-brandPrimary"
            />
            <label htmlFor="abTesting" className="ml-2 block text-sm text-gray-900">Enable A/B Testing</label>
          </div>
          <Button onClick={generateRecommendations} variant="primary" disabled={isLoading}>
            {isLoading ? <LoadingSpinner size="sm" color="text-brandTextOnPrimary"/> : 'Generate Recommendations'}
          </Button>
        </div>
      </Card>

      <Card title="Shopping Pattern Trends (Sample)">
        <p className="mb-4 text-sm text-gray-600">This chart shows mock monthly trends for top product categories, illustrating potential customer behavior insights.</p>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={sampleShoppingTrends} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Electronics" stroke="#004040" activeDot={{ r: 8 }} name="Electronics" />
              <Line type="monotone" dataKey="Fashion" stroke="#FFDF00" activeDot={{ r: 8 }} name="Fashion"/>
              <Line type="monotone" dataKey="Home Goods" stroke="#00796b" activeDot={{ r: 8 }} name="Home Goods"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {isLoading && (
        <Card>
          <div className="flex justify-center items-center p-8">
            <LoadingSpinner size="lg" /> 
            <p className="ml-4 text-brandSecondary">Generating recommendations...</p>
          </div>
        </Card>
      )}

      {!isLoading && recommendations.length > 0 && (
        <Card title="Generated Recommendations">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map(rec => (
              <div key={rec.id} className="border border-mediumGray rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img src={rec.imageUrl} alt={rec.name} className="w-full h-32 object-cover rounded-md mb-3" />
                <h3 className="text-lg font-semibold text-brandSecondary">{rec.name}</h3>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
       {!isLoading && recommendations.length === 0 && !isLoading && ( // Ensure this only shows when not loading and no recommendations
         <Card>
            <p className="text-center text-gray-500 py-4">Configure settings and click "Generate Recommendations" to see personalized product/content suggestions.</p>
         </Card>
        )}
    </div>
  );
};

export default RecommendationEngineView;
