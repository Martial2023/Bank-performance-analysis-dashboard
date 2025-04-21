// app/actions/volumeTransactionActions.ts
"use server";

import { promises as fs } from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { VolumeTransactionValueCount, VolumeTransactionResponse, TransactionType, TransactionOperation, DominantTransactionCountProps, DominantAccountCountProps } from "@/lib/types";

interface VolumeTransactionValueCountCSVCa {
    date: string,
    volume: number,
    ca: number
}
export async function getVolumeTransactions(): Promise<VolumeTransactionResponse> {
    try {
        const filePath = path.join(process.cwd(), "kpi_data", "volume_transaction_value_count_mounth_df.csv");

        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ";",
        });

        // Mapper les données dans le format VolumeTransaction
        const data: VolumeTransactionValueCount[] = records.map((record: VolumeTransactionValueCountCSVCa) => ({
            date: record.date,
            volume: Number(record.volume),
            ca: Number(record.ca),
        }));

        // Calculer les sommes
        const totalVolume = data.reduce((sum, item) => sum + item.volume, 0);
        const totalCA = data.reduce((sum, item) => sum + item.ca, 0);

        return {
            data,
            totals: {
                totalVolume,
                totalCA,
                totalAccount: 4500,
            },
        };
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return {
            data: [],
            totals: { totalVolume: 0, totalCA: 0, totalAccount: 0 },
        };
    }


}

interface TransactionOperationCSV {
    type: string,
    proportion: number
}
export async function getTransactionsType(): Promise<TransactionType[]> {
    try {
        const filePath = path.join(process.cwd(), "kpi_data", "transaction_type.csv");

        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ";",
        });

        const data: TransactionType[] = records.map((record: TransactionOperationCSV) => ({
            type: record.type,
            proportion: Number(record.proportion),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}

export async function getTransactionsOperation(type: "transactions" | "prêts"): Promise<TransactionOperation[]> {
    try {
        const filePath = path.join(process.cwd(), "kpi_data", (type === "transactions") ? "transaction_operation.csv" : "loan_status.csv");

        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ";",
        });

        const data: TransactionOperation[] = records.map((record: TransactionOperationCSV) => ({
            operation: record.type,
            proportion: Number(record.proportion),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}

interface DominantTransactionCountPropsCSV {
    A2: string,
    count: number
}
export async function getDominantDistrictCount(type: "transactions" | "prêts"): Promise<DominantTransactionCountProps[]> {
    try {
        const filePath = path.join(process.cwd(), "kpi_data", (type === "transactions")? "dominant_district_count_df.csv" : "dominant_district_loan_count.csv");

        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ";",
        });

        const data: DominantTransactionCountProps[] = records.map((record: DominantTransactionCountPropsCSV) => ({
            district: record.A2,
            proportion: Number(record.count),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}


interface DominantAccountCountPropsCSV {
    account_id: string,
    transaction_count: number
}
export async function getDominantAccountCount(): Promise<DominantAccountCountProps[]> {
    try {
        const filePath = path.join(process.cwd(), "kpi_data", "transaction_per_account.csv");

        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ";",
        });

        const data: DominantAccountCountProps[] = records.map((record: DominantAccountCountPropsCSV) => ({
            account: record.account_id,
            proportion: Number(record.transaction_count),
        }));

        return data
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return []
    }


}


interface VolumeTransactionValueCountCSV {
    date: string,
    volume: number,
    loan: number
}
export async function getVolumeLoans(): Promise<VolumeTransactionResponse> {
    try {
        const filePath = path.join(process.cwd(), "kpi_data", "volume_loan_count_sum.csv");

        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parser le CSV
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            delimiter: ";",
        });

        // Mapper les données dans le format VolumeTransaction
        const data: VolumeTransactionValueCount[] = records.map((record: VolumeTransactionValueCountCSV) => ({
            date: record.date,
            volume: Number(record.volume),
            ca: Number(record.loan),
        }));

        // Calculer les sommes
        const totalVolume = data.reduce((sum, item) => sum + item.volume, 0);
        const totalCA = data.reduce((sum, item) => sum + item.ca, 0);

        return {
            data,
            totals: {
                totalVolume,
                totalCA,
                totalAccount: 682,
            },
        };
    } catch (csvError) {
        console.error("\nErreur lors du chargement du CSV :", csvError);
        return {
            data: [],
            totals: { totalVolume: 0, totalCA: 0, totalAccount: 0 },
        };
    }


}