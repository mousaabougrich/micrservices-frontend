import React from 'react';
import { FileText, Shield, Activity } from 'lucide-react';

const Rapports = () => {
  const rapportsData = [
    { titre: 'Rapport Mensuel - Novembre 2025', date: '01/12/2025', type: 'Mensuel', size: '2.4 MB' },
    { titre: 'Audit Fairness - Q4 2025', date: '28/11/2025', type: 'Audit', size: '1.8 MB' },
    { titre: 'Performance Modèle - Semaine 48', date: '24/11/2025', type: 'Performance', size: '890 KB' },
    { titre: 'Analyse Réadmissions - Octobre 2025', date: '15/11/2025', type: 'Analyse', size: '1.2 MB' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Rapports</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Nouveau Rapport
        </button>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
            <FileText className="text-blue-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport Mensuel</h3>
          <p className="text-sm text-gray-600 mb-4">Synthese des performances et metriques du mois</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Générer
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
            <Shield className="text-green-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport Audit</h3>
          <p className="text-sm text-gray-600 mb-4">Analyse fairness et conformite reglementaire</p>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Générer
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
            <Activity className="text-purple-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport Performance</h3>
          <p className="text-sm text-gray-600 mb-4">Metriques du modele et precision des predictions</p>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Générer
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Rapports Recents</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {rapportsData.map((rapport, idx) => (
            <div key={idx} className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{rapport.titre}</h3>
                    <div className="flex gap-4 text-sm text-gray-500 mt-1">
                      <span>{rapport.date}</span>
                      <span>•</span>
                      <span>{rapport.type}</span>
                      <span>•</span>
                      <span>{rapport.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                    Télécharger
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                    Partager
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rapports;
