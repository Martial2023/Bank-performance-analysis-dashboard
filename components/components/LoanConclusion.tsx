import React from 'react';
import { TrendingUp, AlertCircle, PieChart, Clock } from 'lucide-react';

const LoanConclusion = () => {
    const keyMetrics = [
        {
            icon: <TrendingUp />,
            label: "Montant moyen",
            value: "151 410 CZK",
            trend: "+12% vs année précédente",
            color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
        },
        {
            icon: <Clock />,
            label: "Durée moyenne",
            value: "36,5 mois",
            trend: "Médiane: 36 mois",
            color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
        },
        {
            icon: <PieChart />,
            label: "Paiement mensuel",
            value: "4 190 CZK",
            trend: "Médiane: 3 934 CZK",
            color: "bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400"
        },
        {
            icon: <AlertCircle />,
            label: "Prêts problématiques",
            value: "15%",
            trend: "Statuts B et D",
            color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1" />
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Analyse des Prêts</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Basée sur 682 prêts analysés</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                {keyMetrics.map((metric, index) => (
                    <div key={index} className="flex flex-col">
                        <div className={`p-2 rounded-lg w-10 h-10 flex items-center justify-center ${metric.color} mb-3`}>
                            {React.cloneElement(metric.icon, { className: "h-5 w-5" })}
                        </div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.label}</p>
                        <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-1">{metric.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{metric.trend}</p>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Conclusion de l'analyse
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        L'analyse révèle une forte dispersion des montants de prêts (écart-type 113 372 CZK), confirmant
                        des disparités régionales importantes. Dans les districts à risque élevé, les montants peuvent atteindre
                        jusqu'à 590 820 CZK. Les clients préfèrent généralement des prêts à moyen terme, mais les paiements
                        mensuels élevés dans certains districts (jusqu'à 9 910 CZK) reflètent des difficultés potentielles
                        de remboursement. Les 25% des prêts inférieurs à 66 732 CZK suggèrent une approche prudente dans
                        les districts à faible revenu.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoanConclusion;