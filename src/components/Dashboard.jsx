import React from 'react';
import { Bell, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard = ({ patientsData }) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard - Prediction Readmission</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
          <Bell size={16} />
          <span>3 Nouvelles alertes</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-600 mb-1">Patients a Risque Eleve</p>
          <p className="text-3xl font-bold text-red-600 mb-2">42</p>
          <div className="flex items-center gap-2">
            <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">+12%</span>
            <TrendingUp size={16} className="text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-600 mb-1">Score Moyen</p>
          <p className="text-3xl font-bold text-blue-600 mb-2">0.64</p>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">-5%</span>
            <TrendingDown size={16} className="text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-600 mb-1">Alertes Aujourd'hui</p>
          <p className="text-3xl font-bold text-orange-600 mb-2">8</p>
          <div className="flex items-center gap-2">
            <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">+3</span>
            <TrendingUp size={16} className="text-orange-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-600 mb-1">Taux de Readmission</p>
          <p className="text-3xl font-bold text-green-600 mb-2">12.3%</p>
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">-2%</span>
            <TrendingDown size={16} className="text-green-600" />
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Patients a Risque Eleve - Dernieres 24h</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Patient</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sortie</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Score</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Statut</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {patientsData.slice(0, 4).map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{patient.name}</p>
                        <p className="text-xs text-gray-500">{patient.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-900 text-sm">{patient.sortie}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                      patient.score >= 0.8 ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {patient.score}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.statut === 'CRITIQUE' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {patient.statut}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700">
                      Voir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Activite Recente</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm">Nouvelle alerte - Ahmed Bennani (Score: 0.87)</p>
              <p className="text-xs text-gray-500">Il y a 5 min</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm">Rapport Audit genere avec succes</p>
              <p className="text-xs text-gray-500">Il y a 23 min</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm">Mise à jour FHIR - 14 nouveaux patients</p>
              <p className="text-xs text-gray-500">Il y a 1h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
