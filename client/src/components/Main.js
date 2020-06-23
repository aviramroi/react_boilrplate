import React,{useState,useEffect} from 'react'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; 
import {TreeReducerDefaultState} from './Data'

const Main = () => {
    const [treeData,setData] = useState(TreeReducerDefaultState)
    const [versions,setVersion] = useState(TreeReducerDefaultState)

    const onChange = (lastEdition,newEdition)=> {
        setData(newEdition)
        let a = [...versions]
        a.push(lastEdition)
        setVersion(a)
    }

    useEffect(()=>{
        console.log(treeData)
    },[treeData])
    return (
        <div style={{height:"100vh",width:"100vw"}}>
            <SortableTree
                treeData={treeData}
                onChange={treenewData => onChange( treeData,treenewData )}
                />
        </div>
    )
}

export default Main;