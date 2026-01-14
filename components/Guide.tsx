import React, { useState } from 'react';
import { CloneMethod, Step } from '../types';
import { Database, FolderDown, Globe, Play, Save, Server, Settings, UploadCloud } from 'lucide-react';

const manualSteps: Step[] = [
  { title: "Sauvegarde Complète", description: "Sauvegardez tous les fichiers (via FTP) et la base de données (via phpMyAdmin).", icon: "save" },
  { title: "Création Base de Données", description: "Créez une nouvelle base de données vide sur le serveur de destination.", icon: "database" },
  { title: "Transfert des Fichiers", description: "Envoyez tous les fichiers WordPress vers le nouveau serveur via FTP/SFTP.", icon: "upload" },
  { title: "Import SQL", description: "Importez le fichier .sql dans la nouvelle base de données.", icon: "server" },
  { title: "Configuration wp-config", description: "Mettez à jour wp-config.php avec les nouveaux identifiants de base de données.", icon: "settings" },
  { title: "Search & Replace", description: "Remplacez l'ancienne URL par la nouvelle dans la base de données (outils comme WP-CLI ou script Interconnect/it).", icon: "globe" }
];

const pluginSteps: Step[] = [
  { title: "Installation Plugin", description: "Installez un plugin comme 'Duplicator' ou 'All-in-One WP Migration'.", icon: "download" },
  { title: "Création du Paquet", description: "Lancez l'assistant du plugin pour créer un paquet (archive) du site.", icon: "package" },
  { title: "Téléchargement", description: "Téléchargez le fichier archive et le fichier installateur (installer.php).", icon: "save" },
  { title: "Upload Destination", description: "Envoyez les deux fichiers à la racine du nouveau site.", icon: "upload" },
  { title: "Lancement Installation", description: "Accédez à votresite.com/installer.php et suivez les instructions.", icon: "play" }
];

const Guide: React.FC = () => {
  const [method, setMethod] = useState<CloneMethod>(CloneMethod.PLUGIN);

  const steps = method === CloneMethod.PLUGIN ? pluginSteps : manualSteps;

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'save': return <Save className="w-6 h-6 text-wp-blue" />;
      case 'database': return <Database className="w-6 h-6 text-purple-500" />;
      case 'upload': return <UploadCloud className="w-6 h-6 text-green-500" />;
      case 'server': return <Server className="w-6 h-6 text-orange-500" />;
      case 'settings': return <Settings className="w-6 h-6 text-gray-500" />;
      case 'globe': return <Globe className="w-6 h-6 text-blue-400" />;
      case 'download': return <FolderDown className="w-6 h-6 text-wp-blue" />;
      case 'package': return <Settings className="w-6 h-6 text-purple-500" />;
      case 'play': return <Play className="w-6 h-6 text-green-500" />;
      default: return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Méthodes de Clonage</h2>
        <p className="text-slate-600">Choisissez la méthode qui correspond à votre niveau technique.</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
          <button
            onClick={() => setMethod(CloneMethod.PLUGIN)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              method === CloneMethod.PLUGIN 
              ? 'bg-wp-blue text-white shadow-md' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Via Plugin (Recommandé)
          </button>
          <button
            onClick={() => setMethod(CloneMethod.MANUAL)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              method === CloneMethod.MANUAL 
              ? 'bg-wp-blue text-white shadow-md' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Méthode Manuelle (Expert)
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              {renderIcon(step.icon)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1 flex items-center">
                <span className="bg-slate-800 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    {idx + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-9">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 flex gap-3">
        <span className="font-bold">⚠️ Attention :</span>
        <p>
            Faites toujours une sauvegarde complète avant toute opération de clonage. 
            Modifiez toujours les URLs dans la base de données avec un script sérialisé, jamais avec un simple éditeur de texte.
        </p>
      </div>
    </div>
  );
};

import { CheckCircle } from 'lucide-react';
export default Guide;