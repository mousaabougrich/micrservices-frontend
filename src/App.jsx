import React, { useState } from 'react';
import { Home, Users, Activity, Shield, FileText, Settings, Search, Bell, Menu, X, ChevronRight, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

const HealthFlowApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Navigation items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'patients', label: 'Patients à Risque', icon: Users },
    { id: 'scores', label: 'Scores FHIR', icon: Activity },
    { id: 'audit', label: 'Audit Fairness', icon: Shield },
    { id: 'rapports', label: 'Rapports', icon: FileText },
    { id: 'parametres', label: 'Paramètres', icon: Settings },
  ];

  // Sample data
  const patientsData = [
    { id: 'P-2024-1547', name: 'Ahmed Bennani', sortie: '07/12/2025', score: 0.87, statut: 'CRITIQUE', age: 72, sexe: 'M', diagnostic: 'Insuffisance cardiaque' },
    { id: 'P-2024-1623', name: 'Sarah El Amrani', sortie: '06/12/2025', score: 0.82, statut: 'ÉLEVÉ', age: 65, sexe: 'F', diagnostic: 'Pneumonie' },
    { id: 'P-2024-1598', name: 'Mohammed Khalil', sortie: '06/12/2025', score: 0.76, statut: 'ÉLEVÉ', age: 68, sexe: 'M', diagnostic: 'BPCO' },
    { id: 'P-2024-1612', name: 'Fatima Zahra', sortie: '05/12/2025', score: 0.71, statut: 'ÉLEVÉ', age: 58, sexe: 'F', diagnostic: 'Diabète Type 2' },
    { id: 'P-2024-1589', name: 'Hassan Idrissi', sortie: '05/12/2025', score: 0.68, statut: 'MOYEN', age: 55, sexe: 'M', diagnostic: 'Hypertension' },
  ];

  const scoresData = [
    { id: 'FHIR-001', patient: 'Ahmed Bennani', date: '07/12/2025 14:30', score: 0.87, features: ['Comorbidités multiples', 'Âge >70', 'Réadmission antérieure'] },
    { id: 'FHIR-002', patient: 'Sarah El Amrani', date: '06/12/2025 09:15', score: 0.82, features: ['Observation anormale', 'Médication complexe', 'Lab tests critiques'] },
    { id: 'FHIR-003', patient: 'Mohammed Khalil', date: '06/12/2025 11:20', score: 0.76, features: ['Diagnostic chronique', 'Séjour prolongé', 'Comorbidités'] },
  ];

  const auditData = {
    age: { score: 85, status: 'good' },
    sexe: { score: 91, status: 'good' },
    origine: { score: 78, status: 'warning' },
    comorbidite: { score: 88, status: 'good' },
  };

  // Render functions for each page
  const renderDashboard = () => (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard - Prédiction Réadmission</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
          <Bell size={16} />
          <span>3 Nouvelles alertes</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-600 mb-1">Patients à Risque Élevé</p>
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
          <p className="text-xs text-gray-600 mb-1">Taux de Réadmission</p>
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
          <h2 className="text-lg font-bold text-gray-900">Patients à Risque Élevé - Dernières 24h</h2>
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
        <h2 className="text-lg font-bold text-gray-900 mb-3">Activité Récente</h2>
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
              <p className="text-gray-900 text-sm">Rapport Audit généré avec succès</p>
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

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Patients à Risque</h1>
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
          Élevé (30)
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
                    <span className="text-gray-600"><strong>Âge:</strong> {patient.age} ans</span>
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

  const renderScores = () => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Ressources FHIR Traitées</h2>
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

  const renderAudit = () => (
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
                Équité par {key === 'comorbidite' ? 'Comorbidité' : key}
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
                <p className="font-semibold text-gray-900">Aucun biais significatif détecté</p>
                <p className="text-sm text-gray-600">Dernière analyse: 07/12/2025 à 14:30</p>
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
                <p className="font-semibold text-gray-900">Légère variance détectée - Origine ethnique</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Dérive du Modèle</h2>
        <div className="h-48 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">0.03%</p>
            <p className="text-sm text-gray-600 mt-2">Dérive temporelle détectée (Normal)</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRapports = () => (
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
          <p className="text-sm text-gray-600 mb-4">Synthèse des performances et métriques du mois</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Générer
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
            <Shield className="text-green-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport Audit</h3>
          <p className="text-sm text-gray-600 mb-4">Analyse fairness et conformité réglementaire</p>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Générer
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
            <Activity className="text-purple-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport Performance</h3>
          <p className="text-sm text-gray-600 mb-4">Métriques du modèle et précision des prédictions</p>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Générer
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Rapports Récents</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { titre: 'Rapport Mensuel - Novembre 2025', date: '01/12/2025', type: 'Mensuel', size: '2.4 MB' },
            { titre: 'Audit Fairness - Q4 2025', date: '28/11/2025', type: 'Audit', size: '1.8 MB' },
            { titre: 'Performance Modèle - Semaine 48', date: '24/11/2025', type: 'Performance', size: '890 KB' },
            { titre: 'Analyse Réadmissions - Octobre 2025', date: '15/11/2025', type: 'Analyse', size: '1.2 MB' },
          ].map((rapport, idx) => (
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

  const renderParametres = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>

      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Paramètres Généraux</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Seuil d'alerte risque élevé
            </label>
            <input 
              type="range" 
              min="0.5" 
              max="1" 
              step="0.05" 
              defaultValue="0.7"
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>0.5</span>
              <span className="font-semibold text-blue-600">0.70</span>
              <span>1.0</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Délai de réadmission (jours)
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>30 jours</option>
              <option>60 jours</option>
              <option>90 jours</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Notifications par email</p>
              <p className="text-sm text-gray-600">Recevoir les alertes par email</p>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Model Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Paramètres du Modèle</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Version du modèle
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>XGBoost v2.1.0 (Production)</option>
              <option>XGBoost v2.0.5 (Ancien)</option>
              <option>XGBoost v2.2.0-beta (Test)</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Explications SHAP</p>
              <p className="text-sm text-gray-600">Générer des explications pour chaque prédiction</p>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Audit automatique</p>
              <p className="text-sm text-gray-600">Exécuter l'audit fairness automatiquement</p>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
        </div>
      </div>

      {/* FHIR Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Connexion FHIR</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              URL du serveur HAPI FHIR
            </label>
            <input 
              type="text" 
              defaultValue="https://fhir.hospital.ma/api"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Tester Connexion
            </button>
            <span className="flex items-center gap-2 text-green-600 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              Connecté
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50">
          Annuler
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Enregistrer
        </button>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return renderDashboard();
      case 'patients': return renderPatients();
      case 'scores': return renderScores();
      case 'audit': return renderAudit();
      case 'rapports': return renderRapports();
      case 'parametres': return renderParametres();
      default: return renderDashboard();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-5 border-b border-gray-800">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold text-blue-400">HealthFlow</h1>
          ) : (
            <h1 className="text-xl font-bold text-blue-400">HF</h1>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Toggle Button */}
        <div className="p-3 border-t border-gray-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher patient, ID, diagnostic..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell size={22} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                Dr
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Dr. Ouedrhiri</p>
                <p className="text-xs text-gray-500">Administrateur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default HealthFlowApp;