import React from 'react';
import { Database, FileText, GitBranch, BarChart3, Shield } from 'lucide-react';
import Image from 'next/image';

const Page = () => {
    const steps = [
        {
            id: 1,
            title: 'Extraction',
            icon: <Database className="h-6 w-6" />,
            color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
            description: "Chargement des données brutes du Berka Dataset (CSV) dans une base PostgreSQL (Neon) avec Python, suivi d'une extraction vers des fichiers CSV.",
            tools: ['PostgreSQL', 'Python', 'pandas', 'SQLAlchemy']
        },
        {
            id: 2,
            title: 'Transformation',
            icon: <GitBranch className="h-6 w-6" />,
            color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
            description: 'Nettoyage et normalisation des données, puis calcul des KPI (volume, statuts des prêts) avec Python (`pandas`, `plotly`). Automatisation quotidienne via Airflow.',
            tools: ['Python', 'pandas', 'plotly', 'Airflow']
        },
        {
            id: 3,
            title: 'Chargement',
            icon: <FileText className="h-6 w-6" />,
            color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
            description: 'Sauvegarde des KPI dans MongoDB Atlas (NoSQL) avec Python (`pymongo`).',
            tools: ['MongoDB Atlas', 'pymongo']
        },
        {
            id: 4,
            title: 'Visualisation',
            icon: <BarChart3 className="h-6 w-6" />,
            color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
            description: 'Extraction des KPI depuis MongoDB (avec fallback CSV) et affichage dans un dashboard Next.js utilisant TypeScript, Tailwind CSS, et `recharts.js`. Déploiement sur Vercel.',
            tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'recharts.js', 'Vercel']
        },
        {
            id: 5,
            title: 'Monitoring',
            icon: <Shield className="h-6 w-6" />,
            color: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
            description: 'Validation des KPI et monitoring du pipeline avec Airflow logs.',
            tools: ['Airflow']
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 md:p-10">
            <header className="mb-16 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                Berka Dataset Pipeline
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Analyse de données bancaires du Berka Dataset (1993-1998) pour calculer et visualiser des KPI clés
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">ETL</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">Data Pipeline</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Banking Analytics</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Dashboard</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Database className="w-12 h-12 md:w-16 md:h-16 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Architecture Diagram */}
            <section className="max-w-6xl mx-auto mb-16">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-2 md:p-8">
                    <div className="aspect-video w-full bg-gray-50 dark:bg-gray-700/50 rounded-lg relative">
                        <Image
                            src={"/pipeline.png"}
                            fill
                            className="object-cover rounded-lg"
                            alt="pipeline"
                        />
                    </div>
                </div>
            </section>

            {/* Pipeline Steps */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
                        <GitBranch className="h-5 w-5" />
                    </span>
                    Flux de données
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {steps.map((step, index) => (
                        <div key={step.id} className="">
                            {index < steps.length - 1 && (
                                <div className="absolutes left-10 top-[4.5rem] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
                            )}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 flex flex-col items-center justify-center md:flex-row gap-6  z-10">
                                <div className={`h-10 w-10 shrink-0 rounded-lg ${step.color} flex items-center justify-center`}>
                                    {step.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                        <span>{step.id}. {step.title}</span>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.tools?.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Page;