const isObject = (item: any) => (
    item && typeof item === 'object' && !Array.isArray(item))

const deepFreeze = (obj: any) => {
    Object.keys(obj).forEach(
        key => key && isObject(obj[key]) && Object.freeze(obj[key]),
    )
    return Object.freeze(obj)
}

const accentColors = ['#23A6f0', '#614767', '#810E21', '#FF8D35']
const neutralColors = ['#EBF2EA', '#F0E8E7', '#80746E', '#767676']
const darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999']
const lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA']
const statusColors: any = {
    critical: '#b70014',
    error: '#FA0606',
    warning: '#FFD144',
    ok: '#27AE60',
    unknown: '#CCCCCC',
    disabled: '#CCCCCC',
}

const colors: any = {
    brand: {
        light: '#196394',
        dark: '#196394'
    }
}

export const hnsTheme = deepFreeze({
    global: {
        colors,
        font: {
            family: 'Roboto, sans-serif;',
            size: '12px',
        },
        control: {
            border: {
                radius: '8px',
            },
        },
        input: {
            weight: 'normal'
        }
    },
    button: {
        extend: `
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -html-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        `,
    },
})