import s from '../App.module.css'
import React from 'react'

const MachineInfo = ({ firstindicator, secondindicator, overload, type, worked }) => {
    return (
        <div className={s.MachineInfo}>
            <div
                //inline style не вызывает рендер из-за меморизации
                className={s.CirculeInfo}
                style={{
                    border: overload ? "4px solid #ff2400" : "4px solid #44944A",
                    backgroundColor: worked ? "#ccc" : "#44944A"
                }}
            >
                <p> {type} </p>
            </div>
            <span> {firstindicator} </span>
            <span> {secondindicator} </span>
        </div>
    )
}
// Меморизация компонента => Если в компонент попадают пропсы, которые были там прежде, то
// переотрисовка не произойдет. Костыль реакта, так как родительский компонент рендерит все дочерние
const MemoMachineInfo = React.memo(MachineInfo)

export const MachineInfoRows = ({
    data,
    firstIndicatorSelected,
    secondIndicatorSelected
}) => <>
        {
            data.map((item, index) => <>
                <MemoMachineInfo
                    type={item.type}
                    worked={item.worked}
                    overload={item.overload}
                    //данные для отрисовки, меняются в зависимости от выбранного
                    firstindicator={item[firstIndicatorSelected.type] + firstIndicatorSelected.units}
                    secondindicator={item[secondIndicatorSelected.type] + secondIndicatorSelected.units}
                    key={index + Math.random()} //уникальный ключ, нужен для правильной отрисовки реакта
                />
            </>)
        }
    </>