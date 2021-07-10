export type InstanceData = { header: string, length: number }
export type DataInstance = { header: string, data: Array<InstanceData> }

export function fetchDatabaseQuery(query: any) {
    return new Promise((resolve) => {
        return fetch("/barchart_with_slider", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(query),
        })
            .then(response => {
                return response.json()
            }).then(json => {
                resolve(json)
            })
    })
}

export function simulateDatabaseQuery() {
    return new Promise((resolve: (result: Array<DataInstance>) => void) => {
        setTimeout(() => {
            const result: Array<DataInstance> = [
                {
                    header: new Date(2019, 1, 1).toISOString(),
                    data: [{ header: "Scott", length: 4 }, { header: "Jim", length: 700 }, { header: "John", length: 1}],
								},
                {
                    header: new Date(2020, 1, 1).toISOString(),
                    data: [{ header: "Scott", length: 1 }, { header: "Jim", length: 82 }, { header: "John", length: 102}],
                },
                {
                    header: new Date(2021, 1, 1).toISOString(),
                    data: [{ header: "Scott", length: 40 }, { header: "Jim", length: 70 }, { header: "John", length: 93}],
                },
            ]
            resolve(result)
        }, 5000)
    })
}