import s from '../App.module.css'

export const AddNewMachine = ({
    data,
    setData,
}) => {
    const getRandom = () => Math.floor(Math.random() * 100) + 1
    const getRandomType = () => Math.random() < 0.5
    
    const handleClick = () => {
        setData(
            [...data]
                .concat({
                    type: getRandomType() ? "А" : "Б",
                    overload: getRandomType(),
                    worked: getRandomType(),
                    temperature: getRandom(),
                    load: getRandom(),
                    ending: getRandom(),
                }))
    }
    
    return <div className={s.MachineInfo}>
        <div
            onClick={handleClick}
            className={s.CirculeInfoAddNew}>
            <p> + </p>
        </div>
    </div>
}