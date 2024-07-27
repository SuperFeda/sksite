export function translate(key: string): string {
    let language = require(`./local/${localStorage.getItem("lang")}.json`)
    return language[key] || require('./local/en.json')[key] || key
}
