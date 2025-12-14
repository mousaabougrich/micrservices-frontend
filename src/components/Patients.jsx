import React from 'react';
import { AlertCircle } from 'lucide-react';

const Patients = ({ patientsData }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Patients a Risque</h1>
        <div className="flex gap-3">
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
            Filtres
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Exporter CSV
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2">
        <button className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
          Critique (12)
        </button>
        <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
          Eleve (30)
        </button>
        <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
          Moyen (45)
        </button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
          Tous (87)
        </button>
      </div>

      {/* Detailed Patient Cards */}
      <div className="grid gap-4">
        {patientsData.map((patient) => (
          <div key={patient.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{patient.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{patient.id}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600"><strong>Age:</strong> {patient.age} ans</span>
                    <span className="text-gray-600"><strong>Sexe:</strong> {patient.sexe}</span>
                    <span className="text-gray-600"><strong>Sortie:</strong> {patient.sortie}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                      <AlertCircle size={14} />
                      {patient.diagnostic}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-flex px-4 py-2 rounded-full text-lg font-bold ${
                  patient.score >= 0.8 ? 'bg-red-100 text-red-700' : 
                  patient.score >= 0.7 ? 'bg-orange-100 text-orange-700' : 
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {patient.score}
                </span>
                <p className="text-sm text-gray-500 mt-1">Score de risque</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Voir Détails
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                Historique
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                FHIR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
