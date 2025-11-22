import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrandAnalysis = async (businessDescription: string): Promise<AnalysisResult> => {
    const model = "gemini-2.5-flash";
    
    const prompt = `Actúa como un consultor experto de marca y SEO de la agencia premium Smilelife. 
    Analiza la siguiente descripción de negocio y genera una identidad de marca estratégica.
    
    Descripción del negocio: "${businessDescription}"
    
    Devuelve un objeto JSON con:
    1. Un slogan impactante (máximo 10 palabras).
    2. 5 palabras clave SEO de alto valor.
    3. Un breve párrafo de estrategia digital (máximo 40 palabras).
    4. Una paleta de colores sugerida (3 códigos hex).
    `;

    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    slogan: { type: Type.STRING },
                    keywords: { 
                        type: Type.ARRAY, 
                        items: { type: Type.STRING } 
                    },
                    strategy: { type: Type.STRING },
                    colorPalette: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    }
                }
            }
        }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AnalysisResult;
};