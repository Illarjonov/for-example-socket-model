export const defaultData = [
    {
        type: "A",
        overload: true,
        worked: true,
        temperature: 35,
        load: 95,
        ending: 47
    },
    {
        type: "Б",
        overload: true,
        worked: false,
        temperature: 120,
        load: 50,
        ending: 78
    },
    {
        type: "А",
        overload: false,
        worked: true,
        temperature: 105,
        load: 20,
        ending: 30
    },
    {
        type: "А",
        overload: true,
        worked: true,
        temperature: 55,
        load: 5,
        ending: 60,
    }
]

export const defaultTypes = [
    { name: "Температура", type: "temperature", units: "°C" },
    { name: "Нагрузка", type: "load", units: "%" },
    { name: "Готовность", type: "ending", units: "%" }
]
