import { promises as fs } from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { VolumeTransactionValueCount } from "./types";

export async function loadVolumeTransactionFromCSV(): Promise<VolumeTransactionValueCount[]> {
  try {
    const filePath = path.join(process.cwd(), "public", "kpi_data", "volume_transaction_value_count_mounth_df.csv");
    
    const fileContent = await fs.readFile(filePath, "utf-8");
    
    // Parser le CSV
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ";",
    });
    
    // Mapper les données dans le format VolumeTransaction
    const data: VolumeTransactionValueCount[] = records.map((record: any) => ({
      date: record.date,
      volume: Number(record.volume),
      ca: Number(record.ca),
    }));
    
    return data;
  } catch (error) {
    throw new Error(`Erreur lors du chargement du fichier CSV : ${error}`);
  }
}