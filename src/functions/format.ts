
const formatName = (firstName: string, lastName: string): string => {
    return `${capitalize(firstName)} ${capitalize(lastName)}`;
}

const capitalize = (name: string): string => {
    return `${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`;
}

export const formatting = {
    formatName
}