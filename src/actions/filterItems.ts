'use client'

const cleanString = (str: string) => {
    return str.trim().toLowerCase();
}

const tokenizeString = (str: string) => {
    return cleanString(str).split(" ");
}

export function filterItems(items: any[], query: string) {
    return items.filter(item => tokenizeString(item.title).some(word => word.startsWith(cleanString(query))));
}