import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatExtensionDate(date: string){
    const formattedData = format(new Date(date), "EEEE, dd 'de' MMMM 'de' yyyy", {
     locale: ptBR
    });

    return formattedData
} 

export function formatTime(date: string) {
    const formattedTime = format(new Date(date), "HH:mm", {
        locale: ptBR
    });

    return formattedTime
}

