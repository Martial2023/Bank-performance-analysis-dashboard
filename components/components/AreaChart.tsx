import { VolumeTransactionValueCount } from '@/lib/types';
import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


type Props = {
    data: VolumeTransactionValueCount[]
    type: "prêts" | "transactions"
}
const AreaGraphic = ({ data, type }: Props) => {
    return (
        <div className='w-full h-full'>
            <h4>{type[0].toUpperCase() + type.slice(1)}</h4>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <Area type="monotone" dataKey="ca" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

            <div className='mt-10'>
                <h4>Nombre de {type}</h4>

                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <Tooltip />
                        <Area type="monotone" dataKey="volume" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default AreaGraphic