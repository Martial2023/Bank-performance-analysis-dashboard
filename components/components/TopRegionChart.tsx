'use client'

import { getDominantDistrictCount } from '@/app/actions';
import { DominantTransactionCountProps, TypeTransLoan } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/button';
import TopRegionCredenzaChart from './TopRegionCredenzaChart';

const TopRegionChart = ({ type }: TypeTransLoan) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [dominantDistrictCount, setDominantDistrictCount] = useState<DominantTransactionCountProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchDominantDistrictCount = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await getDominantDistrictCount(type);
            if (data) {
                setDominantDistrictCount(data);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
            setError('Impossible de charger les données. Veuillez réessayer plus tard.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDominantDistrictCount();
    }, []);

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <p className="font-medium">{error}</p>
                <Button
                    variant={"outline"}
                    onClick={fetchDominantDistrictCount}
                    className="mt-3 px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors"
                >
                    Réessayer
                </Button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-16 h-16 mb-3">
                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-300 border-b-blue-200 border-l-blue-400 animate-spin"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-75"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Chargement des données</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Préparation du graphique...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col p-2">
            <div className="px-4 pt-2 pb-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Répartition des {type} par Région</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Top 10 des districts</p>
            </div>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={dominantDistrictCount.slice(0, 10)}
                        layout="vertical"
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        className="animate-fadeIn"
                    >
                        <XAxis
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            dataKey="district"
                            type="category"
                            scale="band"
                            width={70}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '8px',
                                border: '1px solid #eee',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                            cursor={{ fill: 'rgba(0, 0, 0, 0.03)' }}
                            formatter={(value) => [`${(parseFloat(value.toString()) * 100).toFixed(2)}%`, 'Proportion']}
                        />
                        <Bar
                            dataKey="proportion"
                            name="Proportion (%)"
                            radius={[0, 4, 4, 0]}
                            fill="#6366f1"
                            background={{ fill: 'rgba(0, 0, 0, 0.04)' }}
                            animationDuration={1200}
                            animationEasing="ease-out"
                            barSize={24}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div
                className='w-full flex items-center justify-center my-2'
            >
                <TopRegionCredenzaChart
                    data={dominantDistrictCount}
                    type={type as unknown as TypeTransLoan}
                />
            </div>
            <style jsx global>{`
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}

export default TopRegionChart;