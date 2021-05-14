const { rawData } = require("./metaData.js")

const formatCsv = (data) => {
    let formattedData = []
    const headers = data[0]
    for(let i = 1; i < data.length; i++){
        let info = data[i]
        let obj = {}
        for(let j = 0; j < info.length; j++){
            obj[headers[j]] = info[j]
        }
        formattedData.push(obj)
    }
    return(formattedData)
}
console.log(formatCsv(rawData))
