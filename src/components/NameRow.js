import { useEffect, useRef, useState } from 'react'
import s from '../App.module.css'
import { defaultTypes } from '../default-data'

const Menu = ({ setOpen, selected, setSelected }) => {
    // ниже менюшка и её закрытие при клике вне её
    const outside = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (!outside?.current?.contains(event.target)) {
                setOpen(false)
            }
        }

        const onKeypress = e => e.keyCode === 27 && setOpen(false)

        document.addEventListener('keypress', onKeypress)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keypress', onKeypress)
        }
    }, [outside, setOpen])


    const handleClick = (type) => {
        setSelected(type)
        setOpen(false)
    }

    return (
        <div className={s.menuSelected} ref={outside}>
            {defaultTypes.map((type, index) => <>
                <div
                    key={index}
                    onClick={() => handleClick(type)}
                    style={{ color: selected.name === type.name ? "gold" : "000" }}>
                    {type.name}
                </div>
            </>)}
        </div>
    )
}

export const NameRow = ({
    firstIndicatorSelected, setFirstIndicatorSelected,
    secondIndicatorSelected, setSecondIndicatorSelected
}) => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return <div className={s.MachineInfoName}>

        <span onClick={() => setFirstOpen(true)}>
            {firstIndicatorSelected.name}
        </span>
        {firstOpen &&
            <Menu
                setOpen={setFirstOpen}
                selected={firstIndicatorSelected}
                setSelected={setFirstIndicatorSelected}
            />}

        <span onClick={() => setSecondOpen(true)}>
            {secondIndicatorSelected.name}
        </span>
        {secondOpen &&
            <Menu
                setOpen={setSecondOpen}
                selected={secondIndicatorSelected}
                setSelected={setSecondIndicatorSelected}
            />}
    </div>
}