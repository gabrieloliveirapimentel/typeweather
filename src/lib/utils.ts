import { format, isToday, isTomorrow, parseISO } from "date-fns";
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

export function formatForecastDate(date: string) {
    const dateFormatted = parseISO(date);

    if(isToday(date)) {
        return "hoje"
    }

    if(isTomorrow(date)) {
        return "amanhã"
    }

    return format(dateFormatted, "EEEE", { locale: ptBR})
}

export function convertToCelsius(temperature: number) {
    return Math.round((temperature - 32) * (5 / 9));
}

