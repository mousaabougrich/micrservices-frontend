import React from 'react';

const Parametres = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Parametres</h1>

      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Parametres Generaux</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Seuil d'alerte risque eleve
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
              Delai de readmission (jours)
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
          <h2 className="text-xl font-bold text-gray-900">Parametres du Modele</h2>
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
              <p className="text-sm text-gray-600">Generer des explications pour chaque prediction</p>
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
};

export default Parametres;
