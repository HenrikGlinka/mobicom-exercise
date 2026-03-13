
function toDate(date: Date | 'today' | 'yesterday'): Date {

    const today = new Date();
    const dateCopy = new Date();

    switch (date) {
        case 'today':
            dateCopy.setDate(today.getDate());
            break;
        case 'yesterday':
            dateCopy.setDate(today.getDate() - 1);
            break;
        default:
            dateCopy.setDate(date.getDate());
    }

    return dateCopy;
}

export function toDateString(date: Date | 'today' | 'yesterday'): string {

    return toDate(date).toISOString().split('T')[0];
}

export function getDateString(date: Date | 'today' | 'yesterday', offset?: number): string {

    if (offset !== undefined) {

        switch (date) {
            case 'yesterday':
                date = new Date();
                date.setDate(date.getDate() - 1);
                break;
            default:
                date = new Date(date);
        }

        date.setDate(date.getDate() + offset);

        return toDateString(date);
    }

    return toDateString(date as Date);
}