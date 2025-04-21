'use client';

import { getTransactionsType } from '@/app/actions';
import { TransactionType } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Couleurs modernes et cohérentes
const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];

const RADIAN = Math.PI / 180;

const TypeTransactionChart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [transactionType, setTransactionType] = useState<TransactionType[]>([]);

    const fetchTransactionType = async () => {
        try {
            setIsLoading(true);
            const data = await getTransactionsType();
            if (data) {
                setTransactionType(data);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactionType();
    }, []);

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: {
        cx: number;
        cy: number;
        midAngle: number;
        innerRadius: number;
        outerRadius: number;
        percent: number;
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize="12"
                fontWeight="500"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    // Animation de chargement
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
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Type de transactions
            </h4>

            {transactionType.length === 0 ? (
                <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Aucune donnée disponible
                </div>
            ) : (
                <div className="h-full">
                    <ResponsiveContainer width="100%" height="80%">
                        <PieChart>
                            <Pie
                                data={transactionType}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                paddingAngle={4}
                                dataKey="proportion"
                            >
                                {transactionType.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        stroke="none"
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                                values='type'
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default TypeTransactionChart;