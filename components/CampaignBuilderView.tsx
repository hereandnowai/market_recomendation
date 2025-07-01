
import React, { useState, useCallback } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import LoadingSpinner from './common/LoadingSpinner';
import { CampaignExportFormat } from '../types';
import { generateMarketingContent } from '../services/geminiService';

const mockProductPerformance = [
  { id: 'prod1', name: 'Quantum Laptop Pro', salesTrend: 'Increasing', stockLevel: 'Medium' },
  { id: 'prod2', name: 'Organic Green Tea Set', salesTrend: 'Stable', stockLevel: 'High' },
  { id: 'prod3', name: 'Artisan Dark Chocolate', salesTrend: 'Stable', stockLevel: 'Low' },
  { id: 'prod4', name: 'Stealth Gaming Mouse', salesTrend: 'Increasing', stockLevel: 'High' },
];

const productCategories = ['Electronics', 'Fashion', 'Home Goods', 'Sports & Outdoors', 'Books', 'Groceries', 'Beauty & Personal Care'];


const CampaignBuilderView = () => { // Removed React.FC
  const [campaignName, setCampaignName] = useState(''); // Removed <string>
  const [targetAudience, setTargetAudience] = useState(''); // Removed <string>
  const [productInfo, setProductInfo] = useState(''); // Removed <string>
  
  const [generatedSubject, setGeneratedSubject] = useState('');
  const [subjectAttempted, setSubjectAttempted] = useState(false);
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [captionAttempted, setCaptionAttempted] = useState(false);
  const [generatedCTA, setGeneratedCTA] = useState('');
  const [ctaAttempted, setCtaAttempted] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false); // Removed <boolean>
  const [error, setError] = useState(null); // Removed <string | null>

  // State for new offer fields
  const [offerName, setOfferName] = useState('');
  const [offerTargetProduct, setOfferTargetProduct] = useState(productCategories[0]);
  const [offerDetails, setOfferDetails] = useState('');
  const [offerStartDate, setOfferStartDate] = useState('');
  const [offerEndDate, setOfferEndDate] = useState('');


  const handleGenerateContent = useCallback(async (contentType) => { // Removed : 'subject' | 'caption' | 'cta'
    if (!productInfo && !targetAudience) {
        alert("Please provide product information or target audience.");
        return;
    }
    setIsLoading(true);
    setError(null); // Clear general error for the card

    // Set attempted flag and clear previous content for the specific type
    if (contentType === 'subject') {
      setGeneratedSubject('');
      setSubjectAttempted(true);
    } else if (contentType === 'caption') {
      setGeneratedCaption('');
      setCaptionAttempted(true);
    } else if (contentType === 'cta') {
      setGeneratedCTA('');
      setCtaAttempted(true);
    }
    
    let prompt = `Generate a marketing ${contentType} for a campaign. `;
    if (campaignName) prompt += `Campaign name: "${campaignName}". `;
    if (productInfo) prompt += `Product/Service: "${productInfo}". `;
    if (targetAudience) prompt += `Target Audience: "${targetAudience}". `;
    
    switch(contentType) {
        case 'subject':
            prompt += "The subject line should be concise, catchy, and encourage opens.";
            break;
        case 'caption':
            prompt += "The image caption should be engaging and descriptive for social media.";
            break;
        case 'cta':
            prompt += "The Call To Action should be clear, compelling, and short.";
            break;
    }

    try {
      const result = await generateMarketingContent(prompt); // result is always a string now
      switch(contentType) {
        case 'subject':
          setGeneratedSubject(result);
          break;
        case 'caption':
          setGeneratedCaption(result);
          break;
        case 'cta':
          setGeneratedCTA(result);
          break;
      }
    } catch (err) {
      console.error("Error generating content:", err);
      setError(err instanceof Error ? err.message : "Failed to generate content. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  }, [campaignName, productInfo, targetAudience]);

  const handleExport = (format) => { // Removed : CampaignExportFormat
    alert(`Exporting campaign content as ${format.toUpperCase()}. (Mock Implementation)
Subject: ${generatedSubject}
Caption: ${generatedCaption}
CTA: ${generatedCTA}`);
  };

  const handleLaunchOffer = useCallback(() => {
    if (!offerName || !offerDetails || !offerStartDate || !offerEndDate) {
      alert("Please fill in all offer fields before launching.");
      return;
    }
    alert(`Launching Offer:
Name: ${offerName}
Target: ${offerTargetProduct}
Details: ${offerDetails}
Dates: ${offerStartDate} to ${offerEndDate}
(Mock Implementation)`);
    // Reset offer fields after mock launch
    setOfferName('');
    setOfferTargetProduct(productCategories[0]);
    setOfferDetails('');
    setOfferStartDate('');
    setOfferEndDate('');
  }, [offerName, offerTargetProduct, offerDetails, offerStartDate, offerEndDate]);

  const renderGeneratedContent = (content, attempted, typeName) => {
    if (!attempted || error) return null; // If not attempted or there's a general error, don't show specific content status

    if (content) { // Content is a non-empty string (actual content or "API unavailable" message)
        return React.createElement('p', { className: "mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-700" }, content);
    } else { // Content is an empty string (AI returned empty, or response.text was null/undefined)
        return React.createElement('p', { className: "mt-2 p-2 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-500" }, `Generated ${typeName} is empty. Try adjusting your input or check API configuration.`);
    }
  };

  const campaignNameInputProps = {
    type: "text",
    id: "campaignName",
    value: campaignName,
    onChange: (e) => setCampaignName(e.target.value),
    className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
  };

  const offerNameInputProps = {
    type: "text",
    id: "offerName",
    value: offerName,
    onChange: (e) => setOfferName(e.target.value),
    placeholder: "e.g., Summer Kickoff Sale",
    className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
  };

  return (
    React.createElement('div', { className: "space-y-6" },
      React.createElement('h1', { className: "text-3xl font-bold text-brandSecondary" }, "Campaign Builder"),

      React.createElement(Card, { title: "Campaign Details", children: 
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
          React.createElement('div', null,
            React.createElement('label', { htmlFor: "campaignName", className: "block text-sm font-medium text-gray-700" }, "Campaign Name (Optional)"),
            React.createElement('input', { ...campaignNameInputProps })
          ),
          React.createElement('div', null,
            React.createElement('label', { htmlFor: "targetAudience", className: "block text-sm font-medium text-gray-700" }, "Target Audience"),
            React.createElement('input', { type: "text", id: "targetAudience", value: targetAudience, onChange: (e) => setTargetAudience(e.target.value), placeholder: "e.g., Young professionals interested in tech", className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" })
          ),
          React.createElement('div', { className: "md:col-span-2" },
            React.createElement('label', { htmlFor: "productInfo", className: "block text-sm font-medium text-gray-700" }, "Product/Service Information"),
            React.createElement('textarea', { id: "productInfo", value: productInfo, onChange: (e) => setProductInfo(e.target.value), rows: 3, placeholder: "e.g., New AI-powered analytics tool", className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" })
          )
        )
      }),

      React.createElement(Card, { title: "AI-Powered Content Generation", children: [
        error && React.createElement('p', { className: "text-red-500 bg-red-100 p-3 rounded-md mb-4" }, error),
        React.createElement('div', { className: "space-y-4" },
          React.createElement('div', null,
            React.createElement('h3', { className: "text-md font-semibold text-gray-800" }, "Smart Subject Line"),
            React.createElement(Button, { onClick: () => handleGenerateContent('subject'), variant: "secondary", className: "mt-1 text-sm", disabled: isLoading, children: 
              isLoading ? React.createElement(LoadingSpinner, { size: "sm", color: "text-brandTextOnSecondary" }) : 'Generate Subject'
            }),
            renderGeneratedContent(generatedSubject, subjectAttempted, 'subject line')
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: "text-md font-semibold text-gray-800" }, "Image Caption"),
            React.createElement(Button, { onClick: () => handleGenerateContent('caption'), variant: "secondary", className: "mt-1 text-sm", disabled: isLoading, children: 
             isLoading ? React.createElement(LoadingSpinner, { size: "sm", color: "text-brandTextOnSecondary" }) : 'Generate Caption'
            }),
            renderGeneratedContent(generatedCaption, captionAttempted, 'caption')
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: "text-md font-semibold text-gray-800" }, "Call to Action (CTA)"),
            React.createElement(Button, { onClick: () => handleGenerateContent('cta'), variant: "secondary", className: "mt-1 text-sm", disabled: isLoading, children: 
              isLoading ? React.createElement(LoadingSpinner, { size: "sm", color: "text-brandTextOnSecondary" }) : 'Generate CTA'
            }),
            renderGeneratedContent(generatedCTA, ctaAttempted, 'CTA')
          )
        )
      ]}),

      React.createElement(Card, { title: "Offer Management & Insights", children: 
        React.createElement('div', { className: "space-y-6" },
          React.createElement('div', null,
            React.createElement('h3', { className: "text-lg font-semibold text-gray-800 mb-2" }, "Product Performance & Stock (Mock Data)"),
            React.createElement('p', { className: "text-sm text-gray-600 mb-3" }, "Use these mock insights to inform your offer strategy."),
            React.createElement('div', { className: "overflow-x-auto" },
              React.createElement('table', { className: "min-w-full divide-y divide-gray-200" },
                React.createElement('thead', { className: "bg-gray-50" },
                  React.createElement('tr', null,
                    React.createElement('th', { scope: "col", className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Product Name"),
                    React.createElement('th', { scope: "col", className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Sales Trend"),
                    React.createElement('th', { scope: "col", className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Stock Level")
                  )
                ),
                React.createElement('tbody', { className: "bg-white divide-y divide-gray-200 text-sm" },
                  mockProductPerformance.map(product => (
                    React.createElement('tr', { key: product.id },
                      React.createElement('td', { className: "px-4 py-2 whitespace-nowrap text-gray-700" }, product.name),
                      React.createElement('td', { className: "px-4 py-2 whitespace-nowrap text-gray-600" }, product.salesTrend),
                      React.createElement('td', { className: "px-4 py-2 whitespace-nowrap" },
                        React.createElement('span', { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stockLevel === 'Low' ? 'bg-red-100 text-red-800' :
                          product.stockLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }` }, product.stockLevel)
                      )
                    )
                  ))
                )
              )
            )
          ),

          React.createElement('div', null,
            React.createElement('h3', { className: "text-lg font-semibold text-gray-800 mb-2" }, "Create New Offer"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
              React.createElement('div', null,
                React.createElement('label', { htmlFor: "offerName", className: "block text-sm font-medium text-gray-700" }, "Offer Name/Title"),
                React.createElement('input', { ...offerNameInputProps })
              ),
              React.createElement('div', null,
                React.createElement('label', { htmlFor: "offerTargetProduct", className: "block text-sm font-medium text-gray-700" }, "Target Product Category (Mock)"),
                React.createElement('select', { 
                    id: "offerTargetProduct", 
                    value: offerTargetProduct, 
                    onChange: (e) => setOfferTargetProduct(e.target.value),
                    className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white"
                },
                    productCategories.map(cat => React.createElement('option', { key: cat, value: cat }, cat))
                )
              ),
              React.createElement('div', { className: "md:col-span-2" },
                React.createElement('label', { htmlFor: "offerDetails", className: "block text-sm font-medium text-gray-700" }, "Discount Percentage / Offer Details"),
                React.createElement('input', { type: "text", id: "offerDetails", value: offerDetails, onChange: (e) => setOfferDetails(e.target.value), placeholder: "e.g., 25% off all items OR Buy 1 Get 1 Free", className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" })
              ),
              React.createElement('div', null,
                React.createElement('label', { htmlFor: "offerStartDate", className: "block text-sm font-medium text-gray-700" }, "Offer Start Date (Mock)"),
                React.createElement('input', { type: "text", id: "offerStartDate", value: offerStartDate, onChange: (e) => setOfferStartDate(e.target.value), placeholder: "YYYY-MM-DD", className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" })
              ),
              React.createElement('div', null,
                React.createElement('label', { htmlFor: "offerEndDate", className: "block text-sm font-medium text-gray-700" }, "Offer End Date (Mock)"),
                React.createElement('input', { type: "text", id: "offerEndDate", value: offerEndDate, onChange: (e) => setOfferEndDate(e.target.value), placeholder: "YYYY-MM-DD", className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" })
              )
            ),
            React.createElement(Button, { onClick: handleLaunchOffer, variant: "primary", className: "mt-4", children: "Launch Offer" })
          )
        )
      }),

      React.createElement(Card, { title: "Export Campaign Content", children: 
        React.createElement('div', { className: "flex space-x-2" },
          Object.values(CampaignExportFormat).map(format => (
            React.createElement(Button, { key: format, onClick: () => handleExport(format), variant: "outline", children: `Export as ${format.toUpperCase()}` })
          ))
        )
      })
    )
  );
};

export default CampaignBuilderView;
