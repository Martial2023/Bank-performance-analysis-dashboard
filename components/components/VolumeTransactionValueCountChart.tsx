'use client'

import React, { useEffect, useState } from 'react'
import AreaGraphic from './AreaChart'
import { Totals, VolumeTransactionResponse, VolumeTransactionValueCount } from '@/lib/types'
import { getVolumeLoans, getVolumeTransactions } from '@/app/actions'

type Props = {
  setTotals: (volumeTransactionValueCount: Totals) => void
  setIsLoading: (isLoading: boolean) => void
  type: "prêts" | "transactions"
}

const VolumeTransactionValueCountChart = ({ setTotals, setIsLoading, type }: Props) => {
  const [volumeTransactionValueCount, setVolumeTransactionValueCount] = useState<VolumeTransactionValueCount[]>([])

  const fetchVolumeTransaction = async () => {
    try {
      setIsLoading(true)
      const { data, totals }: VolumeTransactionResponse = type === "transactions"? await getVolumeTransactions () : await getVolumeLoans()
      if (data) {
        setVolumeTransactionValueCount(data)
      }
      if (totals) {
        setTotals(totals)
      }
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchVolumeTransaction();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200">Aperçu des transactions</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-400 border-2 border-gray-200 dark:border-gray-700 rounded-lg h-[650px]">
        <AreaGraphic
          data={volumeTransactionValueCount}
          type={type}
        />
      </div>
    </div>
  )
}

export default VolumeTransactionValueCountChart