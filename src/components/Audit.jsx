import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

const Audit = ({ auditData }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Audit Fairness</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Générer Rapport
        </button>
      </div>

      {/* Fairness Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(auditData).map(([key, data]) => (
          <div key={key} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 capitalize">
                Equite par {key === 'comorbidite' ? 'Comorbidite' : key}
              </h3>
              <Shield className={data.status === 'good' ? 'text-green-600' : 'text-orange-600'} size={24} />
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-bold text-gray-900">{data.score}%</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  data.status === 'good' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {data.status === 'good' ? 'Conforme' : 'À surveiller'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${data.status === 'good' ? 'bg-green-600' : 'bg-orange-600'}`}
                  style={{ width: `${data.score}%` }}
                ></div>
              </div>
            </div>
            <button className="w-full border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 text-sm">
              Voir Analyse Détaillée
            </button>
          </div>
        ))}
      </div>

      {/* Bias Detection */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Détection de Biais</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Aucun biais significatif detecte</p>
                <p className="text-sm text-gray-600">Derniere analyse: 07/12/2025 a 14:30</p>
              </div>
            </div>
            <span className="text-green-600 font-semibold">✓</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                <AlertCircle className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Legere variance detectee - Origine ethnique</p>
                <p className="text-sm text-gray-600">Écart: 8.5% (seuil acceptable: 10%)</p>
              </div>
            </div>
            <button className="text-orange-600 hover:text-orange-700 font-semibold">
              Investiguer
            </button>
          </div>
        </div>
      </div>

      {/* Model Drift */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Derive du Modele</h2>
        <div className="h-48 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">0.03%</p>
            <p className="text-sm text-gray-600 mt-2">Derive temporelle detectee (Normal)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
