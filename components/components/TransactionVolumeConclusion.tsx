import React from 'react';
import { BarChart, Calendar, Info } from 'lucide-react';

const TransactionVolumeConclusion = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1" />

            <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 mr-3">
                            <BarChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Résumé des Transactions
                        </h2>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>1993-1998</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Retraits</p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">60%</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Dépôts</p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">40%</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Moy. retraits</p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">8,147 CZK</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Moy. dépôts</p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">4,447 CZK</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex space-x-2 items-start">
                        <div className="mt-1 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Les <span className="font-medium">retraits dominent</span> avec 60% des transactions (49,8% en espèces via VYBER et 23,85% interbancaires via PREVOD NA UCET).
                        </p>
                    </div>

                    <div className="flex space-x-2 items-start">
                        <div className="mt-1 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Les <span className="font-medium">dépôts représentent 40%</span> (17% en cash via VKLAD et 7% interbancaires via PREVOD Z UCTU).
                        </p>
                    </div>

                    <div className="flex space-x-2 items-start">
                        <div className="mt-1 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Les <span className="font-medium">retraits par carte</span> (VYBER KARTOU) sont rares (&lt;1%), mais leurs comptes affichent des soldes plus élevés, suggérant des clients plus aisés.
                        </p>
                    </div>

                    <div className="flex space-x-2 items-start">
                        <div className="mt-1 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Les <span className="font-medium">dépôts</span>, notamment interbancaires et en cash, impliquent des montants plus élevés (moyenne: 4446,653 CZK), possiblement liés à des opérations professionnelles.
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="p-1 rounded-md bg-amber-100 dark:bg-amber-900/20">
                        <Info className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                        Les retraits, plus fréquents, ont une moyenne de 8147,206 CZK, reflétant des usages variés.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TransactionVolumeConclusion;