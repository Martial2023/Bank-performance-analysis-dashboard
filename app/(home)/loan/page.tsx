'use client'

import React, { useState } from 'react';
import { TrendingUp, Users, CreditCard, Loader2 } from 'lucide-react';
import { Totals } from '@/lib/types';
import VolumeTransactionValueCountChart from '@/components/components/VolumeTransactionValueCountChart';
import OperationTransactionChart from '@/components/components/OperationTransactionChart';
import TopRegionChart from '@/components/components/TopRegionChart';
import { formatNumber } from '@/lib/formatNumber';
import LoanConclusion from '@/components/components/LoanConclusion';

const Page = () => {
  const [totals, setTotals] = useState<Totals>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <main className="p-2 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Tableau de bord</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Vue d&apos;ensemble des prêts et analyses</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-1 md:col-span-4 space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Nombre de prêts</p>
                  {
                    isLoading ? (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                          <div className="h-4 w-4">
                            <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xl font-bold mt-1 text-gray-800 dark:text-gray-200">{totals?.totalVolume ? formatNumber(totals?.totalVolume) : "NA"}</p>
                    )
                  }
                </div>
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Prêts (CZK)</p>
                  {
                    isLoading ? (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                          <div className="h-4 w-4">
                            <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold mt-1 text-gray-800 dark:text-gray-200">{totals?.totalCA ? formatNumber(totals?.totalCA) : "NA"}</p>
                    )
                  }
                </div>
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                  <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Comptes actifs</p>
                  {
                    isLoading ? (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                          <div className="h-4 w-4">
                            <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold mt-1 text-gray-800 dark:text-gray-200">{totals?.totalAccount ? formatNumber(totals?.totalAccount) : "NA"}</p>
                    )
                  }

                </div>
                <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/20">
                  <Users className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
              </div>
            </div>
          </div>

          <VolumeTransactionValueCountChart
            setTotals={setTotals}
            setIsLoading={setIsLoading}
            type={"prêts"}
          />
        </div>

        {/* Side Panel */}
        <div className="col-span-1 md:col-span-2 h-full">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700 h-full space-y-4">
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">Dominance des prêts</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Répartition des status de prêts enregistrés</p>
            </div>

            <div className='h-[350px]'>
              <OperationTransactionChart
                type={"prêts"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 my-6'>
        <div className='col-span-1 rounded-2xl shadow-md border min-h-[400px]'>
          <TopRegionChart
            type={"prêts"}
          />
        </div>

        <div className='col-span-1 rounded-2xl shadow-md border min-h-[400px]'>
          <LoanConclusion />
        </div>
      </section>

      <section className='my-6 rounded-2xl shadow-2xl'>

      </section>
    </main>
  );
};

export default Page;