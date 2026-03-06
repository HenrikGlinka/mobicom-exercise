export function toDateString(date: Date): string {

    return date.toISOString().split('T')[0];
}

export function getDateString(date: Date, offset?: number): string {

    if (offset !== undefined) {
        const dateCopy = new Date(date);
        dateCopy.setDate(dateCopy.getDate() + offset);

        return toDateString(dateCopy);
    }

    return toDateString(date);
}