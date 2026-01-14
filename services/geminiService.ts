import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWordPressAdvice = async (question: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Tu es un expert senior en WordPress et DevOps. 
        Ton but est d'aider les utilisateurs à cloner, migrer ou dupliquer des sites WordPress.
        
        Règles:
        1. Réponds de manière concise et technique.
        2. Si l'utilisateur demande comment cloner, propose des solutions via Plugins (Duplicator, All-in-One WP Migration) et via méthode Manuelle (FTP + SQL).
        3. Avertis toujours sur les risques (sauvegardes obligatoires).
        4. Réponds en format Markdown.
        5. Sois amical et professionnel.`,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster responses on basic queries
      },
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse pour le moment.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Une erreur est survenue lors de la consultation de l'expert IA. Vérifiez votre clé API.";
  }
};