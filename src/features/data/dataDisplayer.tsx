import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { DataInstance, InstanceData,  } from './dataAPI'

import {
	fetchDataAsync, selectData
} from "./dataSlice"

const DataDisplayer = () => {
	const dispatch = useAppDispatch()
	const data = useAppSelector(selectData)
	const [dataPresent, setDataPresent] = useState<boolean>(false)

	useEffect(() => {
		if (!dataPresent) { // if the data is loaded
			setDataPresent(true)
			dispatch(fetchDataAsync())
		}
	}, [])

	const renderedData = data.data.map((d: DataInstance) => {
		const insideElements = d.data.map((i: InstanceData) => (
			<p>{i.header}: {i.length}</p>
		))	
		return (
			<>
				<h1>{d.header}</h1>
				{insideElements}
			</>
		)
	})
	return (
		<div>
			{renderedData}	
		</div>
	)
}

export default DataDisplayer
