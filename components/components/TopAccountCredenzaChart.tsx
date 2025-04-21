'use client'

import React from 'react'
import {
    Credenza,
    CredenzaBody,
    CredenzaClose,
    CredenzaContent,
    CredenzaDescription,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTitle,
    CredenzaTrigger,
} from "@/components/ui/CredenzaModal"
import { DominantAccountCountProps } from '@/lib/types'
import { Button } from '../ui/button'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


type Props = {
    data: DominantAccountCountProps[]
}
const TopAccountCredenzaChart = ({ data }: Props) => {
    return (
        <Credenza>
            <CredenzaTrigger asChild>
                <Button className='text-white'>
                    Voir tout
                </Button>
            </CredenzaTrigger>
            <CredenzaContent>
                <CredenzaHeader>
                    <CredenzaTitle>
                        Top accounts
                    </CredenzaTitle>

                    <CredenzaDescription>
                        Transactions par comptes
                    </CredenzaDescription>
                </CredenzaHeader>

                <CredenzaBody className='h-[80vh] md:max-h-[60vh] overflow-y-scroll p-2'>
                    <div className="h-[120vh]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
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
                                    dataKey="account"
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
                                    formatter={(value) => [`${value.toString()}`, 'transactions']}
                                />
                                <Bar
                                    dataKey="proportion"
                                    name="Proportion (%)"
                                    radius={[0, 4, 4, 0]}
                                    fill="#10b981"
                                    background={{ fill: 'rgba(0, 0, 0, 0.04)' }}
                                    animationDuration={1200}
                                    animationEasing="ease-out"
                                    barSize={24}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CredenzaBody>

                <CredenzaFooter
                >
                    <CredenzaClose asChild>
                        <Button id="close_navbar">Fermer</Button>
                    </CredenzaClose>
                </CredenzaFooter>
            </CredenzaContent>
        </Credenza>
    )
}

export default TopAccountCredenzaChart