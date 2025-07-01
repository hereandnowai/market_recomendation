
import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

const ClientProfilesView = () => { // Removed React.FC
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brandSecondary">Client Profiles & Workspaces</h1>

      <Card title="Manage Workspaces (Mock UI)">
        <p className="text-gray-600 mb-4">This section would allow businesses to manage their own dedicated workspaces, ensuring data isolation and customized settings.</p>
        <div className="space-y-2">
          <div className="p-3 border rounded-md bg-gray-50">Client Workspace Gamma (Active)</div>
          <div className="p-3 border rounded-md bg-gray-50">Client Workspace Delta</div>
        </div>
        <Button variant="primary" className="mt-4" onClick={() => alert("Mock: Create New Workspace")}>Create New Workspace</Button>
      </Card>

      <Card title="Custom Branding (Mock UI)">
        <p className="text-gray-600 mb-4">Upload your company logo and customize theme colors to match your brand identity within the platform.</p>
        <div className="flex items-center space-x-4">
          <img src="https://picsum.photos/seed/clientlogo_new/100/40" alt="Client Logo Placeholder" className="h-10 border" />
          <Button variant="outline" onClick={() => alert("Mock: Upload Logo")}>Upload Logo</Button>
          <input type="color" defaultValue="#0052cc" className="h-10 w-16 p-0 border-none cursor-pointer" title="Primary Color Picker (Mock)" />
        </div>
      </Card>

      <Card title="Team Collaboration (Mock UI)">
        <p className="text-gray-600 mb-4">Invite team members to collaborate within your client workspace. Manage roles and permissions.</p>
        <div className="space-y-2">
          <div className="p-3 border rounded-md bg-gray-50 flex justify-between items-center">
            <span>manager.alpha@example.com (Admin)</span> <Button variant="danger" size="sm" onClick={() => alert("Mock: Remove User")}>Remove</Button>
          </div>
          <div className="p-3 border rounded-md bg-gray-50 flex justify-between items-center">
            <span>analyst.beta@example.com (Editor)</span> <Button variant="danger" size="sm" onClick={() => alert("Mock: Remove User")}>Remove</Button>
          </div>
        </div>
        <Button variant="secondary" className="mt-4" onClick={() => alert("Mock: Invite Team Member")}>Invite Team Member</Button>
      </Card>
    </div>
  );
};

export default ClientProfilesView;
