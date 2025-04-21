export function formatNumber(number: number): string {
    const isNegative = number < 0;
    const absNumber = Math.abs(number);

    const billion = 1_000_000_000;
    const million = 1_000_000;
    const thousand = 1_000;

    let formattedNumber: string;

    if (absNumber >= billion) {
        // Formater en milliards (B)
        const value = absNumber / billion;
        formattedNumber = `${value.toFixed(2)}B`;
    } else if (absNumber >= million) {
        // Formater en millions (M)
        const value = absNumber / million;
        formattedNumber = `${value.toFixed(2)}M`;
    } else if (absNumber >= thousand) {
        // Formater en milliers (k)
        const value = absNumber / thousand;
        formattedNumber = `${value.toFixed(2)}k`;
    } else {
        // Pas de suffixe, formater directement
        formattedNumber = absNumber.toFixed(2);
    }

    // Supprimer les décimales inutiles (par exemple, "1.00" → "1")
    formattedNumber = parseFloat(formattedNumber).toString();
    if (formattedNumber.includes(".")) {
        formattedNumber = parseFloat(formattedNumber).toFixed(2).replace(/\.?0+$/, "");
    }

    // Ajouter le suffixe (B, M, k) après avoir nettoyé les décimales
    if (absNumber >= billion) {
        formattedNumber = `${formattedNumber.replace(/\.?0+$/, "")}B`;
    } else if (absNumber >= million) {
        formattedNumber = `${formattedNumber.replace(/\.?0+$/, "")}M`;
    } else if (absNumber >= thousand) {
        formattedNumber = `${formattedNumber.replace(/\.?0+$/, "")}k`;
    }

    // Ajouter le signe négatif si nécessaire
    return isNegative ? `-${formattedNumber}` : formattedNumber;
}