import React, { useState } from 'react';
import { Home, Users, Activity, Shield, FileText, Settings } from 'lucide-react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Scores from './components/Scores';
import Audit from './components/Audit';
import Rapports from './components/Rapports';
import Parametres from './components/Parametres';
import { usePatients } from './hooks/usePatients';
import { useScores } from './hooks/useScores';
import { useAudit } from './hooks/useAudit';

const HealthFlowApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fetch data from services
  const { patients: patientsData, loading: patientsLoading } = usePatients();
  const { scores: scoresData, loading: scoresLoading } = useScores();
  const { auditData, loading: auditLoading } = useAudit();

  // Navigation items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'patients', label: 'Patients a Risque', icon: Users },
    { id: 'scores', label: 'Scores FHIR', icon: Activity },
    { id: 'audit', label: 'Audit Fairness', icon: Shield },
    { id: 'rapports', label: 'Rapports', icon: FileText },
    { id: 'parametres', label: 'Parametres', icon: Settings },
  ];

  const renderPage = () => {
    // Show loading state while data is being fetched
    const isLoading = patientsLoading || scoresLoading || auditLoading;
    
    if (isLoading && (!patientsData || !scoresData || !auditData)) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard patientsData={patientsData || []} />;
      case 'patients':
        return <Patients patientsData={patientsData || []} />;
      case 'scores':
        return <Scores scoresData={scoresData || []} />;
      case 'audit':
        return <Audit auditData={auditData || {}} />;
      case 'rapports':
        return <Rapports />;
      case 'parametres':
        return <Parametres />;
      default:
        return <Dashboard patientsData={patientsData || []} />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      navItems={navItems}
    >
      {renderPage()}
    </Layout>
  );
};

export default HealthFlowApp;
