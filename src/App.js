import s from './App.module.css'
import React, { useState } from 'react'
import { defaultData, defaultTypes } from './default-data'
import { NameRow } from './components/NameRow'
import { MachineInfoRows } from './components/MachineInfoRows'
import { AddNewMachine } from './components/AddNewMachine'

function App() {
  const [firstIndicatorSelected, setFirstIndicatorSelected] = useState(() => defaultTypes[0])
  const [secondIndicatorSelected, setSecondIndicatorSelected] = useState(() => defaultTypes[1])

  const [data, setData] = useState(() => defaultData)

  return <div className={s.App}>

    <div className={s.InformationsBlock}>

      <div className={s.InformationBlockName}>
        Насосная установка
      </div>

      <div className={s.MachineInfoBlock}>
        <NameRow
          firstIndicatorSelected={firstIndicatorSelected}
          setFirstIndicatorSelected={setFirstIndicatorSelected}
          secondIndicatorSelected={secondIndicatorSelected}
          setSecondIndicatorSelected={setSecondIndicatorSelected}
        />

        <MachineInfoRows //иттерация массива
          data={data}
          firstIndicatorSelected={firstIndicatorSelected}
          secondIndicatorSelected={secondIndicatorSelected}
        />

        {data.length < 9 &&
          <AddNewMachine
            data={data}
            setData={setData}
          />}

      </div>
    </div>
  </div>
}

export default App
