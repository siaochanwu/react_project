import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>name</th>
                <th>job</th>
            </tr>
        </thead>
    )
}
//將資料以參數形式傳入
const TableBody = (props) => {

    //建立變數rows，將資料分成一列列存在變數裡，一個tbody裡有多個tr
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
 }

//如果沒存放state 可以將class component 改成 simple component
const Table = (props) => {
    const {characterData, removeCharacter} = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )

}

export default Table;