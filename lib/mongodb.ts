import { MongoClient } from "mongodb";

// Interface pour typer les options de connexion (optionnel, pour extensibilité)
interface MongoConnection {
  client: MongoClient;
  isConnected: boolean;
}

const MONGO_URL = process.env.MONGODB_URI || "";
if (!MONGO_URL) {
  throw new Error("MONGODB_URI must be defined in environment variables.");
}

let mongoConnection: MongoConnection | null = null;

export async function connectToDatabase(): Promise<MongoClient> {
  // Si la connexion existe et est active, la réutiliser
  if (mongoConnection && mongoConnection.isConnected) {
    return mongoConnection.client;
  }

  try {
    console.log("Établissement d'une nouvelle connexion à MongoDB...");
    const client = new MongoClient(MONGO_URL, {
      maxPoolSize: 10, // Limite le nombre de connexions simultanées
      minPoolSize: 1,  // Maintient au moins une connexion
      connectTimeoutMS: 10000, // Timeout de connexion de 10 secondes
      serverSelectionTimeoutMS: 5000, // Timeout de sélection de serveur
    });

    // Établir la connexion
    await client.connect();

    // Vérifier que la connexion est bien établie
    await client.db("admin").command({ ping: 1 });
    console.log("Connexion à MongoDB établie avec succès.");

    mongoConnection = {
      client,
      isConnected: true,
    };

    // Gérer la fermeture propre lors de l'arrêt de l'application
    process.on("SIGINT", async () => {
      await closeDatabaseConnection();
      process.exit(0);
    });

    return mongoConnection.client;
  } catch (error) {
    console.error("Erreur lors de la connexion à MongoDB :", error);
    throw new Error("Impossible de se connecter à MongoDB.");
  }
}

// Fonction pour vérifier l'état de la connexion
export async function checkConnection(): Promise<void> {
  if (mongoConnection && mongoConnection.isConnected) {
    try {
      await mongoConnection.client.db("admin").command({ ping: 1 });
    } catch (error) {
      console.error("La connexion à MongoDB est perdue :", error);
      mongoConnection.isConnected = false;
      mongoConnection = null; // Réinitialiser pour permettre une nouvelle connexion
    }
  }
}

// Fonction pour fermer la connexion (utilisée uniquement à l'arrêt de l'application)
export async function closeDatabaseConnection(): Promise<void> {
  if (mongoConnection && mongoConnection.isConnected) {
    await mongoConnection.client.close();
    console.log("Connexion à MongoDB fermée.");
    mongoConnection = null;
  }
}