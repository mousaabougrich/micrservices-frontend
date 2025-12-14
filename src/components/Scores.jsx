import React from 'react';

const Scores = ({ scoresData }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Scores FHIR</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Nouvelle Analyse
        </button>
      </div>

      {/* Score Cards */}
      <div className="grid gap-6">
        {scoresData.map((score) => (
          <div key={score.id} className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{score.patient}</h3>
                  <p className="text-sm text-gray-500 mt-1">{score.id} • {score.date}</p>
                </div>
                <span className={`text-3xl font-bold ${
                  score.score >= 0.8 ? 'text-red-600' : 'text-orange-600'
                }`}>
                  {score.score}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Features Principales (SHAP)</h4>
              <div className="space-y-2">
                {score.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">{feature}</span>
                        <span className="text-sm font-semibold text-gray-900">{(0.3 - idx * 0.05).toFixed(2)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(0.3 - idx * 0.05) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Détails SHAP
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                  Voir FHIR Bundle
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                  Exporter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FHIR Resources Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Ressources FHIR Traitees</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-600 mb-1">Patients</p>
            <p className="text-2xl font-bold text-blue-900">87</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-600 mb-1">Observations</p>
            <p className="text-2xl font-bold text-green-900">1,243</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-purple-600 mb-1">Medications</p>
            <p className="text-2xl font-bold text-purple-900">567</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-sm text-orange-600 mb-1">Conditions</p>
            <p className="text-2xl font-bold text-orange-900">398</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
